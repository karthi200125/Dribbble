import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";
import SearchSlice from "./SearchSlice";

const Store = configureStore({
    reducer: {
        user: AuthSlice,
        search: SearchSlice,
    }
})

export default Store