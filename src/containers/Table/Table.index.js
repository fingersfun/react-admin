import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Row, Col, Icon, Popconfirm } from 'antd';
import PropTypes from 'prop-types';
import memoize from "memoize-one";
import { Button, SearchInput } from 'components/Shared'
import { getAllUsers } from 'services/user.services';
import { setUserLoader } from 'actions/user.action';
import { openModal } from 'actions/modal.action';

class TableContainer extends Component {
  // PropTypes
  static propTypes = {
    getAllUsers: PropTypes.func,
    openModal: PropTypes.func,
    setUserLoader: PropTypes.func,
    loading: PropTypes.bool,
    allUsers: PropTypes.array,
  }

  // Initial State
  state = {
    dataSource: [],
    loading: this.props.loading,
    tableHeight: 500,
    searchValue: '',
  }

  static getDerivedStateFromProps(props, state) {
    if (props.loading !== state.loading) {
      return {
        loading: props.loading
      };
    }
    return null;
  }

  // Search + Add Button
  static TableHeader = ({ searchValue, onSearch, onAdd }) => {
    return (
      < Row style={{ paddingTop: 15, paddingBottom: 15 }}>
        <Col span={6} >
          <SearchInput
            placeholder="input search text"
            onChange={(e) => { onSearch(e.target.value); }}
            value={searchValue}
          />
        </Col>
        <Col span={4} offset={14} style={{ justifyContent: 'flex-end', flexDirection: 'row', display: 'flex' }}>
          <Button
            type="primary"
            iconType="plus"
            hasIcon={true}
            label="Add New Record"
            onClick={onAdd}
          />
        </Col>
      </Row >
    )
  }

  componentDidMount() {
    this.getTableData();
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  // Handles the resize.
  handleResize = () => {
    this.setState({
      tableHeight: (window.innerHeight - 300)
    });
  }

  getTableData = () => {
    if (!this.props.allUsers) {
      this.props.setUserLoader(true);
      return new Promise((resolve, reject) => {
        this.props.getAllUsers(resolve, reject);
      }).then(() => {
        this.props.setUserLoader(false);
        this.setState({
          dataSource: this.props.allUsers
        });
      }).catch(() => {
        this.props.setUserLoader(false);
      })
    } else {
      this.setState({
        dataSource: this.props.allUsers
      });
    }
  }

  handleChange = (pagination, filters, sorter) => {
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  }

  // Deletes a record.
  onRecordDelete = (record) => {
    this.props.setUserLoader(true);
    let newSource = this.state.dataSource.filter(user => user.id !== record.id)
    this.setState({ dataSource: newSource }, () => { this.props.setUserLoader(false); });
  }

  filterIt = memoize((arr, searchKey) => {
    const list = arr.filter(obj => Object.keys(obj).some((key) =>
      (
        (key + "" !== 'key') && (key + "" !== 'id')) ?
        ((obj[key] + "").toLowerCase()).includes(searchKey.toLowerCase()) : null
    ));
    if (list !== this.state.dataSource) {
      this.setState({
        dataSource: list
      });
    }
  }
  );

  onSearch = (text) => {
    this.setState({
      searchValue: text
    });
  }

  render() {
    if (this.props.allUsers && this.props.allUsers.length > 0) {
      this.filterIt(this.props.allUsers, this.state.searchValue);
    }

    // Columns
    const columns = [
      {
        title: 'Name',
        dataIndex: 'fullName',
        width: 250,
        filters: [{
          text: 'Joe',
          value: 'Joe',
        }, {
          text: 'Jim',
          value: 'Jim',
        }, {
          text: 'Submenu',
          value: 'Submenu',
          children: [{
            text: 'Green',
            value: 'Green',
          }, {
            text: 'Black',
            value: 'Black',
          }],
        }
        ],
        // specify the condition of filtering result
        // here is that finding the name started with `value`
        onFilter: (value, record) => record.fullName.indexOf(value) === 0,
        sorter: (a, b) => a.fullName.length - b.fullName.length,
      }, {
        title: 'Age',
        dataIndex: 'age',
        defaultSortOrder: 'descend',
        width: 150,
        sorter: (a, b) => a.age - b.age,
      }, {
        title: 'Address',
        dataIndex: 'address',
        filters: [{
          text: 'London',
          value: 'London',
        }, {
          text: 'New York',
          value: 'New York',
        }],
        filterMultiple: false,
        onFilter: (value, record) => record.address.indexOf(value) === 0,
        sorter: (a, b) => a.address.length - b.address.length,
      },
      {
        title: 'Operation',
        key: 'operation',
        width: 100,
        // fixed: 'right',
        render: (text, record) => {
          return (
            <Popconfirm title="Are you sure you want to delete?" onConfirm={() => this.onRecordDelete(record)}>
              <div style={{ width: '100%', textAlign: 'center' }}>
                <Icon style={{ alignSelf: 'center', cursor: 'pointer', fontSize: '1.7em', color: 'rgb(255,143,143)', padding: 4, background: '#efeded', borderRadius: 25, boxShadow: '1px 1px 1px rgba(0,0,0,0.3)' }} type="user-delete" />
              </div>
            </Popconfirm>
          );
        }
      }
    ];

    return (
      <div>
        <TableContainer.TableHeader searchValue={this.state.searchValue} onSearch={this.onSearch} onAdd={() => {
          this.props.openModal('user-modal');
        }} />
        <Table
          columns={columns} dataSource={this.state.dataSource} bordered size="middle" loading={this.state.loading}
          scroll={{ y: this.state.tableHeight }} pagination={false} onChange={this.handleChange}
          rowKey={record => record.id}
        />
      </div >
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allUsers: state.users.allUsers,
    loading: state.users.loading
  };
}

export default connect(mapStateToProps, { getAllUsers, setUserLoader, openModal })(TableContainer);