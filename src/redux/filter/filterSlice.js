import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        filter: '',
    },
    reducers: {
        filterContact(state, { payload }) {
            state.filter = payload
        },
    },
});

export const filterReducer = filterSlice.reducer;

export const { filterContact } = filterSlice.actions;