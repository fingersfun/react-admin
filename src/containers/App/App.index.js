import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Logo from '../../assets/images/logo.png';
import { logout } from '../../services/user.services';
import SiderMenu from '../../components/Menu/Menu';
import { push } from 'react-router-redux';
import ModalContainer from '../Modal';
import './App.style.scss';
const { Header, Sider, Content, Footer } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class App extends Component {
  static propTypes = {
    logout: PropTypes.func,
    push: PropTypes.func,
    children: PropTypes.any
  }

  state = {
    collapsed: false,
  };

  // show/hide sider.
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  // Main Layout Header
  static Header = ({ collapsed, toggle, logout }) => {
    return <Header style={{ background: '#fff', padding: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Icon
        className="trigger"
        type={collapsed ? 'menu-unfold' : 'menu-fold'}
        onClick={toggle}
      />
      <Menu
        mode="horizontal"
      >
        <SubMenu title={<span><Icon type="user" />Admin</span>}>
          <MenuItemGroup title="Settings">
            <Menu.Item key="setting:2">
              <Icon type="user" theme="outlined" />
              Profile
              </Menu.Item>
            <Menu.Item key="setting:1" >
              <a href="" onClick={logout}>
                <Icon type="logout" theme="outlined" />
                Logout
                </a>
            </Menu.Item>
          </MenuItemGroup>
        </SubMenu>
      </Menu>
    </Header>
  }

  // Main Footer
  static Footer = () => {
    return <Footer
      style={{ textAlign: 'center', fontFamily: 'Arimo', fontSize: '12px' }}
    >
      <b>Contact:</b> <a href="mailto:kirankumar.mentam@gmail.com">kirankumar.mentam@gmail.com</a> for issues.
  </Footer>
  }

  // Sider 
  static Sider = ({ collapsed, onMenuSelect }) => {
    return <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
    >
      <div className="logo">
        <img src={Logo} alt="logo" />
        <span>Admin Panel</span>
      </div>
      <SiderMenu onMenuSelect={onMenuSelect} />
    </Sider>
  }

  onMenuSelect = (key) => {
    this.props.push(key);
  }

  render() {
    const { children } = this.props;
    return (
      <div className="reactRoot">
        <ModalContainer />
        <Layout style={{ height: '100vh' }}>
          <App.Sider collapsed={this.state.collapsed} onMenuSelect={this.onMenuSelect} />
          <Layout>
            <App.Header collapsed={this.state.collapsed} toggle={this.toggle} logout={this.props.logout} />
            <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
              {children}
            </Content>
            <App.Footer />
          </Layout>
        </Layout>
      </div>
    );
  }
}
export default connect(null, { logout, push })(App);