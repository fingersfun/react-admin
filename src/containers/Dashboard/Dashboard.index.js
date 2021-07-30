import React, { Component } from 'react';
import { Row, Col, Card, Progress, Badge, Timeline } from 'antd';
import NumberCard from 'components/NumberCard/NumberCard';
// import { Doughnut } from '../../components/Charts/Doughnut';
import Bar from 'components/Charts/Bar';
import CountUp from 'react-countup';
import './Dashboard.style.scss';

class Dashboard extends Component {
  cards = [
    {
      title: 'Active Users',
      color: '#8fd684f5',
      number: 1033,
      type: 'user-add'
    },
    {
      title: 'Pending Users',
      color: '#ffb2b2',
      number: 3233,
      type: 'user-delete'
    },
    {
      title: 'New Groups',
      color: '#dabb5b',
      number: 999,
      type: 'usergroup-add'
    },
  ]

  // Number Cards can be used to show stats of users.
  static NumberCards = ({ cards }) => {
    return (
      <Row gutter={27}>
        {
          cards.map((item, index) => {
            return (
              <Col span={8} key={index}>
                <NumberCard color={item.color} number={item.number} type={item.type} title={item.title} />
              </Col>
            );
          })
        }
      </Row>
    )
  }

  // Progress card can be used to show progress by months.
  static ProgressBar = () => {
    return (
      <Card hoverable style={{ maxHeight: 230, minHeight: 230 }}>
        <div className="statsWithProgressBar">
          <div className="header">
            <span className="headerNum"><CountUp end={3201} /></span> <span className="statsHeaderTitle">Progress</span>
          </div>
          <div style={{ marginTop: 15 }}>
            <div>
              January
                <Progress percent={60} strokeColor='#ffc920b3' format={percent => `${percent}`} />
            </div>
            <div>
              Febuary
                <Progress percent={60} strokeColor='#ff6666f5' format={percent => `${percent}`} />
            </div>
            <div>
              March
                <Progress percent={40} strokeColor='#7edacf' format={percent => `${percent}`} />
            </div>
          </div>
        </div>
      </Card>
    );
  }

  // Circular Progress can be used to show the increament od user on daily basis.
  static CircularProgress = () => {
    return (
      <Card hoverable style={{ maxHeight: 230, minHeight: 230 }}>
        <div className="userStats-circular-progress">
          <div className="userStats-card-header">
            <div className="card-header-number-count">
              <CountUp end={200} />
            </div>
            <div className="card-header-label">
              User daily use
          </div>
          </div>
          <div className="userStats-badge-and-prgress">
            <Badge
              count={35}
              overflowCount={30}
              style={{
                backgroundColor: '#7edacf',
                borderRadius: 4,
                // margin: 10,
                marginBottom: '2rem',
                width: 60,
                height: 30,
                fontSize: 19,
                textAlign: 'center',
                lineHeight: '30px'
              }} />
            <Progress style={{ stroke: '#7edacf' }} type="circle" percent={75} />
          </div>
        </div>
      </Card>
    );
  }

  // Stats Section on Dashboard.
  static Stats = () => {
    return (
      <Row gutter={27} style={{ marginTop: 30 }}>
        <Col span={8}>
          <Dashboard.ProgressBar />
        </Col>
        <Col span={8}>
          <Dashboard.CircularProgress />
        </Col>
        <Col span={8}>
          <Card hoverable style={{ maxHeight: 230, minHeight: 230 }}>
            <div style={{ height: 200 }}>
              <Bar />
            </div>
          </Card>
        </Col>
      </Row >
    );
  }

  static CircularProgressCardWithHeader = ({ title, count, strokeColor, progress, headerBackground, bodyColor }) => {
    return (
      <Col span={5} style={{ padding: 0 }}>
        <Card hoverable style={{ display: 'flex', flexDirection: 'column', padding: 0, maxHeight: 300 }} bodyStyle={{ padding: 0 }} >
          <div style={{ display: 'flex', width: '100%', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white', height: 60, backgroundColor: headerBackground }}>
            <div>{title}</div>
            <div>{count}</div>
          </div>
          <div className={`circular-progress-with-${strokeColor}-header`}>
            <Progress type="circle" percent={progress} />
          </div>
        </Card>
      </Col>
    );
  }

  TimeLineDate = [
    {
      color: 'green',
      description: ['Create a service site Sept 15, 2018']
    },
    {
      color: 'green',
      description: ['Create a service site Sept 20, 2018']
    },
    {
      color: 'red',
      description: [
        'Solve initial network problems 1',
        'Solve initial network problems 2',
        'Solve initial network problems Oct 10, 2018'
      ]
    },
    {
      color: 'blue',
      description: [
        'Technical Testing',
        'UI Testing',
        'Final Testing Oct 25, 2018'
      ]
    },
  ];
  // TODO: make Timeline dynamic and pass the dataSource.
  static TimeLineComponent = ({ title, headerBackground, maxHeight, data }) => {
    return (
      <Card hoverable style={{ maxHeight: maxHeight, display: 'flex', flexDirection: 'column', padding: 0 }} bodyStyle={{ padding: 0 }}>
        <div className="timeline-card-component">
          <div style={{ backgroundColor: headerBackground }} className="header">
            <div>{title}</div>
          </div>
          <div style={{ overflow: 'scroll', maxHeight: 240, padding: 10, paddingLeft: 15 }}>
            <Timeline>
              {
                data.map((item, index) => {
                  return <Timeline.Item color={item.color} key={index}>
                    {item.description.map((desc, index) => {
                      return <p key={index}>{desc}</p>
                    })}
                  </Timeline.Item>
                })
              }
            </Timeline>
          </div>

        </div>
      </Card>
    );
  }

  static StatsWithTimeline = ({ timelineData }) => {
    return (
      <Row gutter={24} style={{ margin: 1, marginTop: 30, paddingBottom: '3rem' }}>
        <Dashboard.CircularProgressCardWithHeader title="Total Projects" count={3200} progress={80} strokeColor="6bdcff" headerBackground="#6bdcff" />
        <Dashboard.CircularProgressCardWithHeader title="Total Projects" count={900} progress={45} strokeColor="7edacf" headerBackground="#7edacf" />
        <Dashboard.CircularProgressCardWithHeader title="Total Projects" count={1700} progress={60} strokeColor="ffc920b3" headerBackground="#ffc920b3" />
        <Col span={9} style={{ padding: 0 }}>
          <Dashboard.TimeLineComponent headerBackground="#ff6066" title="Project Activity" maxHeight={300} data={timelineData} />
        </Col>
      </Row>
    );
  }

  render() {
    return (
      <div>
        <Dashboard.NumberCards cards={this.cards} />
        <Dashboard.Stats />
        <Dashboard.StatsWithTimeline timelineData={this.TimeLineDate} />
      </div>
    );
  }
}

export default Dashboard;