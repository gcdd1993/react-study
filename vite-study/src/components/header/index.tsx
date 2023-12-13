import { Button, Card, Menu } from "antd";
import { MoonOutlined, ThemeOutlined } from "../extraIcons";
import './header.styl'
import { useLocation, useNavigate } from "react-router-dom";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";

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
                    <Button icon={<MoonOutlined/>} shape="circle"></Button>
                    <Button icon={<ThemeOutlined/>} shape="circle"></Button>
                </div>
            </div>
        </Card>
    )
}
export default Header