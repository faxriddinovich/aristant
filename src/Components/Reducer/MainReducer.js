import {createSlice} from '@reduxjs/toolkit'
import { action } from '../Action/Action'
const initialState={
    products:[]
}
const MainReducer=createSlice({
    name:"getProducts",
    initialState,
    reducers:{
        getProducts:(state,action)=>{
            state.products=action.payload
        }
    }
})
export const getProduct=()=>action({
    url:"https://artisant.io/api/products",
    method:"get",
    onSuccess:MainReducer.actions.getProducts.type
})
export default MainReducer.reducer