import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Card, Button, Container } from 'react-bootstrap';
import './AuditionDetails.css';
import { DateTime } from 'luxon';
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';
import { FaEdit } from 'react-icons/fa';

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
            <div key={detail.id}>
              <Container>
                <Card style={{ width: '18rem' }} className='p-3 mb-2 text-black details-item-card'>
                  <Card.Body>
                    <Card.Title>{detail.show}</Card.Title>
                    <Card.Subtitle>{detail.theatre}</Card.Subtitle>
                    <Card.Text>{detail.location}</Card.Text>
                    <Card.Text>{DateTime.fromISO(detail.date).toLocaleString(DateTime.DATETIME_MED)}</Card.Text>
                    <Card className='pt-2 pb-2 extra-details-card'>
                      <Card.Text>Director: {detail.director}</Card.Text>
                      <Card.Text>Music Director: {detail.music_director}</Card.Text>
                      <Card.Text>Choreographer: {detail.choreographer}</Card.Text>
                      <Card.Text>Casting Director: {detail.casting_director}</Card.Text>
                      <Card.Text>Pianist: {detail.pianist}</Card.Text>
                      <Card.Text>Monitor: {detail.monitor}</Card.Text>
                      <Card.Text>Materials Used: {detail.materials_used}</Card.Text>
                      <Card.Text>Audition Complete? {detail.audition_complete ? 'Yes' : 'No'}</Card.Text>
                      <Card.Text>Callback? {detail.callback ? 'Yes' : 'No'}</Card.Text>
                      <Card.Text>Booked? {detail.booked ? 'Yes' : 'No'}</Card.Text>
                      <Card.Text>Notes: {detail.notes}</Card.Text>
                    </Card>
                  </Card.Body>
                  {detail.audition_complete ? null : (
                    <Button onClick={goToEditAudition}>
                      Edit <FaEdit />
                    </Button>
                  )}
                  <Button className='mt-3' onClick={goToAuditionsList}>
                    Go Back To Auditions <BsFillArrowLeftSquareFill />
                  </Button>
                </Card>
              </Container>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default AuditionDetails;
