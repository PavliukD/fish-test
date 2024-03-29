import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import SliceReducer from './slice';


export const reducer = combineReducers({
    slice: SliceReducer,
  })

  const persistConfig = {
    key: "root",
    storage,
    whitelist: ["slice"],
  };

const persistedReducer = persistReducer(persistConfig, reducer);


const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
const persistor = persistStore(store);

export { store, persistor };
  
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch