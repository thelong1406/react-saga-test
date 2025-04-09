import React from "react";
import { useAppDispatch, useAppSelector } from "./hooks"
import { fetchFormRequest, changeKey } from "./redux/reducers/form-reducer";

export default function App() {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector((state) => state.form);

  const handleSubmit = () => {
    if (data?.key) {
      dispatch(fetchFormRequest(data?.key));
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeKey(e.currentTarget.value))
  }

  return (
    <div className="p-4">
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      <form
        onSubmit={handleSubmit}
      >
        <label htmlFor="textInput">Text Input:</label>
        <input
          type="text"
          id="textInput"
          name="textInput"
          placeholder="Enter text here"
          value={data?.key ?? ""}
          onChange={handleChange}
        />
        <br /><br />

        <label htmlFor="datePicker">Select Date:</label>
        <input
          type="date"
          id="datePicker"
          name="date"
          value={data?.date}
          readOnly={true}
        />
        <br /><br />

        <input
          type="checkbox"
          id="checkbox"
          name="isChecked"
          checked={data?.isChecked}
          readOnly={true}
        />
        {data?.isChecked && <label htmlFor="checkbox">Key matched</label>}
        <br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}