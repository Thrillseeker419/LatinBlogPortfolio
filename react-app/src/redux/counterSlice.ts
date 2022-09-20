import { bindActionCreators, createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import type { RootState } from './store'
import axios from 'axios'

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts'

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async ()=>{
    const response = await axios.get(POSTS_URL)
    return [...response.data]

})
export interface CounterState {
    value: number
}
const initialState: CounterState = {
    value: 0,
}
export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        increment:(state)=>{
            state.value +=1
        },
        decrement:(state)=>{
            state.value -=1
        },
        reset:(state)=>{
            state.value =0
        },
        incrementByAmount:(state, action: PayloadAction<number>)=>{
            state.value += action.payload
        }
    },
    extraReducers(builder){
        builder
        .addCase(fetchPosts.pending, (state,action)=>{
            //state.status = 'loading'
        })
    }
})
export const {increment, decrement, reset, incrementByAmount} = counterSlice.actions
export const selectCount = (state: RootState) => state.counter.value
export default counterSlice.reducer

