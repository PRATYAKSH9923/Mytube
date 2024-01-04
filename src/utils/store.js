import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./slices/appSlice";
import cacheSlice from "./slices/cacheSlice";
import chatSlice from "./slices/chatSlice";

const store = configureStore({
reducer:{
    app: appSlice,
    api: cacheSlice,
    chat: chatSlice
}
});

export default store