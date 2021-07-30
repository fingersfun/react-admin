import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { setCurrentUser } from 'actions/user.action';
import UserModal from 'components/Modal/UserModal';
import { closeModal } from 'actions/modal.action';

class UserModalContainer extends Component {
  static propTypes = {
    closeModal: PropTypes.func,
    setCurrentUser: PropTypes.func
  }

  state = {
    isOpened: true
  };

  render() {
    const userModalProps = {
      // item: this.props.currentUser,
      // type: this.props.modalType,
      visible: this.state.isOpened
    };
    return (
      <UserModal
        {...userModalProps}
        onOk={(data) => {
          console.log(data);
        }}
        onCancel={() => {
          this.props.closeModal();
          this.setState({ isOpened: false });
          this.props.setCurrentUser(null);
        }}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    closeModal,
    setCurrentUser
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(UserModalContainer);
