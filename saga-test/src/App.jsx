import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks";
import { fetchFormRequest } from "./redux/reducers/form-reducer";

export default function App() {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchFormRequest());
  }, [dispatch]);

  return (
    <div className="p-4">
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      
      <form 
      // onSubmit={handleSubmit}
      >
            <label htmlFor="textInput">Text Input:</label>
            <input
                type="text"
                id="textInput"
                name="textInput"
                placeholder="Enter text here"
                value={data.key ?? ""}
                // onChange={handleChange}
            />
            <br /><br />

            <label htmlFor="datePicker">Select Date:</label>
            <input
                type="date"
                id="datePicker"
                name="date"
                value={data?.date}
                // onChange={handleChange}
            />
            <br /><br />

            <input
                type="checkbox"
                id="checkbox"
                name="isChecked"
                checked={data.isChecked}
                // onChange={handleChange}
            />
            <label htmlFor="checkbox">Check me</label>
            <br /><br />

            <button type="submit">Submit</button>
        </form>
    </div>
  );
}