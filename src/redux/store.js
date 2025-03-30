import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from './users'
import contactReducer from './updateContact'
import applyReducer from './Applied'
import EmployerReducer from './EmployerRedux'
import postReducer from './Postdata'
import regcallReducer from './regsta'
import registerusersReducer from './registerusers'


import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    version: 1,
    storage,
    blacklist: ['regcall', 'registerusers']
};

const rootReducer = combineReducers({ user: userReducer, contact: contactReducer, apply: applyReducer, employer: EmployerReducer, post: postReducer, regcall: regcallReducer, registerusers: registerusersReducer });

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, PAUSE,REHYDRATE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export let persistor = persistStore(store);