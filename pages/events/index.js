import { getAllEvents } from '../../helpers/api-util'
import EventList from '../../src/components/EventList'
import EventSearch from '../../src/components/EventSearch'
import { useRouter } from 'next/router';
const EventsPage = (props) => {
  
  const router = useRouter()
  const ALLEvents = props.events;
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
export async function getStaticProps(){
  const allEvent = await getAllEvents();
  return {
    props : {
      events : allEvent
    },
    revalidate : 60
  }
}
  
  export default EventsPage;
  