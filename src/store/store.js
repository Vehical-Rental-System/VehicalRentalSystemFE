 
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { encryptTransform } from "redux-persist-transform-encrypt";

import userReducer from "./userSlice";
// import ordersReducer from "./ordersSlice";


// Encryption transformer
const encryptor = encryptTransform({
  secretKey: process.env.REACT_APP_STORE_PERSIST_SECRET, // Use a secure secret key
  onError: (error) => {
    console.error("Encryption error:", error);
  },
});

// Persist configuration for the reducers
const persistConfig = {
  key: "root",
  storage,
  transforms: [encryptor],
  whitelist: ["user", {/*"orders"*/}], // List slices you want to persist
};

// Combine all reducers
const rootReducer = combineReducers({
  user: userReducer,
//   orders: ordersReducer,
});

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store with the persisted reducer
const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export default store;