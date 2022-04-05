import { configureStore } from "@reduxjs/toolkit";
import MainReducer from "../../Reducer/MainReducer";
import { request } from "../Request";

export const store=configureStore({
    reducer:{
        posts:MainReducer
    },
    middleware:[
        request
    ]
})