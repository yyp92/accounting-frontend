import React, { useEffect, useState } from 'react'
import {Outlet, useLocation, useNavigate} from 'react-router-dom'
import {Side} from '../side'
import {Header} from '../header'
import {Footer} from '../footer'
import {routerConfig} from '@/router/router'
import type {RouterConfigItemProps} from '@/router/router'
import { permissionStore } from '@/store/permission'
import { tokenStore } from '@/store/token'
import { menusStore } from '@/store/menus'

import styles from './index.module.scss'


interface ContentProps {
    [key: string]: any
}


const Content: React.FC<ContentProps> = ({}) => {
    const location = useLocation()
    const navigate = useNavigate()
    const {
        permissions
    } = permissionStore()
    const {token} = tokenStore()
    const {menus} = menusStore()

    const [currentRouter, setCurrentRouter] = useState<RouterConfigItemProps | any>()

    useEffect(() => {
        const {pathname} = location ?? {}
        const newPathname = pathname.slice(1)

        if (!token) {
            navigate('/login')
        }
        else if (newPathname !== '') {
            const pathnameList = newPathname.split('/')
            const getCcondition = () => {
                if (pathnameList.length === 1) {
                    return permissions.includes(pathnameList[0])
                }

                if (pathnameList.length === 2) {
                    return permissions.includes(pathnameList[1])
                }

                if (pathnameList.length === 3) {
                    return permissions.includes(`${pathnameList[1]}/${pathnameList[2]}`)
                }

                return false
            }

            if (getCcondition()) {
                let newCurrentRouter: any = {}

                if (pathnameList.length === 1) {
                    newCurrentRouter = routerConfig[0]?.children?.find((group: any) => group.key === pathnameList[0]) ?? {}
                }
                else if (pathnameList.length === 2) {
                    const parent = routerConfig[0]?.children?.find((group: any) => group.key === pathnameList[0]) ?? {}
                    newCurrentRouter = parent?.children?.find((item: any) => item.key === pathnameList[1])
                }
                else if (pathnameList.length === 3) {
                    const parent = routerConfig[0]?.children?.find((group: any) => group.key === pathnameList[0]) ?? {}
                    newCurrentRouter = parent?.children?.find((item: any) => item.key === `${pathnameList[1]}/${pathnameList[2]}`)
                }

                setCurrentRouter(newCurrentRouter)
            }
            else {
                navigate('/403')
            }
        }
        else {
            navigate(`/${menus[0]?.key}/${menus[0]?.children?.[0]?.key}`)
        }
    }, [location])


    // ********** 渲染 **********
    const renderContent = () => {
        if (!currentRouter) {
            return null
        }

        return (
            <div className={styles.layoutContent}>
                {!currentRouter?.showFullScreen && <Header />}

                <div className={styles.wraper}>
                    {!currentRouter?.showFullScreen && <Side />}

                    <div className={styles.contentInner}>
                        <Outlet />
                    </div>

                    {/* {!currentRouter?.showFullScreen && <Footer />} */}
                </div>
            </div>
        )
    }

    return renderContent()
}

export default Content