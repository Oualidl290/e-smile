import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import listReducer from '../components/Features/slice';

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    list: persistReducer(persistConfig, listReducer),
});

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        thunk: true,
        serializableCheck: false,
    }),
    devTools: process.env.NODE_ENV !== 'production',
});

// Create a persistor to be used with PersistGate in the application entry point
const persistor = persistStore(store);

export { store, persistor };
