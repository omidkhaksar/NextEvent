import { useRouter } from "next/router";
import { Fragment } from "react";
import { getEventById } from "../../dummy-data";
import EventSummary from "../../src/components/event-detail/event-summary";
import EventLogistics from "../../src/components/event-detail/event-logistics";
import EventContent from "../../src/components/event-detail/event-content";

const SingleEventPage = () => {
  const router = useRouter();
  const eventId = router.query.event_id;
  const event = getEventById(eventId);
  if (!event) {
    return <p>no event found</p>;
  }
  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics event={event} />
      <EventContent>{event.description}</EventContent>
    </Fragment>
  );
};

export default SingleEventPage;
