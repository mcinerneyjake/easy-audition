import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Card, Container } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';
import './SearchBar.css';

function SearchBar({ placeholder, data }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const [filteredData, setFilteredData] = useState([]);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    const newFilter = data.filter((value) => {
      if (value.show.toLowerCase().includes(searchWord.toLowerCase())) {
        return value.show.toLowerCase().includes(searchWord.toLowerCase());
      } else if (value.theatre.toLowerCase().includes(searchWord.toLowerCase())) {
        return value.theatre.toLowerCase().includes(searchWord.toLowerCase());
      }
    });

    if (searchWord === '') {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  return (
    <>
      <p className='search-title'>Audition Search:</p>
      <div className='search'>
        <div className='searchInputs'>
          <div>
            <input type='text' placeholder={placeholder} onChange={handleFilter} />
            <BsSearch />
          </div>
        </div>
        {filteredData.length != 0 && (
          <Container className='dataResult'>
            <Card className='searchCard'>
              {filteredData.slice(0, 15).map((audition, key) => {
                const getSingleAudition = () => {
                  getAuditionById(), goToAuditionDetails();
                };

                const getAuditionById = () => {
                  dispatch({
                    type: 'FETCH_AUDITION_DETAILS',
                    payload: audition.id,
                  });
                };

                const goToAuditionDetails = () => {
                  history.push('/details');
                };

                return (
                  <p key={key} onClick={getSingleAudition} className='searchp'>
                    {audition.theatre}, {audition.show}
                  </p>
                );
              })}
            </Card>
          </Container>
        )}
      </div>
    </>
  );
}

export default SearchBar;
