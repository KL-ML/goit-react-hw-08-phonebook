import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { privateApi, token } from "http/http";
import { selectAuthToken } from "redux/auth/auth.selector";

axios.defaults.baseURL = "https://63e10cb6dd7041cafb3fc6e4.mockapi.io";


export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, { getState, rejectWithValue }) => {
        try {
            const stateToken = selectAuthToken(getState()).token;

            if (!stateToken) {
                return rejectWithValue();
            }

            token.set(stateToken);
            const { data } = await privateApi.get('/contacts');
            return data;
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (currentContact, { getState, rejectWithValue }) => {
        try {
            const { id, name, number } = currentContact;
            const stateToken = selectAuthToken(getState()).token;
            if (!stateToken) {
                return rejectWithValue();
            }
            token.set(stateToken);
            const { data } = await privateApi.post('/contacts', { id, name, number });
            return data;
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (contactId, { getState, rejectWithValue }) => {
        try {
            const stateToken = selectAuthToken(getState()).token;
            if (!stateToken) {
                return rejectWithValue();
            }
            token.set(stateToken);
            const { data } = await privateApi.delete(`/contacts/${contactId}`);
            return data;
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);
