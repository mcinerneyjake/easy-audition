import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

function AuditionDetails() {
  const history = useHistory();
  const audition = useSelector((store) => store.auditionDetailsReducer);

  const goToAuditionsList = () => {
    history.push('/');
  };

  return (
    <>
      {audition.map((detail) => {
        const goToEditAudition = () => {
          history.push(`/edit/${detail.id}`);
        };

        return (
          <div key={detail.id} className='card-container'>
            <Card style={{ width: '18rem' }} className='p-3 mb-2 bg-secondary text-white'>
              <Card.Body>
                <Card.Title>{detail.show}</Card.Title>
                <Card.Subtitle>{detail.theatre}</Card.Subtitle>
                <Card.Text>{detail.location}</Card.Text>
                <Card.Text>{detail.date}</Card.Text>
              </Card.Body>
              <Button onClick={goToEditAudition}>Edit</Button>
              <Button onClick={goToAuditionsList}>Go Back</Button>
            </Card>
          </div>
        );
      })}
    </>
  );
}

export default AuditionDetails;
