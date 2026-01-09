import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Modal, DatePicker } from 'antd'
import { userInfoStore } from '@/store/login'
import {getDemo, postDemo} from '@/service'

import styles from './index.module.scss'

interface HomeProps {
    [key: string]: any
}

const Home: React.FC<HomeProps> = () => {
    const navigate = useNavigate()
    const {
        userInfo,
        setUserInfo
    } = userInfoStore()

    const [open, setOpen] = useState(false);

    useEffect(() => {
        postDemo()
    }, [])

    // ********* 操作 *********
    const showModal = () => {
        setOpen(true);
    };

    const hideModal = () => {
        setOpen(false);
    };



    // ********* 渲染 *********
    return (
        <div>
            <Button onClick={() => navigate('/403')}>403</Button>
            <Button onClick={() => navigate('/login')}>login</Button>

            <div style={{ marginTop: 20 }}>
                <div>姓名：{userInfo?.userName}</div>

                <Button
                    type="primary"
                    onClick={() => {
                        setUserInfo({
                            userName: '小红',
                            userId: '222'
                        })
                    }}
                >设置姓名</Button>

                <Button
                    type="primary"
                    disabled
                >设置姓名</Button>
            </div>

            <DatePicker />

            <div style={{ marginTop: 20 }}>
                <Button type="primary" onClick={showModal}>
                    Modal
                </Button>
                <Modal
                    title="Modal"
                    open={open}
                    onOk={hideModal}
                    onCancel={hideModal}
                    okText="确认"
                    cancelText="取消"
                >
                    <p>Bla bla ...</p>
                    <p>Bla bla ...</p>
                    <p>Bla bla ...</p>
                </Modal>
            </div>

            <div style={{ marginTop: 20 }}>
                <Button onClick={() => navigate('/group1/group11/detail')}>详情</Button>
                <Button onClick={() => navigate('/group1/group11/screen-detail')}>详情-全屏</Button>
            </div>
        </div>
    )
}

export default Home