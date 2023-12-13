import ReactDOM from 'react-dom/client'
import { ConfigProvider } from "antd";
// 引入Ant Design中文语言包
import zhCN from 'antd/locale/zh_CN'
import '@/common/styles/frame.styl'; // 全局样式
import { RouterProvider } from "react-router-dom";
import { globalRouters } from "./router";
import { Provider } from "react-redux";
import { store } from "./store";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <ConfigProvider locale={zhCN}>
            <RouterProvider router={globalRouters}/>
        </ConfigProvider>
    </Provider>
)
