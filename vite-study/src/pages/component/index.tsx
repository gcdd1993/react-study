import { Button, Dropdown, Flex, FloatButton, MenuProps, Tooltip } from "antd"
import { FileTextOutlined, SearchOutlined } from "@ant-design/icons";

const Component = () => {
    const onMenuClick: MenuProps['onClick'] = (e) => {
        console.log('click', e);
    };

    const items = [
        {
            key: '1',
            label: '1st item',
        },
        {
            key: '2',
            label: '2nd item',
        },
        {
            key: '3',
            label: '3rd item',
        },
    ];
    return (
        <div>
            <div>按钮类型</div>
            <Flex gap="small" wrap="wrap">
                <Button type="primary">Primary Button</Button>
                <Button>Default Button</Button>
                <Button type="dashed">Dashed Button</Button>
                <Button type="text">Text Button</Button>
                <Button type="link">Link Button</Button>
            </Flex>
            <div>图标按钮</div>
            <Flex gap="small" vertical>
                <Flex wrap="wrap" gap="small">
                    <Tooltip title="search">
                        <Button type="primary" shape="circle" icon={<SearchOutlined/>}/>
                    </Tooltip>
                    <Button type="primary" shape="circle">
                        A
                    </Button>
                    <Button type="primary" icon={<SearchOutlined/>}>
                        Search
                    </Button>
                    <Tooltip title="search">
                        <Button shape="circle" icon={<SearchOutlined/>}/>
                    </Tooltip>
                    <Button icon={<SearchOutlined/>}>Search</Button>
                </Flex>
                <Flex wrap="wrap" gap="small">
                    <Tooltip title="search">
                        <Button shape="circle" icon={<SearchOutlined/>}/>
                    </Tooltip>
                    <Button icon={<SearchOutlined/>}>Search</Button>
                    <Tooltip title="search">
                        <Button type="dashed" shape="circle" icon={<SearchOutlined/>}/>
                    </Tooltip>
                    <Button type="dashed" icon={<SearchOutlined/>}>
                        Search
                    </Button>
                    <Button icon={<SearchOutlined/>} href="https://www.google.com"/>
                </Flex>
            </Flex>
            <div>幽灵按钮：幽灵按钮将按钮的内容反色，背景变为透明，常用在有色背景上。</div>
            <div style={{backgroundColor: "red"}}>
                <Flex wrap="wrap" gap="small" className="site-button-ghost-wrapper">
                    <Button type="primary" ghost>
                        Primary
                    </Button>
                    <Button ghost>Default</Button>
                    <Button type="dashed" ghost>
                        Dashed
                    </Button>
                    <Button type="primary" danger ghost>
                        Danger
                    </Button>
                </Flex>
            </div>
            <div>不可用</div>
            <Flex gap="small" align="flex-start" vertical>
                <Flex gap="small">
                    <Button type="primary">Primary</Button>
                    <Button type="primary" disabled>
                        Primary(disabled)
                    </Button>
                </Flex>
                <Flex gap="small">
                    <Button>Default</Button>
                    <Button disabled>Default(disabled)</Button>
                </Flex>
                <Flex gap="small">
                    <Button type="dashed">Dashed</Button>
                    <Button type="dashed" disabled>
                        Dashed(disabled)
                    </Button>
                </Flex>
                <Flex gap="small">
                    <Button type="text">Text</Button>
                    <Button type="text" disabled>
                        Text(disabled)
                    </Button>
                </Flex>
                <Flex gap="small">
                    <Button type="link">Link</Button>
                    <Button type="link" disabled>
                        Link(disabled)
                    </Button>
                </Flex>
                <Flex gap="small">
                    <Button type="primary" href="https://ant.design/index-cn">
                        Href Primary
                    </Button>
                    <Button type="primary" href="https://ant.design/index-cn" disabled>
                        Href Primary(disabled)
                    </Button>
                </Flex>
                <Flex gap="small">
                    <Button danger>Danger Default</Button>
                    <Button danger disabled>
                        Danger Default(disabled)
                    </Button>
                </Flex>
                <Flex gap="small">
                    <Button danger type="text">
                        Danger Text
                    </Button>
                    <Button danger type="text" disabled>
                        Danger Text(disabled)
                    </Button>
                </Flex>
                <Flex gap="small">
                    <Button type="link" danger>
                        Danger Link
                    </Button>
                    <Button type="link" danger disabled>
                        Danger Link(disabled)
                    </Button>
                </Flex>
                <Flex gap="small" className="site-button-ghost-wrapper">
                    <Button ghost>Ghost</Button>
                    <Button ghost disabled>
                        Ghost(disabled)
                    </Button>
                </Flex>
            </Flex>
            <div>多个按钮组合</div>
            <Flex align="flex-start" gap="small" vertical>
                <Button type="primary">primary</Button>
                <Button>secondary</Button>
                <Dropdown.Button menu={{items, onClick: onMenuClick}}>Actions</Dropdown.Button>
            </Flex>
            <div>危险操作</div>
            <Flex wrap="wrap" gap="small">
                <Button type="primary" danger>
                    Primary
                </Button>
                <Button danger>Default</Button>
                <Button type="dashed" danger>
                    Dashed
                </Button>
                <Button type="text" danger>
                    Text
                </Button>
                <Button type="link" danger>
                    Link
                </Button>
            </Flex>

            <FloatButton
                icon={<FileTextOutlined/>}
                description="测试啊"
                onClick={() => console.log('onClick')}
            />
        </div>
    )
}

export default Component