import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { authInitState } from "./auth/auth.init-state";
import { authReducer } from "./auth/auth.slice";


import { formInitState } from "./contactForm/form.init-state";
import { formReducer } from "./contactForm/form.slice";
import { contactsInitState } from "./contactsFilter/contacts.init-state";
import { contactsReducer } from "./contactsFilter/contacts.slice";
import { profileInitState } from "./profile/profile.init-state";
import { profileReducer } from "./profile/profile.slice";

const initState = {
    form: formInitState,
    contacts: contactsInitState,
    auth: authInitState,
    profile: profileInitState,
};

export const store = configureStore({
    preloadedState: initState,
    reducer: {
        form: formReducer,
        contacts: contactsReducer,
        auth: authReducer,
        profile: profileReducer,
    },
    devTools: true,
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
