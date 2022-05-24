import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form, Card, Container } from 'react-bootstrap';
import './AuditionForm.css';

function AuditionForm() {
  const dispatch = useDispatch();

  const [theatre, setTheatre] = useState([]);
  const [location, setLocation] = useState([]);
  const [show, setShow] = useState([]);
  const [date, setDate] = useState([]);
  const [director, setDirector] = useState([]);
  const [musicDirector, setMusicDirector] = useState([]);
  const [choreographer, setChoreographer] = useState([]);
  const [castingDirector, setCastingDirector] = useState([]);
  const [pianist, setPianist] = useState([]);
  const [monitor, setMonitor] = useState([]);
  const [materialsUsed, setMaterialsUsed] = useState([]);
  const [callback, setCallback] = useState(false);
  const [booked, setBooked] = useState(false);
  const [notes, setNotes] = useState([]);

  const addNewAudition = () => {
    dispatch({
      type: 'ADD_AUDITION',
      payload: {
        theatre,
        location,
        show,
        date,
        director,
        musicDirector,
        choreographer,
        castingDirector,
        pianist,
        monitor,
        materialsUsed,
        callback,
        booked,
        notes,
      },
    });
    setTheatre([]);
    setLocation([]);
    setShow([]);
    setDate([]);
    setDirector([]);
    setMusicDirector([]);
    setChoreographer([]);
    setCastingDirector([]);
    setPianist([]);
    setMonitor([]);
    setMaterialsUsed([]);
    setCallback(false);
    setBooked(false);
    setNotes([]);
  };

  return (
    <>
      <Container className='form-card-container'>
        <Card style={{ width: '60rem' }} className='form-card p-3 mb-2 bg-secondary text-white'>
          <Card.Body>
            <Card.Title style={{ color: '#222' }}>Enter a New Audition</Card.Title>
            <Form>
              <Form.Group className='mb-3'>
                <Form.Label>Theatre</Form.Label>
                <Form.Control
                  type='text'
                  value={theatre}
                  placeholder='Enter Theatre Name'
                  onChange={(event) => setTheatre(event.target.value)}
                />
              </Form.Group>

              <Form.Group className='mb-3'>
                <Form.Label>Location</Form.Label>
                <Form.Control
                  type='text'
                  value={location}
                  placeholder='Enter Location'
                  onChange={(event) => setLocation(event.target.value)}
                />
              </Form.Group>

              <Form.Group className='mb-3'>
                <Form.Label>Show</Form.Label>
                <Form.Control
                  type='text'
                  value={show}
                  placeholder='Enter Show'
                  onChange={(event) => setShow(event.target.value)}
                />
              </Form.Group>

              <Form.Group className='mb-3'>
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type='text'
                  value={date}
                  placeholder='Enter Date of Audition'
                  onChange={(event) => setDate(event.target.value)}
                />
              </Form.Group>

              <Form.Group className='mb-3'>
                <Form.Label>Director</Form.Label>
                <Form.Control
                  type='text'
                  value={director}
                  placeholder='Enter Director'
                  onChange={(event) => setDirector(event.target.value)}
                />
              </Form.Group>

              <Form.Group className='mb-3'>
                <Form.Label>Music Director</Form.Label>
                <Form.Control
                  type='text'
                  value={musicDirector}
                  placeholder='Enter Music Director'
                  onChange={(event) => setMusicDirector(event.target.value)}
                />
              </Form.Group>

              <Form.Group className='mb-3'>
                <Form.Label>Choreographer</Form.Label>
                <Form.Control
                  type='text'
                  value={choreographer}
                  placeholder='Enter Choreographer'
                  onChange={(event) => setChoreographer(event.target.value)}
                />
              </Form.Group>

              <Form.Group className='mb-3'>
                <Form.Label>Casting Director</Form.Label>
                <Form.Control
                  type='text'
                  value={castingDirector}
                  placeholder='Enter Casting Director'
                  onChange={(event) => setCastingDirector(event.target.value)}
                />
              </Form.Group>

              <Form.Group className='mb-3'>
                <Form.Label>Pianist</Form.Label>
                <Form.Control
                  type='text'
                  value={pianist}
                  placeholder='Enter Pianist'
                  onChange={(event) => setPianist(event.target.value)}
                />
              </Form.Group>

              <Form.Group className='mb-3'>
                <Form.Label>Monitor</Form.Label>
                <Form.Control
                  type='text'
                  value={monitor}
                  placeholder='Enter Audition Monitor'
                  onChange={(event) => setMonitor(event.target.value)}
                />
              </Form.Group>

              <Form.Group className='mb-3'>
                <Form.Label>Materials Used</Form.Label>
                <Form.Control
                  type='text'
                  value={materialsUsed}
                  placeholder='Enter Materials Used (Song or Monologue Name)'
                  onChange={(event) => setMaterialsUsed(event.target.value)}
                />
              </Form.Group>

              <Form.Group className='mb-3'>
                <Form.Label>Callback Received?</Form.Label>
                <Form.Check
                  type='switch'
                  label='No/Yes'
                  id='callback-switch'
                  value={callback}
                  onChange={(event) => setCallback(event.target.value)}
                />
              </Form.Group>

              <Form.Group className='mb-3'>
                <Form.Label>Job Booked?</Form.Label>
                <Form.Check
                  type='switch'
                  label='No/Yes'
                  id='booked-switch'
                  value={booked}
                  onChange={(event) => setBooked(event.target.value)}
                />
              </Form.Group>

              <Form.Group className='mb-3'>
                <Form.Label>Notes</Form.Label>
                <Form.Control
                  as='textarea'
                  rows={4}
                  value={notes}
                  placeholder='Notes'
                  onChange={(event) => setNotes(event.target.value)}
                />
              </Form.Group>
            </Form>
            <Button variant='primary' type='submit' onClick={addNewAudition}>
              Submit
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default AuditionForm;
