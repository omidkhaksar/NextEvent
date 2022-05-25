import React from "react";
import Image from 'next/image'
import classes from "../../styles/event-item.module.css"
import Link from 'next/Link'
import Button from "./button";

const EventItem = (props) => {
  const {title,image,date,location,id} = props.event;
  const humanReadable = new Date(date).toLocaleString('en-us',{
      day:'numeric',
      month:'long',
      year:'numeric'
  });
  const formattedAddress = location.replace(', ','\n')
  return(
      <li className={classes.item}>
          <Image src={'/'+ image} alt={title} width="450" height="240" />
          <div className={classes.content}>
              <h2>{title}</h2>
              <div>
                  <time className={classes.date}>{humanReadable}</time>
              </div>
              <div><address className={classes.address}>{formattedAddress}</address></div>
              <div className={classes.actions}>
                  <Button  link={`/events/${id}`} >Explore Event </Button>
              </div>
          </div>
      </li>

  );
};

export default EventItem;
