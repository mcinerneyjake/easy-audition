import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LineChart from './LineChart';
import Chart from 'chart.js/auto';

function AuditionAnalytics() {
  const dispatch = useDispatch();
  const auditionData = useSelector((store) => store.auditionDataReducer);

  console.log('auditionData:', auditionData);

  useEffect(() => {
    dispatch({
      type: 'FETCH_ANALYTICS_DATA',
    });
  }, []);

  const [userData, setUserData] = useState({
    labels: auditionData.map && auditionData.map((audition) => audition.auditionCompleteTotal.date),
    datasets: [
      {
        label: 'Number of Auditions',
        data:
          auditionData.map &&
          auditionData.map((audition) => [
            console.log('count of completed auditions:', audition.auditionCompleteTotal.count),
            audition.auditionCompleteTotal.count,
            audition.callbackTotal.count,
            audition.bookedTotal.count,
          ]),
        backgroundColor: ['rgba(75,192,192,1)', '#ecf0f1', '#50AF95'],
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
