import React from "react";
import EventItem from '../components/EventItem'
import classes from "../../styles/event-list.module.css"


const EventList = (props) => {
  const {events} = props;
  const RenderedList = events.map((event) => {
    return(<EventItem key={event.id} event={event} />)
    
  });
  return(
      <ul className={classes.list}>
          {RenderedList}
      </ul>
  );
};

export default EventList;
