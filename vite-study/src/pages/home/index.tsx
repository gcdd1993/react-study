import './home.styl'
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
// import Header from "../../components/header";

const Home = () => {
    const navigate = useNavigate()
    return (
        <div className="P-home">
            {/*<Header*/}
            {/*    title="home"*/}
            {/*    info={() => console.log("info:home")}*/}
            {/*/>*/}
            <h1>Home Page</h1>
            <div className="ipt-con">
                <Button type="primary"
                        onClick={() => navigate('/login')}
                >返回登录</Button>
            </div>
        </div>
    )
}

export default Home