import React, { useEffect, useState } from 'react'
import { ConfigProvider } from 'antd'
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import zhCN from 'antd/locale/zh_CN'
import { antdTokenStore } from '@/store/theme'
import { getDarkTheme } from '@/utils'
import { lightToken } from '@/antdTheme/lightTheme'
import { darkToken } from '@/antdTheme/darkTheme'
import Content from './content'

import styles from './index.module.scss'

interface LayoutProps {
    [key: string]: any
}

const Layout: React.FC<LayoutProps> = ({ }) => {
    const {isDark} =  antdTokenStore()

    useEffect(() => {
        dayjs.locale('zh-cn')
    }, [])

    useEffect(() => {
        getDarkTheme(isDark)
    }, [isDark])


    // ********** 操作 **********


    // ********** 渲染 **********
    return (
        <div className={styles.layout}>
            <ConfigProvider
                // 主题
                theme={isDark ? darkToken : lightToken}
                locale={zhCN}

                button={{
                    // 设置为 false 时，移除按钮中 2 个汉字之间的空格
                    autoInsertSpace: false,
                }}
            >
                <Content />
            </ConfigProvider>
        </div>
    )
}

export default Layout