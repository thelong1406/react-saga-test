import { call, put, takeLatest } from "redux-saga/effects";
import { fetchFormFailure, fetchFormSuccess, fetchFormRequest } from "../reducers/form-reducer";
import { FormModel } from "../../models/FormModel";
import {fetchForm} from "../../api/form-api"
import { PayloadAction } from "@reduxjs/toolkit";

function* fetchFormSaga(action: PayloadAction<string>) {
  try {
    const data = yield call(fetchForm, action.payload);
    yield put(fetchFormSuccess(data));
  } catch (error: any) {
    yield put(fetchFormFailure(error.message || "Error"));
  }
}

export default function* formSaga() {
  yield takeLatest(fetchFormRequest.type, fetchFormSaga);
}
