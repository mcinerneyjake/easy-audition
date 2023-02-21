import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Classifieds.css';

function Classifieds() {
  const dispatch = useDispatch();
  const classifieds = useSelector((store) => store.classifiedsReducer);

  useEffect(() => {
    dispatch({
      type: 'FETCH_CLASSIFIEDS',
    });
  }, []);

  return (
    <>
      <h2 className='classifieds-h2'>Classifieds</h2>
      <div>
        {classifieds.length ? (
          classifieds.map((classified) => {
            return (
              <>
                <h3>{classified.title}</h3>
                <a href={classified.classifiedUrl}>{classified.classifiedUrl}</a>
              </>
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