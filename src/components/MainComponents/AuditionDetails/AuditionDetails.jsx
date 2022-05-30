import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import './AuditionDetails.css';
import { DateTime } from 'luxon';

function AuditionDetails() {
  const history = useHistory();
  const audition = useSelector((store) => store.auditionDetailsReducer);

  return (
    <>
      {audition.map((detail) => {
        const goToEditAudition = () => {
          history.push(`/edit/${detail.id}`);
        };

        const goToAuditionsList = () => {
          if (detail.audition_complete === true) {
            history.push('/past-auditions');
          } else if (detail.audition_complete === false) {
            history.push('/upcoming-auditions');
          }
        };

        return (
          <div>
            <h2 className='details-h2'>Audition Details</h2>
            <div key={detail.id} className='card-container'>
              <Card style={{ width: '18rem' }} className='p-3 mb-2 bg-secondary text-white mt-3'>
                <Card.Body>
                  <Card.Title>{detail.show}</Card.Title>
                  <Card.Subtitle>{detail.theatre}</Card.Subtitle>
                  <Card.Text>{detail.location}</Card.Text>
                  <Card.Text>{DateTime.fromISO(detail.date).toLocaleString(DateTime.DATETIME_MED)}</Card.Text>
                  <Card.Text>Director: {detail.director}</Card.Text>
                  <Card.Text>Music Director: {detail.music_director}</Card.Text>
                  <Card.Text>Choreographer: {detail.choreographer}</Card.Text>
                  <Card.Text>Casting Director: {detail.casting_director}</Card.Text>
                  <Card.Text>Pianist: {detail.pianist}</Card.Text>
                  <Card.Text>Monitor: {detail.monitor}</Card.Text>
                  <Card.Text>Materials Used: {detail.materials_used}</Card.Text>
                  <Card.Text>Audition Complete? {detail.audition_complete}</Card.Text>
                  <Card.Text>Callback? {detail.callback}</Card.Text>
                  <Card.Text>Booked? {detail.booked}</Card.Text>
                  <Card.Text>Notes: {detail.notes}</Card.Text>
                </Card.Body>
                <Button onClick={goToEditAudition}>Edit</Button>
                <Button className='mt-3' onClick={goToAuditionsList}>
                  Go To Auditions
                </Button>
              </Card>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default AuditionDetails;
