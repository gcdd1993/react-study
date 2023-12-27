import { ModalForm, PageContainer, type ProColumns, ProFormGroup, ProFormText, ProFormTextArea, ProTable } from "@ant-design/pro-components";
import { post } from "@/services/ant-design-pro/api";
import React from "react";

const PostTable = () => {
    const [showDetail, setShowDetail] = React.useState<boolean>(false);
    const [currentRow, setCurrentRow] = React.useState<API.PostListItem | undefined>(undefined);
    // const form = useForm()
    const columns: ProColumns<API.PostListItem>[] = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            sorter: true,
            search: false,
            width:50,
            render: (dom: React.ReactNode, entity: API.PostListItem) => {
                return (
                    <a onClick={() => {
                        setCurrentRow(entity);
                        setShowDetail(true)
                    }}>
                        {dom}
                    </a>
                )
            }
        },
        {
            title: '标题',
            dataIndex: 'title',
            key: 'title',
            search: false,
            width:300,
            ellipsis: {showTitle: true},
        },
        {
            title: '用户ID',
            dataIndex: 'userId',
            key: 'userId',
            search: false,
            width:50,
        }, {
            title: '内容',
            dataIndex: 'body',
            key: 'body',
            search: false,
            ellipsis: {showTitle: true},
        }
    ]

    console.log(`currentRow: ${currentRow?.id}, title: ${currentRow?.title}`)

    return (
        <PageContainer
            // content="文章列表"
        >
            <ProTable<API.PostListItem, API.PageParams>
                rowKey="id"
                headerTitle="文章列表"
                request={post}
                columns={columns}
                search={false}
                onDataSourceChange={(dataSource: API.PostListItem[]) => {
                    console.log(dataSource)
                }}
                pagination={{pageSize: 10}}
            />
            <ModalForm
                labelAlign="left"
                layout="horizontal"
                // form={form}
                open={showDetail}
                modalProps={{
                    destroyOnClose: true,
                    onCancel: () => {
                        setCurrentRow(undefined);
                        setShowDetail(false);
                    }
                }}
                // disabled={true}
                initialValues={currentRow}
            >
                <ProFormGroup>
                    <ProFormText name="id" label="文章ID"
                                 placeholder="请输入文章ID"/>
                    <ProFormText name="title" label="标题"/>
                </ProFormGroup>
                <ProFormGroup>
                    <ProFormTextArea name="body" label="文章内容" width={400}/>
                    <ProFormText name="userId" label="发表人"/>
                </ProFormGroup>
            </ModalForm>
        </PageContainer>
    )
}

export default PostTable