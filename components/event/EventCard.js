import PropTypes from 'prop-types';
import React from 'react';
import { useRouter } from 'next/router';
import { Card, Button } from 'react-bootstrap';
import { deleteSingleEvent } from '../../utils/data/eventData';

const EventCard = ({
  id,
  title,
  description,
  date,
  time,
  onUpdate,
}) => {
  const router = useRouter();

  const deleteThisEvent = () => {
    if (window.confirm(`Delete ${title}?`)) {
      deleteSingleEvent(id).then(() => onUpdate());
    }
  };

  return (
    <Card className="text-center">
      <Card.Header>{title}</Card.Header>
      <Card.Body>
        <Card.Title>{description}</Card.Title>
        {/* <Card.Text>{numberOfPlayers} players needed</Card.Text> */}
      </Card.Body>
      <Card.Footer className="text-muted">
        Date: {date} {time}
        <Button onClick={() => { router.push(`/events/edit/${id}`); }}>
          Edit Event
        </Button>
        <Button className="btn btn-danger" onClick={deleteThisEvent}>
          Delete Event
        </Button>
      </Card.Footer>
    </Card>
  );
};

EventCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  time: PropTypes.number.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default EventCard;
