import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

import authReducer from './auth'
const authSetup = {
    key: "auth",
    storage: AsyncStorage,
}

export const rootReducer = combineReducers({
    authReducer: persistReducer(authSetup, authReducer)
})

