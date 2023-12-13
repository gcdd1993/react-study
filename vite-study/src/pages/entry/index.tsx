import Header from "../../components/header";
import { Outlet } from "react-router-dom";
import "./entry.styl"
import { useSelector } from "react-redux";
import { ConfigProvider, theme } from "antd";

const {darkAlgorithm, defaultAlgorithm} = theme

const Entry = () => {
    // 获取主题配置
    const globalTheme = useSelector((state) => state.theme)
    let antdTheme = {
        // 亮色/暗色配置
        algorithm: globalTheme.dark ? darkAlgorithm : defaultAlgorithm,
    }
    return (
        <ConfigProvider theme={antdTheme}>
            <div className="M-entry">
                <Header/>
                <div className="main-container">
                    <Outlet/>
                </div>
            </div>
        </ConfigProvider>
    )
}

export default Entry