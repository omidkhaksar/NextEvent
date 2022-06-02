import { Fragment } from "react";
import { getEventById } from '../../helpers/api-util'
import { getAllEvents } from '../../helpers/api-util'
import EventSummary from "../../src/components/event-detail/event-summary";
import EventLogistics from "../../src/components/event-detail/event-logistics";
import EventContent from "../../src/components/event-detail/event-content";

const SingleEventPage = (props) => {
  const {selectedEvent} = props
  if (!selectedEvent) {
    return <p>no event found</p>;
  }
  return (
    <Fragment>
      <EventSummary title={selectedEvent.title} />
      <EventLogistics event={selectedEvent} />
      <EventContent>{selectedEvent.description}</EventContent>
    </Fragment>
  );
};

export async function getStaticProps(context) {
  const eventId = context.params.event_id;

  const event = await getEventById(eventId);
  return {
    props : {
      selectedEvent : event
    },
    revalidate :30
  }
}
export async function getStaticPaths() {
  const data = await getAllEvents()
  const paths = data.map(event =>({params : {event_id: event.id}}))
  return {
      paths:paths,
      fallback: false
  }
}

export default SingleEventPage;
