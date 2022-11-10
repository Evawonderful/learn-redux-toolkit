import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState{
    value: number;
}

const initialState: CounterState = {
    value: 0,
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        //increment
        //increase by 1
        incremented(state){
            state.value++;
        },
        //increase by n
        amountAdded(state, action: PayloadAction<number>){
            state.value += action.payload
        }
    }
    });


export const {incremented, amountAdded } = counterSlice.actions;
export default counterSlice.reducer;
