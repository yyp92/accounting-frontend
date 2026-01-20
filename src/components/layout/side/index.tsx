import {FC, useEffect, useLayoutEffect, useState} from 'react'
import {Button, Menu} from 'antd'
import type { MenuProps } from 'antd'
import { DoubleLeftOutlined, DoubleRightOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons'
import {useNavigate, useLocation} from 'react-router-dom'
import {ComponentMap} from '@/router/router'
import { menusStore } from '@/store/menus'
import { tokenStore } from '@/store/token'

import styles from './index.module.scss'


type MenuItem = Required<MenuProps>['items'][number];


interface SideProps {
    [key: string]: any
}

export const Side: FC<SideProps> = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const {menus} = menusStore()
    const {token} = tokenStore()

    // 激活的父菜单
    const [openKeys, setOpenKeys] = useState<string[]>([])
    // 激活的菜单项
    const [selectedKeys, setSelectedKeys] = useState<string[]>([])
    // 菜单
    const [newMenuList, setNewMenuList] = useState<MenuItem[]>([])
    // 菜单展开收起
    const [collapsed, setCollapsed] = useState<boolean>(false)

    useLayoutEffect(() => {
        const newMenuList = menus.map((item: any) => {
            const Icon = ComponentMap[item.icon]

            return {
                ...item,
                icon: <Icon />
            }
        })
        setNewMenuList(newMenuList)
    }, [menus])

    useEffect(() => {
        if (!collapsed) {
            const {pathname} = location ?? {}
            const newPathname = pathname.slice(1)

            
            const pathnameList = newPathname.split('/')

            if (pathnameList.length === 1) {
                setOpenKeys([])
                setSelectedKeys([pathnameList[0]])
            }
            else if (pathnameList.length === 2 || pathnameList.length === 3) {
                setOpenKeys([pathnameList[0]])
                setSelectedKeys([pathnameList[1]])
            }
        }
    }, [collapsed])


    // ********* 操作 ********
    const onMenuItemOpenChange: MenuProps['onOpenChange'] = (openKeys: string[]) => {
        const currentKey = openKeys.slice(-1)
        setOpenKeys(currentKey)
    }
    
    const onMenuItemClick: MenuProps['onClick'] = (e: any) => {
        const {keyPath} = e ?? {}

        if (keyPath.length === 1) {
            setSelectedKeys(keyPath[0])
            navigate(`/${keyPath[0]}`)
        }
        else if (keyPath.length === 2) {
            setSelectedKeys(keyPath[0])
            navigate(`/${keyPath[1]}/${keyPath[0]}`)
        }
    }

    const handleToggleCollapsed = () => {
        setCollapsed((pre) => !pre)
    }


    // ********* 渲染 ********
    return (
        <div className={styles.side}>
            <Menu
                className={styles.menu}
                style={{
                    width: collapsed ? 50 : 200,
                    height: '100%'
                }}
                mode={'inline'}
                items={newMenuList}
                openKeys={openKeys}
                selectedKeys={selectedKeys}
                onOpenChange={onMenuItemOpenChange}
                onClick={onMenuItemClick}
                inlineCollapsed={collapsed}
            />

            <Button
                className={styles.collapsed}
                onClick={handleToggleCollapsed}
            >
                {collapsed ? <DoubleRightOutlined /> : <DoubleLeftOutlined />}
            </Button>
        </div>
    )
}