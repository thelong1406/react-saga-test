import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FormModel } from "../../models/FormModel";

interface FormSate {
  data: FormModel | null;
  loading: boolean;
  error: string | null;
}

export interface FetchFormParams {
  key: string
}

const initialState: FormSate = {
  data: null,
  loading: false,
  error: null,
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    fetchFormRequest: (_state, _action: PayloadAction<string>) => { },

    fetchFormStart: (state) => {
      state.loading = true;
      state.error = null;
    },

    fetchFormSuccess: (state, action: PayloadAction<FormModel>) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchFormFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },

    changeKey: (state, action) => {
      state.loading = false,
        state.data = action.payload
    }
  },
});

export const {
  fetchFormRequest, 
  fetchFormSuccess, 
  fetchFormFailure, 
  fetchFormStart,
  changeKey 
} = formSlice.actions;
export default formSlice.reducer;