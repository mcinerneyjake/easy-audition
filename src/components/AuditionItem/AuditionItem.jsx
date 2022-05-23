import './AuditionItem.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';

function AuditionItem({ audition }) {
  return (
    <div className='card-container'>
      <Card style={{ width: '18rem' }} className='p-3 mb-2 bg-secondary text-white'>
        <Card.Body>
          <Card.Title>{audition.show}</Card.Title>
          <Card.Subtitle>{audition.theatre}</Card.Subtitle>
          <Card.Text>{audition.location}</Card.Text>
          <Card.Text>{audition.date}</Card.Text>
        </Card.Body>
        <Button>See Details</Button>
      </Card>
    </div>
  );
}

export default AuditionItem;
