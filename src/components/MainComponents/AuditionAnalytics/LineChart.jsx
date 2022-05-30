import React from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { Card, Container } from 'react-bootstrap';

function LineChart({ chartData }) {
  return (
    <div>
      <Container>
        <Card>
          <Line data={chartData} />
        </Card>
      </Container>
    </div>
  );
}

export default LineChart;
