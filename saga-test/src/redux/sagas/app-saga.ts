import { all } from "redux-saga/effects";
import formSaga from "./form-saga";

export default function* appSaga() {
    yield all([
        formSaga(),
    ])
  }