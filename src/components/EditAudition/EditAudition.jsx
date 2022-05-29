import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { Button, Form, Card, Container } from 'react-bootstrap';
import '../AuditionForm/AuditionForm.css';

function EditAudition() {
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();
  const auditionId = params.id;
  const editAudition = useSelector((store) => store.editAuditionReducer);

  useEffect(() => {
    dispatch({
      type: 'FETCH_AUDITION_TO_UPDATE',
      payload: auditionId,
    });
  }, [auditionId]);

  const handleAuditionEdit = () => {
    dispatch({
      type: 'UPDATE_AUDITION',
      payload: editAudition,
    });
    history.push('/details');
  };

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
  const [auditionComplete, setAuditionComplete] = useState(false);
  const [callback, setCallback] = useState(false);
  const [booked, setBooked] = useState(false);
  const [notes, setNotes] = useState([]);

  const onAuditionCompleteSwitchAction = () => {
    setAuditionComplete(!auditionComplete);
    dispatch({
      type: 'EDIT_AUDITION_COMPLETE',
      payload: auditionComplete,
    });
  };

  const onCallbackSwitchAction = () => {
    setCallback(!callback);
    dispatch({
      type: 'EDIT_CALLBACK',
      payload: callback,
    });
  };

  const onBookedSwitchAction = () => {
    setBooked(!booked);
    dispatch({
      type: 'EDIT_BOOKED',
      payload: booked,
    });
  };

  return (
    <>
      <Container className='form-card-container'>
        <Card style={{ width: '60rem' }} className='form-card p-3 mb-2 bg-secondary text-white'>
          <Card.Body>
            <Card.Title style={{ color: '#222', fontSize: '2rem' }}>Update the Audition</Card.Title>
            <Form>
              <Form.Group className='mb-3 mt-4'>
                <Form.Label style={{ fontSize: '1.25rem' }}>Theatre</Form.Label>
                <Form.Control
                  type='text'
                  value={editAudition.theatre}
                  placeholder='Enter Theatre Name'
                  onChange={(e) => {
                    dispatch({
                      type: 'EDIT_THEATRE',
                      payload: e.target.value,
                    });
                  }}
                />
              </Form.Group>

              <Form.Group className='mb-3'>
                <Form.Label style={{ fontSize: '1.25rem' }}>Location</Form.Label>
                <Form.Control
                  type='text'
                  value={editAudition.location}
                  placeholder='Enter Location'
                  onChange={(e) => {
                    dispatch({
                      type: 'EDIT_LOCATION',
                      payload: e.target.value,
                    });
                  }}
                />
              </Form.Group>

              <Form.Group className='mb-3'>
                <Form.Label style={{ fontSize: '1.25rem' }}>Show</Form.Label>
                <Form.Control
                  type='text'
                  value={editAudition.show}
                  placeholder='Enter Show'
                  onChange={(e) => {
                    dispatch({
                      type: 'EDIT_SHOW',
                      payload: e.target.value,
                    });
                  }}
                />
              </Form.Group>

              <Form.Group className='mb-3'>
                <Form.Label style={{ fontSize: '1.25rem' }}>Date</Form.Label>
                <Form.Control
                  type='datetime-local'
                  value={editAudition.date}
                  placeholder='Enter Date of Audition'
                  onChange={(e) => {
                    dispatch({
                      type: 'EDIT_DATE',
                      payload: e.target.value,
                    });
                  }}
                />
              </Form.Group>

              <Form.Group className='mb-3'>
                <Form.Label style={{ fontSize: '1.25rem' }}>Director</Form.Label>
                <Form.Control
                  type='text'
                  value={editAudition.director}
                  placeholder='Enter Director'
                  onChange={(e) => {
                    dispatch({
                      type: 'EDIT_DIRECTOR',
                      payload: e.target.value,
                    });
                  }}
                />
              </Form.Group>

              <Form.Group className='mb-3'>
                <Form.Label style={{ fontSize: '1.25rem' }}>Music Director</Form.Label>
                <Form.Control
                  type='text'
                  value={editAudition.music_director}
                  placeholder='Enter Music Director'
                  onChange={(e) => {
                    dispatch({
                      type: 'EDIT_MUSIC_DIRECTOR',
                      payload: e.target.value,
                    });
                  }}
                />
              </Form.Group>

              <Form.Group className='mb-3'>
                <Form.Label style={{ fontSize: '1.25rem' }}>Choreographer</Form.Label>
                <Form.Control
                  type='text'
                  value={editAudition.choreographer}
                  placeholder='Enter Choreographer'
                  onChange={(e) => {
                    dispatch({
                      type: 'EDIT_CHOREOGRAPHER',
                      payload: e.target.value,
                    });
                  }}
                />
              </Form.Group>

              <Form.Group className='mb-3'>
                <Form.Label style={{ fontSize: '1.25rem' }}>Casting Director</Form.Label>
                <Form.Control
                  type='text'
                  value={editAudition.casting_director}
                  placeholder='Enter Casting Director'
                  onChange={(e) => {
                    dispatch({
                      type: 'EDIT_CASTING_DIRECTOR',
                      payload: e.target.value,
                    });
                  }}
                />
              </Form.Group>

              <Form.Group className='mb-3'>
                <Form.Label style={{ fontSize: '1.25rem' }}>Pianist</Form.Label>
                <Form.Control
                  type='text'
                  value={editAudition.pianist}
                  placeholder='Enter Pianist'
                  onChange={(e) => {
                    dispatch({
                      type: 'EDIT_PIANIST',
                      payload: e.target.value,
                    });
                  }}
                />
              </Form.Group>

              <Form.Group className='mb-3'>
                <Form.Label style={{ fontSize: '1.25rem' }}>Monitor</Form.Label>
                <Form.Control
                  type='text'
                  value={editAudition.monitor}
                  placeholder='Enter Audition Monitor'
                  onChange={(e) => {
                    dispatch({
                      type: 'EDIT_MONITOR',
                      payload: e.target.value,
                    });
                  }}
                />
              </Form.Group>

              <Form.Group className='mb-3'>
                <Form.Label style={{ fontSize: '1.25rem' }}>Materials Used</Form.Label>
                <Form.Control
                  type='text'
                  value={editAudition.materials_used}
                  placeholder='Enter Materials Used (Song or Monologue Name)'
                  onChange={(e) => {
                    dispatch({
                      type: 'EDIT_MATERIALS_USED',
                      payload: e.target.value,
                    });
                  }}
                />
              </Form.Group>

              <Form.Group className='mb-3'>
                <Form.Label style={{ fontSize: '1.25rem' }}>Audition Complete?</Form.Label>
                <Form.Check
                  type='switch'
                  label='No/Yes'
                  id='audition-complete-switch'
                  checked={editAudition.audition_complete}
                  onChange={onAuditionCompleteSwitchAction}
                />
              </Form.Group>

              <Form.Group className='mb-3'>
                <Form.Label style={{ fontSize: '1.25rem' }}>Callback Received?</Form.Label>
                <Form.Check
                  type='switch'
                  label='No/Yes'
                  id='callback-switch'
                  checked={editAudition.callback}
                  onChange={onCallbackSwitchAction}
                />
              </Form.Group>

              <Form.Group className='mb-3'>
                <Form.Label style={{ fontSize: '1.25rem' }}>Job Booked?</Form.Label>
                <Form.Check
                  type='switch'
                  label='No/Yes'
                  id='booked-switch'
                  checked={editAudition.booked}
                  onChange={onBookedSwitchAction}
                />
              </Form.Group>

              <Form.Group className='mb-3'>
                <Form.Label style={{ fontSize: '1.25rem' }}>Notes</Form.Label>
                <Form.Control
                  as='textarea'
                  rows={4}
                  value={editAudition.notes}
                  placeholder='Notes'
                  onChange={(e) => {
                    dispatch({
                      type: 'EDIT_NOTES',
                      payload: e.target.value,
                    });
                  }}
                />
              </Form.Group>
            </Form>
            <Button variant='primary' type='submit' onClick={handleAuditionEdit}>
              Update Audition
            </Button>
            <Button variant='primary' type='submit' onClick={() => history.push('/details')}>
              Cancel
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default EditAudition;
