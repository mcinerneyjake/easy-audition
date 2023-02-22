import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ClassifiedItem from '../ClassifiedItem/ClassifiedItem';
import SearchBar from '../SearchBar/SearchBar';
import './Classifieds.css';

function Classifieds() {
  const dispatch = useDispatch();
  const classifieds = useSelector((store) => store.classifiedsReducer);

  useEffect(() => {
    dispatch({
      type: 'FETCH_CLASSIFIEDS',
    });
  }, []);

  const [searchWord, setSearchWord] = useState('');

  return (
    <>
      <h2 className='classifieds-h2'>Classifieds</h2>
      <div className='classifieds-search-bar'>
        <SearchBar placeholder='Enter Classified...' setSearchWord={setSearchWord} />
      </div>
      <div>
        {classifieds.length ? (
          classifieds
          .filter((classified) => {
            const classifiedTitle = classified.title.toLowerCase().includes(searchWord.toLowerCase());
            const classifiedUrl = classified.classifiedUrl.toLowerCase().includes(searchWord.toLowerCase());

            if (searchWord === '') {
              return classified;
            } else if (classifiedTitle || classifiedUrl) {
              return classified;
            }
            // TO-DO: add a default "Oops, there aren't any classifieds here!" card when a search doesn't have a match.
          })
          .map((classified) => {
            return (
              <ClassifiedItem key={classified.title} classified={classified} />
            )
          })
        ) : (
          <>
            <h3>Oops, there are no classifieds!</h3>
          </>
        )}
      </div>
    </>
  );
}

export default Classifieds;