import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function AuditionsList() {
  const dispatch = useDispatch();
  const auditions = useSelector((store) => store.auditionsReducer);

  useEffect(() => {
    dispatch({
      type: 'FETCH_AUDITIONS',
    });
  }, []);

  return (
    <>
      <h2>Upcoming Auditions</h2>
      <div>
        <ul>
          {auditions.map((audition) => {
            return (
              <li key={audition.id}>
                <p>Theatre: {audition.theatre}</p>
                <p>Show: {audition.show}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default AuditionsList;
