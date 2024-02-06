import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    model: false
};

const modelSlice = createSlice({
    name: 'model',
    initialState,
    reducers: {
        openModel: (state) => {
            state.model = true;
        },
        closeModel: (state) => {
            state.model = false;
        },
    },
});

export const { openModel, closeModel } = modelSlice.actions;

export default modelSlice.reducer;
