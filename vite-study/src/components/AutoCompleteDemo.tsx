import { AutoComplete } from "antd"
import { useEffect, useState } from "react";
import { requestGet } from "../utils/request.ts";
import { UserOutlined } from "@ant-design/icons";
import type { SelectProps } from 'antd/es/select';

type TPost = {
    userId: number;
    id: number;
    title: string;
    body: string;
}
const AutoCompletePage = () => {
    // const [searchValue, setSearchValue] = useState<string>('');
    const [posts, setPosts] = useState<TPost[]>([]);
    const [options, setOptions] = useState<SelectProps[]>([]);

    const listPost = () =>
        requestGet("https://jsonplaceholder.typicode.com/posts")
            .then((data: TPost[]) => {
                setPosts(data)
                setOptions(data.map((item) => {
                    return renderItem(item)
                }))
            })

    const renderItem = (value: TPost) => {
        return {
            value:value.title,
            label:(
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    {value.title}
                    <span>
        <UserOutlined/> {value.body}
      </span>
                </div>
            )
        }
    }

    const onSearch = (value: string) => {
        console.log(111)
        setOptions(posts
            .filter((item) => item.title.includes(value))
            .map((item) => {
                return {value: item.title}
            }))
    }

    useEffect(() => {
        listPost().then()
        // setOptions([
        //     {value: '1'},
        //     {value: '2'},
        //     {value: '3'},
        //     {value: '4'},
        //     {value: '5'},
        //     {value: '6'},
        //     {value: '7'},
        //     {value: '8'},
        //     {value: '9'},
        // ])
    }, [])

    return (
        <div>
            <h1>AutoComplete</h1>
            <AutoComplete
                options={options}
                style={{width: 200}}
                placeholder="请输入"
                allowClear
                onSearch={onSearch}
                onSelect={(value) => {
                    console.log(value)
                }}
            />
        </div>
    )
}

export default AutoCompletePage