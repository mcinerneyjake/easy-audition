import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Card, Container } from 'react-bootstrap';

function BarChart({ auditionData }) {
  const chartData = {
    labels: ['Completed', 'Callbacks', 'Booked'],
    datasets: [
      {
        label: 'Total Number of Auditions',
        data: auditionData.map((audition) => audition[0].count),
        backgroundColor: ['rgba(75,192,192,1)', '#ecf0f1', '#50AF95'],
        borderColor: 'black',
        borderWidth: 2,
      },
    ],
  };

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
