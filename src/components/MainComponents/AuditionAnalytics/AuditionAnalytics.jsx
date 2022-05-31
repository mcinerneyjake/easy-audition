import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BarChart from './BarChart';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend);

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
    labels: ['Completed', 'Callbacks', 'Booked'],
    // auditionData && auditionData.map((audition) => console.log(audition.auditionCompleteCountTotal)),
    datasets: [
      {
        label: 'Total Number of Auditions',
        data:
          auditionData &&
          auditionData.map((audition) => {
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
      <BarChart chartData={userData} />
    </div>
  );
}

export default AuditionAnalytics;
