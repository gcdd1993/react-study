import { createHashRouter, Navigate } from "react-router-dom";
import Home from "../pages/home";
import Account from "../pages/account";
import Login from "../pages/login";
import Entry from "../pages/entry";
import Component from "../pages/component";

export const globalRouters = createHashRouter([
    // 对精确匹配"/login"，跳转Login页面
    {
        path: '/login',
        element: <Login/>,
    },
    {
        path: '/',
        element: <Entry/>,
        children: [
            // 精确匹配"/home"，跳转Home页面
            {
                path: '/home',
                element: <Home/>,
            },
            // 精确匹配"/account"，跳转Account页面
            {
                path: '/account',
                element: <Account/>,
            },
            {
                path: '/component',
                element: <Component/>
            },
            // 如果URL没有"#路由"，跳转Home页面
            {
                path: '/',
                element: <Navigate to='/home'/>
            },
            // 未匹配，，跳转Login页面
            {
                path: '*',
                element: <Navigate to="/login"/>,
            },
        ]
    }

])