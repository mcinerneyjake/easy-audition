import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Button } from 'react-bootstrap';

import AuditionItem from '../AuditionItem/AuditionItem';
import SearchBar from '../SearchBar/SearchBar';
import './PastAuditions.css';

function PastAuditions() {
  const dispatch = useDispatch();
  const history = useHistory();
  const auditions = useSelector((store) => store.auditionsReducer);

  const [searchWord, setSearchWord] = useState('');

  useEffect(() => {
    dispatch({
      type: 'FETCH_AUDITIONS',
    });
  }, []);

  const goToAddAudition = () => {
    history.push('/form');
  };

  // Sorts auditions by most recent date first.
  const sortedAuditions = auditions.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <>
      <h2 className="past-h2">Past Auditions</h2>
      <div className="past-search-bar">
        <SearchBar placeholder="Enter Audition..." setSearchWord={setSearchWord} />
      </div>
      <div>
        {auditions.length ? (
          sortedAuditions
            .filter((audition) => {
              const auditionShow = audition.show.toLowerCase()
                .includes(searchWord.toLowerCase());
              const auditionTheatre = audition.theatre.toLowerCase()
                .includes(searchWord.toLowerCase());

              if (searchWord === '') {
                return audition;
              }
              if (auditionShow || auditionTheatre) {
                return audition;
              }
              /* TO-DO:
                Add a default message of:
                "Oops, there aren't any auditions here!" when a search doesn't have a match.
              */
            })
            .map((audition) => {
              if (audition.audition_complete) {
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
