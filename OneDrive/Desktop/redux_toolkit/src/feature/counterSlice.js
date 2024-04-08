import { createSlice } from "@reduxjs/toolkit";

const initialState={
    count1:0
}
const counterSlice=createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment:(state)=>{
            state.count1=state.count1+1
        },
        decrement:(state)=>{
            state.count1=state.count1-1
        }
    }
})

export default counterSlice.reducer
export const {increment,decrement}=counterSlice.actions