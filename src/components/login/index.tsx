import React from 'react'
import {useNavigate, useSearchParams} from 'react-router-dom'
import { Button, Checkbox, Form, Input } from 'antd'
import { permissionStore } from '@/store/permission'
import { menusStore } from '@/store/menus'
import {userInfoStore} from '@/store/login'
import {tokenStore} from '@/store/token'
import { filterMenu } from '@/utils'
import { routerConfig } from '@/router/router'

import styles from './index.module.scss'


interface LoginProps {
    [key: string]: any
}

type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
}

// todo 测试数据
const defaultList = [
    'group1',
    'group11',
    'group12',
    'group13',
    'group2',
    'group21',
    'group22',
    'group23',
    'group24',
    'group3',
    'group11/detail',
    'group11/screen-detail'
]

const Login: React.FC<LoginProps> = ({}) => {
    // 获取 navigate 方法
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const {
        setPermissions
    } = permissionStore()
    const {setMenus} = menusStore()
    const {setUserInfo} = userInfoStore()
    const {setToken} = tokenStore()

    // ********操作 ********　
    const onFinish = async (values: any) => {
        console.log('Success:', values)

        if (values.username === 'admin' && values.password === '123456') {
            setPermissions(defaultList)
            setToken('111')
            setUserInfo({
                userName: 'admin',
                userId: '001'
            })
            

            // todo模拟接口
            setTimeout(() => {
                const list = filterMenu(routerConfig[0].children, defaultList)
                setMenus(list)
            }, 0)

            setTimeout(() => {
                const redirect = searchParams.get('redirect')
                navigate(redirect || '/')
            }, 500)
        }
    }
      
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo)
    }

    // ********　渲染 ********　
    return (
        <div className={styles.login}>
            <div className={styles.loginInner}>
                <div  className={styles.title}>登录</div>

                <Form
                    // className={styles.loginInner}
                    name="basic"
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 18 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item<FieldType>
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item<FieldType>
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{ offset: 8, span: 16 }}
                    >
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default Login