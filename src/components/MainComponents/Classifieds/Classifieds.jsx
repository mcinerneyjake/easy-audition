import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ClassifiedItem from '../ClassifiedItem/ClassifiedItem';
import SearchBar from '../SearchBar/SearchBar';
import Loader from '../Loader/Loader';
import './Classifieds.css';

function Classifieds() {
  const dispatch = useDispatch();
  const classifieds = useSelector((store) => store.classifiedsReducer);

  const [loading, setLoading] = useState(true);
  const [searchWord, setSearchWord] = useState('');

  useEffect(() => {
    dispatch({
      type: 'FETCH_CLASSIFIEDS',
    });
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      <h2 className="classifieds-h2">Classifieds</h2>
      <div className="classifieds-search-bar">
        <SearchBar placeholder="Enter Classified..." setSearchWord={setSearchWord} />
      </div>
      <div>
        {classifieds.length && !loading ? (
          classifieds
            .filter((classified) => {
              const classifiedTitle = classified.title.toLowerCase()
                .includes(searchWord.toLowerCase());

              const classifiedUrl = classified.classifiedUrl.toLowerCase()
                .includes(searchWord.toLowerCase());

              if (searchWord === '') {
                return classified;
              }
              if (classifiedTitle || classifiedUrl) {
                return classified;
              }
            })
            .map((classified) => <ClassifiedItem key={classified.title} classified={classified} />)
        ) : (
          <Loader loading={loading} />
        )}
      </div>
    </>
  );
}

export default Classifieds;
