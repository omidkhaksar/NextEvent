import {getAllEvents} from '../../dummy-data'
import EventList from '../../src/components/EventList'
import EventSearch from '../../src/components/EventSearch'
import { useRouter } from 'next/router';
const EventsPage = () => {
  const router = useRouter()
  const ALLEvents = getAllEvents();
  function findEventsHandler(year,mounth) {
    const fullPath = `/events/${year}/${mounth}`
    router.push(fullPath)
  }
  return (
    <div>
      <EventSearch  onSearch={findEventsHandler}/>
      <EventList events={ALLEvents} />
    </div>
  );
};
  
  export default EventsPage;
  