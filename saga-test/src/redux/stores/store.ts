import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import appSaga from "../sagas/app-saga"
import appReducers from "../reducers/appReducers"

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: appReducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(appSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;