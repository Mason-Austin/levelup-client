import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import EventForm from '../../../components/event/EventForm';
import { useAuth } from '../../../utils/context/authContext';
import { getSingleEvent } from '../../../utils/data/eventData';

const EditEvent = () => {
  const router = useRouter();
  const { user } = useAuth();
  const { id } = router.query;
  const [editEvent, setEditEvent] = useState();

  useEffect(() => {
    getSingleEvent(id).then(setEditEvent);
  }, [id]);
  console.warn('before inital', editEvent);
  return (
    <div>
      <h2>Register New Event</h2>
      <EventForm user={user} initialEvent={editEvent} />
    </div>
  );
};

export default EditEvent;
