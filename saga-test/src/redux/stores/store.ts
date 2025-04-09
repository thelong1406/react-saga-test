import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import appSaga from "../sagas/app-saga"
import appReducers from "../reducers/appReducers"

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: appReducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(appSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;