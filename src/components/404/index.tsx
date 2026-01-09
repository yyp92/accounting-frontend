import React, {useEffect} from 'react';
import { Button, Result } from 'antd';
import { antdTokenStore } from '@/store/theme';
import { getDarkTheme } from '@/utils';

import styles from './index.module.scss'


export const Page404: React.FC = () => {
    const {isDark} =  antdTokenStore()

    useEffect(() => {
        getDarkTheme(isDark)
    }, [isDark])

    return (
        <div
            className={styles.noFound}
        >
            <Result
                status="404"
                title="404"
                subTitle="此页面未找到。"
                // extra={<Button type="primary">Back Home</Button>}
            />
        </div>
    )
}

 