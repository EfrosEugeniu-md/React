import { combineReducers } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import { groceryBudReducer } from "./groceryBudSlice";
import alertSlice from "./alertSlice";

const rootReducer = combineReducers({
  counter: counterSlice,groceryBud: groceryBudReducer,
  alert: alertSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
