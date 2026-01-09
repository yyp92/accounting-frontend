import React, {useEffect} from 'react';
import { Button, Result } from 'antd';
import { antdTokenStore } from '@/store/theme';
import { getDarkTheme } from '@/utils';

import styles from './index.module.scss'

export const Page403: React.FC = () => {
    const {isDark} =  antdTokenStore()
    
    useEffect(() => {
        getDarkTheme(isDark)
    }, [isDark])

    return (
        <div
            className={styles.noAuth}
        >
           <Result
                status="403"
                title="403"
                subTitle="你没有此页面的访问权限。"
                // extra={<Button type="primary">Back Home</Button>}
            />
        </div>
    )
}