import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import EventCard from '../../components/event/EventCard';
import { getEvents, joinEvent, leaveEvent } from '../../utils/data/eventData';
import { useAuth } from '../../utils/context/authContext';

function Home() {
  const router = useRouter();
  const [events, setEvents] = useState([]);
  const { user } = useAuth();

  const getAllEvents = () => {
    getEvents(user.uid).then((data) => setEvents(data));
  };

  const leaveEventFunc = (eventId, userId) => {
    leaveEvent(eventId, userId).then(getAllEvents());
  };

  const joinEventFunc = (eventId, userId) => {
    joinEvent(eventId, userId).then(getAllEvents());
  };

  useEffect(() => {
    getAllEvents();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <article className="games">
      <h1>Events</h1>
      <Button
        onClick={() => {
          router.push('/events/new');
        }}
      >
        Register New Event
      </Button>
      {events.map((event) => (
        <section key={`event--${event.id}`} className="game">
          <EventCard title={event.game.title} description={event.description} date={event.date} time={event.time} id={event.id} onUpdate={getAllEvents} />
          {event.joined ? (
            <Button variant="danger" onClick={() => leaveEventFunc(event.id, user.uid)}>
              Leave Event
            </Button>
          ) : (
            <Button variant="danger" onClick={() => joinEventFunc(event.id, user.uid)}>
              Join Event
            </Button>
          )}
        </section>
      ))}
    </article>
  );
}

export default Home;
