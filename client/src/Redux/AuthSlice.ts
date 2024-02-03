import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  user: {
    likedProjects: any[];
    savedProjects: any[];
    followed: any[];
    followers: any[];
  } | null;
}

const initialState: AuthState = {
  user: JSON.parse(localStorage.getItem('user')!) ?? null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    like: (state, action: PayloadAction<any>) => {
      const liked = state.user?.likedProjects.includes(action.payload) || false;
      if (liked) {
        state.user!.likedProjects = state.user!.likedProjects.filter(project => project !== action.payload);
      } else {
        state.user!.likedProjects.push(action.payload);
      }
      localStorage.setItem('user', JSON.stringify(state.user));
    },

    followed: (state, action: PayloadAction<any>) => {
      const followed = state.user?.followed.includes(action.payload) || false;
      console.log(followed)
      if (followed) {
        state.user!.followed = state.user!.followed.filter(project => project !== action.payload);
      } else {
        state.user!.followed.push(action.payload);
      }
      localStorage.setItem('user', JSON.stringify(state.user));
    },

    save: (state, action: PayloadAction<any>) => {
      const saved = state.user?.savedProjects.includes(action.payload) || false;
      if (saved) {
        state.user!.savedProjects = state.user!.savedProjects.filter(project => project !== action.payload);
      } else {
        state.user!.savedProjects.push(action.payload);
      }
      localStorage.setItem('user', JSON.stringify(state.user));
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem('user');
      localStorage.removeItem('access_token');
      localStorage.removeItem('search');
    },
  },
});

export const { login, logout, like, save, followed } = authSlice.actions;

export default authSlice.reducer;
