// //测试一下token的注入情况
// import {request} from "@/utils";
// import {useEffect} from "react";
//
//
// const Layout = () => {
//     useEffect(() => {
//         request.get('/user/profile')
//     },[])
//     return (
//         <div>this is a Layout</div>
//     )
// }
//
// export default Layout

import { Layout, Menu, Popconfirm } from 'antd'
import {
    HomeOutlined,
    DiffOutlined,
    EditOutlined,
    LogoutOutlined,
} from '@ant-design/icons'
import './index.scss'
import {Outlet} from "react-router-dom";

const { Header, Sider } = Layout

const items = [
    {
        label: '首页',
        key: '1',
        icon: <HomeOutlined />,
    },
    {
        label: '任务管理',
        key: '2',
        icon: <DiffOutlined />,
    },
    {
        label: '创建任务',
        key: '3',
        icon: <EditOutlined />,
    },
]

const GeekLayout = () => {
    return (
        <Layout>
            <Header className="header">
                <div className="logo" />
                <div className="user-info">
                    <span className="user-name">用户名admin</span>
                    <span className="user-logout">
            <Popconfirm title="是否确认退出？" okText="退出" cancelText="取消">
              <LogoutOutlined /> 退出
            </Popconfirm>
          </span>
                </div>
            </Header>
            <Layout>
                <Sider width={200} className="site-layout-background">
                    <Menu
                        mode="inline"
                        theme="dark"
                        defaultSelectedKeys={['1']}
                        items={items}
                        style={{ height: '100%', borderRight: 0 }}></Menu>
                </Sider>
                <Layout className="layout-content" style={{ padding: 20 }}>
                    {/*二级路由的出口，即二级路由组件的渲染位置*/}
                    <Outlet />
                </Layout>
            </Layout>
        </Layout>
    )
}
export default GeekLayout