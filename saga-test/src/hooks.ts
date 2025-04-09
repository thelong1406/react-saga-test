import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./redux/stores/store";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
// import { AppDispatch, RootState } from '../types/Redux/storeTypes';
 
// export const useAppDispatch = () => useDispatch<AppDispatch>();
// export const useDispatchSelector: TypedUseSelectorHook<RootState> = useSelector;
 