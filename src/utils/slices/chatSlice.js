import { createSlice } from "@reduxjs/toolkit";
import { ChatCount } from "../Constants"
 
const ChatSlice = createSlice({
    name:"chat",
    initialState:{messages:[]},
    reducers:{
        addMessage:(state,action)=>{
            if(ChatCount <= state.messages.length){
                state.messages.shift()
            }
            state.messages.push(action.payload)
        }
    }
});

export const {addMessage} = ChatSlice.actions
export default ChatSlice.reducer