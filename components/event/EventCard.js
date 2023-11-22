import PropTypes from 'prop-types';
import React from 'react';
import { Card } from 'react-bootstrap';

const EventCard = ({
  title, //
  description,
  date,
  time,
}) => (
  <Card className="text-center">
    <Card.Header>{title}</Card.Header>
    <Card.Body>
      <Card.Title>{description}</Card.Title>
      {/* <Card.Text>{numberOfPlayers} players needed</Card.Text> */}
    </Card.Body>
    <Card.Footer className="text-muted">Date: {date} {time}</Card.Footer>
  </Card>
);

EventCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  time: PropTypes.number.isRequired,
};

export default EventCard;
