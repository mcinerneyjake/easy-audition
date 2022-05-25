import { useState } from 'react';
import { useSelector } from 'react-redux';

function AuditionAnalytics() {
  const auditions = useSelector((store) => store.auditionsReducer);

  const [userData, setUserData] = useState({
    labels: auditions.map((audition) => audition.date),
    datasets: [
      {
        label: 'Number of Auditions',
        data: auditions.map((audition) => audition),
        backgroundColor: ['rgba(75,192,192,1)', '#ecf0f1', '#50AF95', '#f3ba2f', '#2a71d0'],
        borderColor: 'black',
        borderWidth: 2,
      },
    ],
  });

  return (
    <div style={{ width: 700 }}>
      <LineChart chartData={userData} />
    </div>
  );
}

export default AuditionAnalytics;
