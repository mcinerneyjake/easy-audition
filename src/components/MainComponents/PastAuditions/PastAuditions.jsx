import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AuditionItem from '../AuditionItem/AuditionItem';
import SearchBar from '../SearchBar/SearchBar';
import './PastAuditions.css';

function PastAuditions() {
  const dispatch = useDispatch();
  const auditions = useSelector((store) => store.auditionsReducer);

  useEffect(() => {
    dispatch({
      type: 'FETCH_AUDITIONS',
    });
  }, []);

  return (
    <>
      <h2 className='past-h2'>Past Auditions</h2>
      <div className='past-search-bar'>
        <SearchBar placeholder='Enter Audition...' data={auditions} />
      </div>
      <div>
        {auditions.map((audition) => {
          if (audition.audition_complete === true) {
            return <AuditionItem key={audition.id} audition={audition} />;
          }
        })}
      </div>
    </>
  );
}

export default PastAuditions;
