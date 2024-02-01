import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    search: localStorage.getItem('search') || "",
};

const authSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        searchredux: (state, action) => {
            state.search = action.payload;
            localStorage.setItem('search', action.payload);
        },
    },
});

export const { searchredux } = authSlice.actions;

export default authSlice.reducer;
