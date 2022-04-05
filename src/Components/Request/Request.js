import axios from 'axios'
export const request=({dispatch})=>(next)=>(action)=>{
    if(action.type!=='getProducts/request'){
        next(action)
        return
    }
    next(action)
    if(action.payload){
        axios({
            url:action.payload.url,
            method:action.payload.get
        }).then(res=>{
            dispatch({type:action.payload.onSuccess,payload:res.data})
        }).catch(err=>{
            console.log(err)
        })
        return
    }
}