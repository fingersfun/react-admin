import React, { Component } from 'react';
import { Form, Row, Button } from 'antd';
import PropTypes from 'prop-types';
import { FormInput } from '../Shared';

class LoginForm extends Component {

  // PropTypes
  static propTypes = {
    onSubmit: PropTypes.func,
    isLoading: PropTypes.bool,
    form: PropTypes.object
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.props.onSubmit}>
        <FormInput
          getFieldDecorator={getFieldDecorator}
          message="Please Enter Your Email"
          name="email"
          placeholder="Email"
          type="text"
          isRequired={true}
          isDisabled={false}

        />
        <FormInput
          getFieldDecorator={getFieldDecorator}
          message="Please Enter Your Password"
          name="password"
          placeholder="Password"
          type="password"
          isRequired={true}
          isDisabled={false}
        />
        <Row>
          <Button type="primary" htmlType="submit" size="large" loading={this.props.isLoading}>
            Login
        </Button>
        </Row>
      </Form>
    )
  }
}

export default Form.create()(LoginForm);