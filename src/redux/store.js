import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';

import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

// import { logInReducer } from './login/slice';
import authReducer from './auth/auth-slice';
import productsReducer from './products/products-slice';
import { diaryReducer } from './diary/diarySlice';


const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    products: productsReducer,
    diary: diaryReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck:
       {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, 'diary/addProduct/fulfilled', 'diary/removeProduct/fulfilled'],
      },
    }),
  devTools:true
});

export const persistor = persistStore(store);
