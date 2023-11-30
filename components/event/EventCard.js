import PropTypes from 'prop-types';
import React from 'react';
import { useRouter } from 'next/router';
import { Card, Button } from 'react-bootstrap';

const EventCard = ({
  id,
  title,
  description,
  date,
  time,
}) => {
  const router = useRouter();
  return (
    <Card className="text-center">
      <Card.Header>{title}</Card.Header>
      <Card.Body>
        <Card.Title>{description}</Card.Title>
        {/* <Card.Text>{numberOfPlayers} players needed</Card.Text> */}
      </Card.Body>
      <Card.Footer className="text-muted">Date: {date} {time}</Card.Footer>
      <Button
        onClick={() => {
          router.push(`/events/edit/${id}`);
        }}
      >
        Edit Event
      </Button>
    </Card>
  );
};

EventCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  time: PropTypes.number.isRequired,
};

export default EventCard;
