import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        filter: '',
    },
    reducers: {
        addContact(state, { payload }) {
           state.items = [...state.items,  payload]
        },

        deleteContact(state, { payload }) {
          state.items = state.items.filter(({id}) => id !== payload)
        },
        
        filterContact(state, action) {
         state.filter = action.payload
        },   
    },
});

export const contactsReducer = contactsSlice.reducer;

export const { addContact, deleteContact, filterContact } = contactsSlice.actions;

