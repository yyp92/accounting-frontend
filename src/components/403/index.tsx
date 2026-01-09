import React from 'react';
import { Button, Result } from 'antd';

export const Page403: React.FC = () => {
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
                status="403"
                title="403"
                subTitle="你没有此页面的访问权限。"
                // extra={<Button type="primary">Back Home</Button>}
            />
        </div>
    )
}