import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import AuditionItem from '../AuditionItem/AuditionItem';
import SearchBar from '../SearchBar/SearchBar';
import './PastAuditions.css';
import { Button } from 'react-bootstrap';

function PastAuditions() {
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

  // Sorts auditions by most recent date first.
  const sortedAuditions = auditions.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  return (
    <>
      <h2 className='past-h2'>Past Auditions</h2>
      <div className='past-search-bar'>
        <SearchBar placeholder='Enter Audition...' data={auditions} />
      </div>
      <div>
        {auditions.length ? (
          sortedAuditions.map((audition) => {
            if (audition.audition_complete === true) {
              return <AuditionItem key={audition.id} audition={audition} />;
            }
          })
        ) : (
          <>
            <h3>Oops, there are no auditions here yet!</h3>
            <Button onClick={goToAddAudition}>Add a New Audition</Button>
          </>
        )}
      </div>
    </>
  );
}

export default PastAuditions;
