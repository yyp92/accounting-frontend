import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { Avatar, Button, DatePicker, Dropdown, Select, Switch, Tooltip } from 'antd'
import type { MenuProps } from 'antd'
import dayjs, { Dayjs } from 'dayjs'
import { FullscreenExitOutlined, FullscreenOutlined, UserOutlined } from '@ant-design/icons'
import { getDarkTheme } from '@/utils'
import { userInfoStore } from '@/store/login'
import { tokenStore } from '@/store/token'
import { menusStore } from '@/store/menus'
import { permissionStore } from '@/store/permission'
import { antdTokenStore } from '@/store/theme'
import { globalDataStore } from '@/store/globalData'

import styles from './index.module.scss'

interface HeaderProps {
    [key: string]: any
}

export const Header: React.FC<HeaderProps> = ({ }) => {
    const navigate = useNavigate()
    const {clearUserInfo} = userInfoStore()
    const {isDark, setIsDark} = antdTokenStore()
    const {clearToken} = tokenStore()
    const {clearMenus} = menusStore()
    const {clearPermissions} = permissionStore()
    const {
        accountCompanyList,
        accountCompany,
        setAccountCompany,
        accountDate,
        setAccountDate
    } = globalDataStore()

    const [isFullScreen, setIsFullScreen] = useState<boolean>(false)


    // ********* 操作 *********
    const handleLogout = () => {
        clearToken()
        clearUserInfo()
        clearMenus()
        clearPermissions()

        navigate('/login')
    }

    const handleFullScreen = () => {
        // dom对象的一个属性：可以用来判断当前是不是全屏模式
        // 全屏：true， 不是全屏：false
        const full = document.fullscreenElement

        if (!full) {
            setIsFullScreen(true)
            document.documentElement.requestFullscreen()
        }
        else {
            setIsFullScreen(false)
            document.exitFullscreen()
        }
    }

    const handleChangeTheme = (checked: boolean) => {
        getDarkTheme(checked)
        setIsDark(checked)
    }

    const handleAccountCompany = (value: any, option: any) => {
        const data = value
            ? {
                id: option.value,
                name: option.label
            }
            : null

        setAccountCompany(data)
    }

    const handleAccountDate = (date: any) => {
        setAccountDate(
            dayjs(date).isValid()
                ? dayjs(date).format('YYYY-MM')
                : null
        )
    }

    const formatDate = () => {
        if (dayjs(accountDate).isValid()) {
            return dayjs(accountDate)
        }

        return null
    }


    // ********* 渲染 *********
    const items: MenuProps['items'] = [
        {
            label: (
                <div
                    onClick={handleLogout}
                >退出登录</div>
            ),
            key: '0',
        },
    ]


    return (
        <div className={styles.header}>
            <div
                className={styles.left}
            >
                <div  className={styles.logo}>
                    <img
                        src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
                        alt="logo"
                    />

                    <span>后台管理系统</span>
                </div>
                
               <Select
                    style={{width: 160 }}
                    value={accountCompany?.id}
                    options={accountCompanyList.map((item) => ({value: item.value, label: item.name}))}
                    placeholder="请选择做账的公司"
                    onChange={handleAccountCompany}
                    allowClear
                />
 

                <div className={styles.accountDate}>
                    <div>账期:</div>

                    <DatePicker
                        style={{
                            width: 120,
                            marginLeft: 4
                        }}
                        placeholder="请选择账期"
                        picker="month"
                        format="YYYY-MM"
                        value={formatDate()}
                        onChange={handleAccountDate}
                    />
                </div>
            </div>

            <div className={styles.avatar}>
                <Tooltip title="切换主题">
                    <Switch
                        checkedChildren="暗黑"
                        unCheckedChildren="明亮"
                        defaultChecked={false}
                        checked={isDark}
                        onChange={handleChangeTheme}
                    />
                </Tooltip>

                <Tooltip title="全屏">
                    <Button
                        style={{
                            margin: '0 10px'
                        }}
                        shape="circle"
                        icon={
                            !isFullScreen
                                ? <FullscreenOutlined />
                                : <FullscreenExitOutlined />
                        }
                        onClick={handleFullScreen}
                    />
                </Tooltip>

                <Avatar
                    style={{ backgroundColor: '#87d068' }}
                    icon={<UserOutlined />}
                />

                <Dropdown
                    menu={{ items }}
                >
                    <div>{'xxx 已登录'}</div>
                </Dropdown>
            </div>
        </div>
    )
}