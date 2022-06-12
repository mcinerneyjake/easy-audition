import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import AuditionItem from '../AuditionItem/AuditionItem';
import SearchBar from '../SearchBar/SearchBar';
import './UpcomingAuditions.css';
import { Button } from 'react-bootstrap';

function UpcomingAuditions() {
  const dispatch = useDispatch();
  const history = useHistory();
  const auditions = useSelector((store) => store.auditionsReducer);

  useEffect(() => {
    dispatch({
      type: 'FETCH_AUDITIONS',
    });
  }, []);

  const goToAddAudition = () => {
    history.push('/form');
  };

  return (
    <>
      <h2 className='upcoming-h2'>Upcoming Auditions</h2>
      <div className='upcoming-search-bar'>
        <SearchBar placeholder='Enter Audition...' data={auditions} />
      </div>
      {auditions.length ? (
        auditions.map((audition) => {
          if (audition.audition_complete === false) {
            return <AuditionItem key={audition.id} audition={audition} />;
          }
        })
      ) : (
        <>
          <h3>Oops, there are no auditions here yet!</h3>
          <Button onClick={goToAddAudition}>Add a New Audition</Button>
        </>
      )}
    </>
  );
}

export default UpcomingAuditions;
