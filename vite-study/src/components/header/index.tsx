import { Button, Card, Menu } from "antd";
import { MoonOutlined, SunOutlined, ThemeOutlined } from "../extraIcons";
import './header.styl'
import { useLocation, useNavigate } from "react-router-dom";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { setDark } from "../../store/slices/theme.tsx";

interface HeaderProps {
    title?: string
    info?: Function
}

const Header = ({title, info}: HeaderProps) => {
    info && info()

    const location = useLocation()
    const navigate = useNavigate()
    const menuItems = [
        {
            label: '首页',
            key: '/home',
            icon: <HomeOutlined/>,
            onClick: () => {
                navigate('/home')
            }
        },
        {
            label: '账户',
            key: '/account',
            icon: <UserOutlined/>,
            onClick: () => {
                navigate('/account')
            }
        }
    ]

    // 获取redux钩子
    const dispatch = useDispatch()
    // 获取主题配置
    const theme = useSelector((state) => state.theme)
    return (
        <Card className="M-header">
            <div className="header-wrapper">
                <div className="logo-con">Header:{title}</div>
                <div className="menu-con">
                    <Menu
                        mode="horizontal"
                        selectedKeys={[location.pathname]}
                        items={menuItems}
                    ></Menu>
                </div>
                <div className="opt-con">
                    {/*<Button icon={<MoonOutlined/>} shape="circle"></Button>*/}
                    {theme.dark ? (
                        <Button
                            icon={<SunOutlined/>}
                            shape="circle"
                            onClick={() => {
                                dispatch(setDark(false))
                            }}
                        >
                        </Button>
                    ) : (
                        <Button
                            icon={<MoonOutlined/>}
                            shape="circle"
                            onClick={() => {
                                dispatch(setDark(true))
                            }}
                        >
                        </Button>
                    )}
                    <Button icon={<ThemeOutlined/>} shape="circle"></Button>
                </div>
            </div>
        </Card>
    )
}
export default Header