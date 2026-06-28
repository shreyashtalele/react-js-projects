import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counter_value: 0
}

const CounterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        incrementCounter: (state) => {
            state.counter_value++;
        },
        decerementCounter: (state) => {
            state.counter_value--;
        },
    },

})


export const { incrementCounter, decerementCounter } = CounterSlice.actions;
export default CounterSlice.reducer