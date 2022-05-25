import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../src/components/EventList";
import EventSearch from "../../src/components/EventSearch";
import { useRouter } from "next/router";

const SlugEventPage = () => {
  const router = useRouter();
  const filterDate = router.query.slug;
  if (!filterDate) {
    return <p className="center">Loading...</p>;
  }
  const filteredYear = filterDate[0];
  const filteredMounth = filterDate[1];
  const numYear = +filteredYear;
  const numMounth = +filteredMounth;

  if (
    isNaN(numYear) ||
    isNaN(numMounth) ||
    numYear > 2030 ||
    numMounth > 12 ||
    numYear < 2020 ||
    numMounth < 1
  ) {
    return (
      <div>
        <EventSearch onSearch={findEventsHandler} />
        <p className="center">invalid date</p>
      </div>
    );
  }
  const FilteredEvents = getFilteredEvents({
    year: numYear,
    month: numMounth,
  });
  if (!FilteredEvents || FilteredEvents.length === 0) {
    return (
      <div>
        <EventSearch onSearch={findEventsHandler} />
        <p className="center">nothing found for this Date</p>
      </div>
    );
  }
  function findEventsHandler(year, mounth) {
    const fullPath = `/events/${year}/${mounth}`;
    router.push(fullPath);
  }
  return (
    <div>
      <EventSearch onSearch={findEventsHandler} />
      <EventList events={FilteredEvents} />
    </div>
  );
};
export default SlugEventPage;
