
import { persistStore } from 'redux-persist';
import { rootReducer } from './reducer';
import { configureStore } from '@reduxjs/toolkit';

export default function reduxConfig(onCompletion = () => { }) {
    // Create Redux store:
    const store = configureStore({
        reducer: rootReducer,
        middleware: []
    })
    const persistor = persistStore(store, null, onCompletion);
    return { store, persistor };
}
