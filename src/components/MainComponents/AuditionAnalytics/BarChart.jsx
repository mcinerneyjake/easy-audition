import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { Card, Container } from 'react-bootstrap';

function BarChart({ chartData }) {
  return (
    <div>
      <Container>
        <Card>
          <Bar data={chartData} />
        </Card>
      </Container>
    </div>
  );
}

export default BarChart;
