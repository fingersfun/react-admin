import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import BubbleChart from '../../components/Charts/Bubble';
import PolarChart from '../../components/Charts/Polar';
import { Doughnut } from '../../components/Charts/Doughnut';
import Bar from '../../components/Charts/Bar';
import './Charts.style.scss';
import Radar from '../../components/Charts/Radar';
import Pie from '../../components/Charts/Pie';

class Charts extends Component {

  static CircularChartsSection = () => {
    return (
      <Row gutter={27} >
        <Col span={8}>
          <Card hoverable className="circular-chart-card" bodyStyle={{ padding: 5 }}>
            <div className="title">Doughnut Chart</div>
            <Doughnut height={250} />
          </Card>
        </Col>
        <Col span={8}>
          <Card hoverable className="circular-chart-card" bodyStyle={{ padding: 5 }}>
            <div className="title">Pie Chart</div>
            <Pie />
          </Card>
        </Col>
        <Col span={8}>
          <Card hoverable className="circular-chart-card" bodyStyle={{ padding: 5 }}>
            <div className="title">Polar Chart</div>
            <PolarChart />
          </Card>
        </Col>
      </Row>
    );
  }

  static BarChart = () => {
    return (
      <Row gutter={27} >
        <Card span={24} hoverable className="bar-chart-card" bodyStyle={{ padding: 5, height: 400, margin: '1rem' }}>
          <div className="title">Bar Chart</div>
          <Bar />
        </Card>
      </Row>
    )
  }

  static PieWithBubbleChart = () => {
    return (
      <Row gutter={27} style={{ marginTop: '2rem' }}>
        <Col span={16}>
          <Card hoverable bodyStyle={{ padding: 5 }} className="pie-with-bubble-chart-section-card">
            <div className="title">Bubble Chart</div>
            <div style={{ height: 350, maxHeight: 350 }}>
              <BubbleChart />
            </div>
          </Card>
        </Col>
        <Col span={8}>
          <Card hoverable bodyStyle={{ padding: 5 }} className="pie-with-bubble-chart-section-card">
            <div className="title">Radar Chart</div>
            <Radar />
          </Card>
        </Col>
      </Row>
    );
  }

  render() {
    return (
      <div>
        <Charts.CircularChartsSection />
        <Charts.PieWithBubbleChart />
        <Charts.BarChart />
      </div>
    );
  }
}

export default Charts;