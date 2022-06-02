import {getFeaturedEvents} from '../helpers/api-util'
import EventList from '../src/components/EventList'

const HomePage = (props) => {
  return (
    <div>
      <EventList events={props.events} />
    </div>
  );
};
export async function getStaticProps(){
  const FeaturedEvents = await getFeaturedEvents();
  return {
    props : {
      events : FeaturedEvents
    },
    revalidate : 1800
  }
}

export default HomePage;
