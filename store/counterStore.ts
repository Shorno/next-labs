import {create} from "zustand"

interface CounterState {
    counter: number;
    actions: {
        increment: (number?: number) => void;
        decrement: (number?: number) => void;
    }
}


const useCounterStore = create<CounterState>()(set => ({
    counter: 0,
    actions: {
        increment: (number) => set((state) => ({counter: state.counter + (number ? number : 1)})),
        decrement: (number) => set((state) => ({counter: state.counter - (number ? number : 1)})),
    }
}))


export const useCounter = () => useCounterStore((state) => state.counter)
export const useCounterActions = () => useCounterStore((state) => state.actions)