import { Button } from "antd";
import './account.styl'
// import Header from "../../components/header";

const Account = () => {
    return (
        <div className="P-account">
            {/*<Header*/}
            {/*    title="账户中心"*/}
            {/*    info={() => console.log("info:account")}*/}
            {/*/>*/}
            <h1>Account Page</h1>
            <div className="ipt-con">
                <Button type="primary">返回登录</Button>
            </div>
        </div>
    )
}
export default Account