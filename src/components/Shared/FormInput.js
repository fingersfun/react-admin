import React from 'react';
import { Input, Form } from 'antd';
import PropTypes from 'prop-types';
const FormItem = Form.Item;

const FormInput = ({ getFieldDecorator, hasLabel, type, label, name, initialValue, isDisabled = false, message, formItemLayout, placeholder, isRequired = true }) => {
  return (
    <FormItem label={hasLabel ? label : null} hasFeedback {...formItemLayout}>
      {getFieldDecorator(name, {
        initialValue: initialValue,
        rules: [
          {
            required: isRequired,
            message: message
          }
        ]
      })(<Input disabled={isDisabled} placeholder={placeholder} type={type} />)}
    </FormItem>
  );
}

FormInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  initialValue: PropTypes.string,
  isDisabled: PropTypes.bool,
  isRequired: PropTypes.bool,
  hasLabel: PropTypes.bool,
  message: PropTypes.string,
  getFieldDecorator: PropTypes.func,
  formItemLayout: PropTypes.object,
  placeholder: PropTypes.string,
  inputStyle: PropTypes.object
}

export { FormInput };