import { configureStore,combineReducers } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice"
// import userSlice from "./userSlice";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from "./userReducer";

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}
// const rootReducer = combineReducers({user: userSlice, cart: cartSlice})
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartSlice,
});
const persistedReducer = persistReducer(persistConfig, rootReducer)


// export default configureStore({
//     reducer: {
//         cart: cartSlice,
//         user: userSlice,
      
//     }
// })

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });

  export let persistor = persistStore(store)