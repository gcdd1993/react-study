import { PageContainer, ProDescriptions } from "@ant-design/pro-components";
import { Button, Input, Select, Space, Timeline } from "antd";
import React from "react";
import { logistics } from "@/services/ant-design-pro/api";

const Logistics = () => {
    const [value, setValue] = React.useState<API.LogisticsDetails | undefined>(undefined);
    const [searchValue, setSearchValue] = React.useState<string>('');
    const [searchType, setSearchType] = React.useState<string>('');
    const timelineItems = value?.data
        .map((item) => {
            return {
                // label: item.time.toString(),
                children: (
                    <>
                        <Space wrap size={[2,4]}>
                            <span>{item.time.toString()}</span>
                            <span>{item.context}</span>
                        </Space>
                    </>
                )
            }
        })

    const onSearch = () => {
        console.log(searchValue, searchType);
        logistics({type: searchType, postid: searchValue})
            .then((res) => {
                console.log(res)
                setValue(res)
            })
    }

    return (
        <PageContainer>
            <ProDescriptions
                column={2}
                // title="物流查询"
                // tooltip="包含了从服务器请求，columns等功能"
            >
                <ProDescriptions.Item span={2}>
                    <Space>
                        <Select
                            defaultValue="shentong"
                            style={{width: 120}}
                            options={[
                                {value: 'shentong', label: '申通'},
                                {value: 'ems', label: 'EMS'},
                                {value: 'shunfeng', label: '顺丰'},
                                {value: 'yuantong', label: '圆通'},
                                {value: 'yunda', label: '韵达'},
                                {value: 'tiantian', label: '天天'},
                                {value: 'huitongkuaidi', label: '汇通'},
                                {value: 'quanfengkuaidi', label: '全峰'},
                                {value: 'debangwuliu', label: '德邦'},
                                {value: 'zhaijisong', label: '宅急送'},
                            ]}
                            onChange={(value) => {
                                setSearchType(value)
                            }}
                        />
                        <Input placeholder="请输入物流单号"
                               onChange={(e) => setSearchValue(e.target.value)}
                        />
                        <Button key="primary" type="primary"
                                onClick={onSearch}
                        >
                            提交
                        </Button>
                    </Space>
                </ProDescriptions.Item>
                <ProDescriptions.Item>
                    <Timeline
                        items={timelineItems}
                    />
                </ProDescriptions.Item>
            </ProDescriptions>
        </PageContainer>
    )
}

export default Logistics