import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { createEvent, updateEvent } from '../../utils/data/eventData';
import { getGames } from '../../utils/data/gameData';

const initialState = {
  gameId: 0,
  description: '',
  date: '',
  time: '',
};

const EventForm = ({ user, initialEvent }) => {
  const router = useRouter();
  const [games, setGames] = useState([]);
  const [currentEvent, setCurrentEvent] = useState(initialEvent || initialState);

  useEffect(() => {
    getGames().then(setGames);
  }, []);

  useEffect(() => {
    // Update the form fields when the initialEvent prop changes
    if (initialEvent) {
      setCurrentEvent(initialEvent);
    }
  }, [initialEvent]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentEvent((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    // Prevent form from being submitted
    e.preventDefault();

    const event = {
      gameId: currentEvent.game ? Number(currentEvent.game.id) : Number(currentEvent.gameId),
      description: currentEvent.description,
      date: currentEvent.date,
      time: currentEvent.time,
      userId: user.id,
    };

    // Send POST request to your API
    if (initialEvent) {
      updateEvent(event, initialEvent.id).then(() => router.push('/events/home'));
    } else {
      createEvent(event).then(() => router.push('/events/home'));
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Game</Form.Label>
          <Form.Select
            aria-label="Class"
            name="gameId"
            onChange={handleChange}
            className="mb-3"
            value={currentEvent.game ? Number(currentEvent.game.id) : Number(currentEvent.gameId)}
            required
          >
            <option value="">Select a Game</option>
            {
              games.map((game) => (
                <option
                  key={game.id}
                  value={game.id}
                >
                  {game.title}
                </option>
              ))
            }
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control name="description" required value={currentEvent.description} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Date</Form.Label>
          <Form.Control placeholder="yyyy-mm-dd" name="date" required value={currentEvent.date} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Time</Form.Label>
          <Form.Control placeholder="00:00:00" name="time" required value={currentEvent.time} onChange={handleChange} />
        </Form.Group>

        <Button variant="primary" type="submit">
          {currentEvent.game ? 'Save' : 'Create'}
        </Button>
      </Form>
    </>
  );
};

EventForm.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  initialEvent: PropTypes.object,
};

EventForm.defaultProps = {
  initialEvent: null,
};

export default EventForm;
