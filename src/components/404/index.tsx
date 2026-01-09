import React from 'react';
import { Button, Result } from 'antd';

export const Page404: React.FC = () => {
    return (
        <div
            style={{
                flex: '1',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
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

 