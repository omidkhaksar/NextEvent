import {getFeaturedEvents} from '../dummy-data'
import EventList from '../src/components/EventList'

const HomePage = () => {
  const FeaturedEvents = getFeaturedEvents();
  return (
    <div>
      <EventList events={FeaturedEvents} />
    </div>
  );
};

export default HomePage;
