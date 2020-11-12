import React from 'react';

import { Form, Input, Button, Spin } from 'antd';
import { Container } from 'reactstrap';
import { UserOutlined, LockOutlined, LoadingOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/auth';
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import './Login.css';


class NormalLoginForm extends React.Component {
    

    onFinish = (values) => {
        this.props.onAuth(values.username, values.password);
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
                <h2>Sign In</h2>
                {errorMessage}
                {
                    this.props.loading ?
    
                    <LoadingOutlined style={{ fontSize: 24 }} spin />
    
                    :

                    <Form
                        name="basic"
                        initialValues={{remember: true,}}
                        onFinish={this.onFinish}
                        onFinishFailed={this.onFinishFailed}
                    >
                        
                        <Form.Item 
                            className='field'
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Username!',
                                },
                            ]}
                        >
                            <Input 
                            prefix={<UserOutlined className="site-form-item-icon" />}
                            type='username'
                            placeholder="Username" />
                        </Form.Item>
    
                        <Form.Item
                            className='field'
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
                            <Button fullWidth type="primary" color='primary' htmlType="submit">
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
