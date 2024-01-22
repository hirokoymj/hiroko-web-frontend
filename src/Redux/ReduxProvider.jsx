// import React from "react";
// import { Provider } from "react-redux";
// import { combineReducers } from "redux";
// import { configureStore } from "@reduxjs/toolkit";

// import { countReducer } from "Redux/counterSlice";
// import { tabSlice } from "Redux/tabSlice";

// const rootReducer = combineReducers({
//   counter: countReducer,
//   tab: tabSlice,
// });

// const enableDevTools = process.env.NODE_ENV !== "production";

// export const store = configureStore({
//   reducer: rootReducer,
//   devTools: {
//     trace: true,
//     maxAge: 25,
//     latency: 1000,
//     autoPause: true,
//     shouldRecordChanges: enableDevTools,
//   },
// });

// store.subscribe(() => console.log(store.getState()));

// console.log(store.getState());

// export const ReduxProvider = ({ children }) => (
//   <Provider store={store}>{children}</Provider>
// );
