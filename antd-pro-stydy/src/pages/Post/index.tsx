import { PageContainer, type ProColumns, ProTable } from "@ant-design/pro-components";
import { post } from "@/services/ant-design-pro/api";

const PostTable = () => {
    const columns : ProColumns<API.PostListItem>[] = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            sorter:true,
            search:false
        },
        {
            title: '标题',
            dataIndex: 'title',
            key: 'title',
            search:false
        },
        {
            title: '用户ID',
            dataIndex: 'userId',
            key: 'userId',
            search:false
        }, {
            title: '内容',
            dataIndex: 'body',
            key: 'body',
            search:false,
            ellipsis: { showTitle: true },
        }
    ]

    return (
        <PageContainer
            content="文章列表"
        >
            <ProTable<API.PostListItem, API.PageParams>
                rowKey="id"
                headerTitle="文章列表"
                request={post}
                columns={columns}
                search={false}
            />
        </PageContainer>
    )
}

export default PostTable