import React from 'react';

import { Form, Input, Button, Spin } from 'antd';
import { UserOutlined, LockOutlined, LoadingOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/auth';
import './Login.css';

class NormalLoginForm extends React.Component {
    onFinish = (values) => {
        console.log(values);
        console.log(values.username);
        console.log(values.password);

        this.props.onAuth(values.username, values.password)
            .then((res) => {
                this.props.history.push('/');
            }
        )

        // TODO: Change the link to uploading excel sheet.
        //this.props.history.push('/');
    }

    onFinishFailed = (errorInfo) => {
        this.props.history.push('/login');
        console.log(errorInfo);
    }

    render() {
        let errorMessage = null;
        if (this.props.error) {
            errorMessage = (
                <p> Username or password is incorrect! </p>
            )
        }
        
        return (
            <div>
                {errorMessage}
                {
                    this.props.loading ?
    
                    <LoadingOutlined style={{ fontSize: 24 }} spin />
    
                    :
    
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                        remember: true,
                        }}
                        onFinish={this.onFinish}
                        onFinishFailed={this.onFinishFailed}
                    >
                        
                        <Form.Item 
                            name="username"
                            rules={[
                                {
                                required: true,
                                message: 'Please input your Username!',
                                },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
    
                        </Form.Item>
    
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                required: true,
                                message: 'Please input your Password!',
                                },
                            ]}
                        >
    
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
    
                        </Form.Item>
    
                        {/* <Form.Item>
                        <a className="login-form-forgot" href="">
                            Forgot password
                        </a>
                        </Form.Item> */}
    
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>
                            Or <a href="">register now!</a>
                        </Form.Item>
                    </Form>
                }
            </div>
        );
    }
    
};

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (username, password) => dispatch(actions.authLogin(username, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (NormalLoginForm);