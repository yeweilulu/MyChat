import React from 'react'
import {
    LockOutlined,
    UserOutlined,
} from '@ant-design/icons';
import {
    ProFormText,
} from '@ant-design/pro-components';
type Props = {}

const LogIn = (props: Props) => {
    return (
        <>
            <ProFormText
                name="username"
                fieldProps={{
                    size: 'large',
                    prefix: <UserOutlined className={'prefixIcon'} />,
                }}
                placeholder={'请输入用户名'}
                rules={[
                    {
                        required: true,
                        message: '请输入用户名!',
                    },
                ]}
            />
            <ProFormText.Password
                name="password"
                fieldProps={{
                    size: 'large',
                    prefix: <LockOutlined className={'prefixIcon'} />,
                }}
                placeholder={'请输入密码'}
                rules={[
                    {
                        required: true,
                        message: '请输入密码！',
                    },
                ]}
            />
        </>
    )
}

export default LogIn