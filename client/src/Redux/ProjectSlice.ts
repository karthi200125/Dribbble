import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    user: any | null;
}

const initialState: AuthState = {
    user: JSON.parse(localStorage.getItem('user')!) ?? null,
};

const ProjectSlice = createSlice({
    name: 'project',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<any>) => {
            state.user = action.payload;
            localStorage.setItem('user', JSON.stringify(action.payload));
        },
        logout: (state) => {
            state.user = null;
            localStorage.removeItem('user');
        },
    },
});

export const { login, logout } = ProjectSlice.actions;

export default ProjectSlice.reducer;
