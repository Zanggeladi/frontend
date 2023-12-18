//和用户相关的状态管理

import {createSlice} from "@reduxjs/toolkit";
// import login from "@/pages/Login";
import {request} from "@/utils";

const userStore = createSlice({
    name:"user",
    //数据状态
    initialState:{
        token:localStorage.getItem('token_key') || ''
    },
    //同步修改方法
    reducers:{
        setToken(state, action){
            state.token = action.payload
            //在localStorage中也存一份
            localStorage.setItem('token_key', action.payload)
        }
    }
})

//解构出actionCreator
const {setToken} = userStore.actions

//解构出reducer函数
const userRuducer = userStore.reducer


//异步方法 完成登录并获取到token
const fetchLogin = (loginForm) =>{
    return async (dispatch) =>{
        //1.发送异步请求
        const res = await request.post('/authorizations', loginForm)
        //2.通过提交同步action的方式，来把获取到的token存入
        dispatch(setToken(res.data.token))
    }
}



export { fetchLogin, setToken }

export default userRuducer