//测试一下token的注入情况
import {request} from "@/utils";
import {useEffect} from "react";


const Layout = () => {
    useEffect(() => {
        request.get('/user/profile')
    },[])
    return (
        <div>this is a Layout</div>
    )
}

export default Layout