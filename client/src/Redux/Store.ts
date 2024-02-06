import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";
import SearchSlice from "./SearchSlice";
import ModelSlice from "./ModelSlice";

const Store = configureStore({
    reducer: {
        user: AuthSlice,
        search: SearchSlice,
        model: ModelSlice,
    }
})

export default Store