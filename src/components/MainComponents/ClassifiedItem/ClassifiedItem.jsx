import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import { CgDetailsMore } from 'react-icons/cg';

import './ClassifiedItem.css';

const ClassifiedItem = ({ classified }) => {
  return (
    <div className='card-container'>
      <Card style={{ width: '18rem', height: '14rem' }} className='p-3 mb-2 classified-item-card'>
        <Card.Body>
          <div className='title-container'>
            <Card.Title className='title'>{classified.title}</Card.Title>
          </div>
          <a href={classified.classifiedUrl} className='button-container'>
            <Button className='button'>
              See Details <CgDetailsMore />
            </Button>
          </a>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ClassifiedItem;