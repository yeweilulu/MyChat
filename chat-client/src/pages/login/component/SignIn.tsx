import React from 'react'
import {
    LockOutlined,
    MobileOutlined,
} from '@ant-design/icons';
import {
    ProFormText,
} from '@ant-design/pro-components';

type Props = {}

const SignIn = (props: Props) => {
    return (
        <>
            <ProFormText
                fieldProps={{
                    size: 'large',
                    prefix: <MobileOutlined className={'prefixIcon'} />,
                }}
                name="username"
                placeholder={'账号'}
                rules={[
                    {
                        required: true,
                        message: '请输入账号！',
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
            <ProFormText.Password
                name="passwordTwo"
                fieldProps={{
                    size: 'large',
                    prefix: <LockOutlined className={'prefixIcon'} />,
                }}
                placeholder={'请再次输入密码'}
                rules={[
                    {
                        required: true,
                        message: '请输入密码！',

                    },
                    ({ getFieldValue }) => ({
                        validator(rule, value) {
                            console.log(value, getFieldValue('password'))
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve()
                            }
                            return Promise.reject("两次密码输入不一致")
                        }
                    })
                ]}
            />
        </>
    )
}

export default SignIn