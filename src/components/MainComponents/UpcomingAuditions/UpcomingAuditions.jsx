import React, { useEffect, useState } from 'react';
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

  const [searchWord, setSearchWord] = useState('');

  return (
    <>
      <h2 className='upcoming-h2'>Upcoming Auditions</h2>
      <div className='upcoming-search-bar'>
        <SearchBar placeholder='Enter Audition...' setSearchWord={setSearchWord} />
      </div>
      {auditions.length ? (
        auditions
          .filter((audition) => {
            const auditionShow = audition.show.toLowerCase().includes(searchWord.toLowerCase());
            const auditionTheatre = audition.theatre.toLowerCase().includes(searchWord.toLowerCase());
            if (searchWord === '') {
              return audition;
            } else if (auditionShow || auditionTheatre) {
              return audition;
            }
            // TO-DO: add a default "Oops, there aren't any auditions here!" card when a search doesn't have a match.
          })
          .map((audition) => {
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
