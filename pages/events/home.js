import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import EventCard from '../../components/event/EventCard';
import { getEvents } from '../../utils/data/eventData';

function Home() {
  const router = useRouter();
  const [events, setEvents] = useState([]);

  const getAllEvents = () => {
    getEvents().then((data) => setEvents(data));
  };

  useEffect(() => {
    getAllEvents();
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
        </section>
      ))}
    </article>
  );
}

export default Home;
