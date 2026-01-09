import React from 'react'
import {createBrowserRouter} from 'react-router-dom'
import { AppstoreOutlined, MailOutlined, NodeCollapseOutlined, SettingOutlined } from '@ant-design/icons';
import Layout from '@/components/layout'
// import Layout from '@/components/layout-horizontal'
import Home from '@/pages/home'
import { Page403 } from '@/components/403'
import { Page404 } from '@/components/404'
import Login from '@/components/login'

export interface RouterConfigItemProps {
    path: string,
    label?: React.ReactNode,
    icon?: React.ReactNode,
    element?: React.ReactNode | null,
    // 是否在菜单里显示
    hideInMenu?: boolean,
    index?: boolean,

    // 是否全屏显示
    showFullScreen?: boolean,
    children?: RouterConfigItemProps[],
}

// * 解决把 menu 存储在 zustand 中，在 antd Menu组件中使用报错
export const ComponentMap: any = {
    "icon-1": AppstoreOutlined,
    "icon-2": SettingOutlined
}


export const routerConfig: any[] = [
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                label: '分组1',
                path: 'group1',
                key: 'group1',
                icon: 'icon-1',
                hideInMenu: false,
                children: [
                    {
                        label: '分组11',
                        path: 'group11',
                        key: 'group11',
                        icon: null,
                        hideInMenu: false,
                        showFullScreen: false,
                        element: <Home />
                    },
                    {
                        label: '分组12',
                        path: 'group12',
                        key: 'group12',
                        icon: null,
                        hideInMenu: false,
                        showFullScreen: false,
                        element: <>group12</>
                    },
                    {
                        label: '分组13',
                        path: 'group13',
                        key: 'group13',
                        icon: null,
                        hideInMenu: false,
                        showFullScreen: false,
                        element: <>group13</>
                    },
                    {
                        label: '分组11-详情',
                        path: 'group11/detail',
                        key: 'group11/detail',
                        icon: null,
                        hideInMenu: true,
                        showFullScreen: false,
                        element: <>分组11-详情</>
                    },
                    {
                        label: '分组11-详情-全屏',
                        path: 'group11/screen-detail',
                        key: 'group11/screen-detail',
                        icon: null,
                        hideInMenu: true,
                        showFullScreen: true,
                        element: <>分组11-详情-全屏</>
                    },
                ]
            },

            {
                label: '分组2',
                path: 'group2',
                key: 'group2',
                icon: 'icon-2',
                hideInMenu: false,
                children: [
                    {
                        label: '分组21',
                        path: 'group21',
                        key: 'group21',
                        index: true,
                        icon: null,
                        hideInMenu: false,
                        showFullScreen: false,
                        element: <>group21</>,
                    },
                    {
                        label: '分组22',
                        path: 'group22',
                        key: 'group22',
                        icon: null,
                        hideInMenu: false,
                        showFullScreen: false,
                        element: <>group22</>,
                    },
                    {
                        label: '分组23',
                        path: 'group23',
                        key: 'group23',
                        icon: null,
                        hideInMenu: false,
                        showFullScreen: false,
                        element: <>group23</>,
                    },
                    {
                        label: '分组24',
                        path: 'group24',
                        key: 'group24',
                        icon: null,
                        hideInMenu: true,
                        showFullScreen: true,
                        element: <>group24</>,
                    },
                ]
            },

            {
                label: '分组3',
                path: 'group3',
                key: 'group3',
                icon: 'icon-2',
                hideInMenu: false,
                showFullScreen: true,
                element: <>group3</>
            }
        ]
    },

    


    // login
    {
        path: '/login',
        label: 'login',
        element: <Login />,
        icon: null,
        hideInMenu: true,
        showFullScreen: true,
        children: [],
    },

    // 403
    {
        path: '/403',
        label: '403',
        element: <Page403 />,
        icon: null,
        hideInMenu: true,
        showFullScreen: true,
        children: [],
    },

    // 404
    {
        path: '*',
        label: '404',
        element: <Page404 />,
        icon: null,
        hideInMenu: true,
        showFullScreen: true,
        children: [],
    },
]

const router = createBrowserRouter(routerConfig as any)

export default router