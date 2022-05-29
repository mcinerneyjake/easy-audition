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
    labels: ['May', 'June', 'July'],
    // auditionData.map((audition) => console.log(audition.auditionCompleteCountTotal)),
    datasets: [
      {
        label: 'Number of Auditions',
        data: auditionData.map((audition) => {
          console.log('audition:', audition);
          return audition.map((count) => {
            console.log('count:', count);
            console.log('count.count:', count.count);
            return count.count;
          });
        }),
        backgroundColor: ['rgba(75,192,192,1)', '#ecf0f1', '#50AF95'],
        borderColor: 'black',
        borderWidth: 2,
      },
    ],
  });

  return (
    <div>
      <LineChart chartData={userData} />
    </div>
  );
}

export default AuditionAnalytics;
