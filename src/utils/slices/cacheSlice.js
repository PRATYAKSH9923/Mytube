import { createSlice } from "@reduxjs/toolkit";

const cacheSlice = createSlice({
    name: 'api',
    initialState: {
        apis: {"hello": 8}
    },
    reducers: {
        pushApiData(state, action){
            state.apis[action.payload.key] = action.payload.value;
        }
    }
});

export const { pushApiData } =  cacheSlice.actions;
export default cacheSlice.reducer