import React, { Component } from 'react';
import { Button, Row, Form, Input } from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Logo from 'assets/images/logo.png';
import { userLogin } from 'services/user.services';
import './Login.style.scss';

const FormItem = Form.Item;

class LoginForm extends Component {
  // PropTypes
  static propTypes = {
    userLogin: PropTypes.func,
    form: PropTypes.object
  }

  // Initial State
  state = {
    isLoading: false
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.setState({
          isLoading: true
        });
        return new Promise((resolve, reject) => {
          this.props.userLogin(values, resolve, reject);
        }).then(() => {
          this.setState({
            isLoading: false
          });
        }).catch(() => {
          this.props.form.resetFields();
          this.setState({
            isLoading: false
          });
        })
      }
    });
  }

  static FormInput = ({ getFieldDecorator, placeholder, name, message, type }) => {
    return <FormItem hasFeedback>
      {getFieldDecorator(name, {
        rules: [
          {
            required: true,
            message: message
          }
        ]
      })(<Input size='large' placeholder={placeholder} type={type} />)}
    </FormItem>
  }

  // Form
  static Form = ({ form, loading, onSubmit }) => {
    const { getFieldDecorator } = form;

    return <Form onSubmit={onSubmit}>
      <LoginForm.FormInput getFieldDecorator={getFieldDecorator} message="Please Enter Your Email" name="email" placeholder="Email" type="text" />
      <LoginForm.FormInput getFieldDecorator={getFieldDecorator} message="Please Enter Your Password" name="password" placeholder="Password" type="password" />
      <Row>
        <Button type="primary" htmlType="submit" size="large" loading={loading}>
          Login
        </Button>
      </Row>
    </Form>
  }

  // logo and title
  static Logo = () => {
    return <div className="loginLogo">
      <img src={Logo} alt="logo" />
      <span>Fingers Admin Panel</span>
    </div>
  }

  render() {
    return (
      <div className="loginForm">
        <LoginForm.Logo />
        <LoginForm.Form
          form={this.props.form}
          loading={this.state.isLoading}
          onSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default connect(null, { userLogin })(Form.create()(LoginForm));