import { useDispatch, useSelector } from "react-redux";
import { Modal } from "antd";
import { globalConfig } from "../../globalConfig.tsx";
import { setColorPrimary } from "../../store/slices/theme.tsx";
import { CheckCircleFilled } from "@ant-design/icons";
import './themeModal.styl'

const ThemeModal = ({onClose}) => {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme);

    console.log(globalConfig.customColorPrimarys)

    return (
        <Modal
            className="M-themeModal"
            open={true}
            title="主题色"
            onCancel={() => {
                onClose()
            }}
            maskClosable={false}
            footer={null}
        >
            <div className="colors-con">
                {
                    // 遍历globalConfig配置的customColorPrimarys主题色
                    globalConfig.customColorPrimarys &&
                    globalConfig.customColorPrimarys.map((item, index) => (
                        <div
                            className="theme-color"
                            style={{backgroundColor: item}}
                            key={index}
                            onClick={() => {
                                dispatch(setColorPrimary(item))
                            }}
                        >
                            {
                                // 如果是当前主题色，则显示“对勾”图标
                                theme.colorPrimary === item && (
                                    <CheckCircleFilled
                                        style={{
                                            fontSize: 28,
                                            color: '#fff'
                                        }}
                                    />
                                )
                            }
                        </div>
                    ))
                }

            </div>
        </Modal>
    )
}

export default ThemeModal