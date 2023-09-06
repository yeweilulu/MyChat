/* eslint-disable jsx-a11y/anchor-is-valid */
import {
    LoginForm,
    ProConfigProvider,
    ProFormCheckbox,
} from '@ant-design/pro-components';
import './index.scss'
import { Tabs, Button } from 'antd';
import { Dispatch, bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '@/actions'
import LogIn from './component/LogIn'
import SignIn from './component/SignIn'
import { LOGIN_UI_PROPS, LOGIN_USER_INFO, LOGIN_TYPE } from '@/types/login'
import { ALL_REDUCER_STATE } from '@/types/reducer'
const items = [
    { tab: '登录', key: 'login', label: '登录' },
    { tab: '注册', key: 'signin', label: '注册' }
]
const Login = (props: LOGIN_UI_PROPS) => {
    const {
        userLogin,
        userSignin,
        setLoginType,
        setLoading,
        loginType,
        loading
    } = props
    const onSubmit = async (value: LOGIN_USER_INFO) => {
        setLoading(true)
        if (loginType === 'login') {
            userLogin(value)
        } else {
            userSignin(value)
        }
    }
    return (
        <ProConfigProvider hashed={true} >
            <div style={{ backgroundColor: 'white' }} className='login'>
                <LoginForm
                    logo="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
                    title="MyChat"
                    subTitle="希望可以实现网页版微信"
                    onFinish={onSubmit}
                    submitter={{
                        render: (props, doms) => {
                            return [
                                <Button htmlType="submit" type="primary" style={{ width: "100%" }} loading={loading}>
                                    {
                                        loginType === 'login' ? '登录' : '注册'
                                    }
                                </Button>
                            ];
                        },
                    }}
                >
                    <Tabs
                        centered
                        activeKey={loginType}
                        onChange={(activeKey) => setLoginType(activeKey as LOGIN_TYPE)}
                        items={items}
                    >
                    </Tabs>
                    {loginType === 'login' && (<LogIn />)}
                    {loginType === 'signin' && (<SignIn />)}
                    <div
                        style={{
                            marginBlockEnd: 24,
                        }}
                    >
                        <ProFormCheckbox noStyle name="autoLogin">
                            自动登录
                        </ProFormCheckbox>
                        {
                            loginType === 'login' && <a style={{ float: 'right' }} >
                                忘记密码
                            </a>
                        }

                    </div>
                </LoginForm>
            </div>
        </ProConfigProvider>
    );
};
const mapStateToProps = (state: ALL_REDUCER_STATE) => {
    return {
        ...state.login
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Login)