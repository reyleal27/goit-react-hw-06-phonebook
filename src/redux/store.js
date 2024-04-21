import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactSlice } from './contactSlice';
import { filterSlice } from './filterSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const rootReducer = combineReducers({
    contacts: contactSlice.reducer,
    filter: filterSlice.reducer
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['contacts']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
        serializableCheck: false,
    })
    
})
export const persistor = persistStore(store);


