import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ConfigProvider } from "antd";
// 引入Ant Design中文语言包
import zhCN from 'antd/locale/zh_CN'
import '@/common/styles/frame.styl'; // 全局样式
import { RouterProvider } from "react-router-dom";
import { globalRouters } from "./router";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ConfigProvider locale={zhCN}>
        <App/>
        <RouterProvider router={globalRouters}/>
    </ConfigProvider>
)
