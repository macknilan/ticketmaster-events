// COMPONENT FOR SHOW THE LIST OF EVENTS(SHOWS IN TICKETMASTER)

import { useState } from "react";
import eventJson from "../../../services/events.json";
import EventItem from "./EventItem";

const Events = ({ searchTerm }) => {
  // EVENTS COMPONENT
  const [data, setData] = useState(eventJson);

  // _embedded: { events } - THIS PART IS SAYING "GO INTO THE _embedded PROPERTY OF THE DATA OBJECT, AND THEN GO INTO ITS EVENTS PROPERTY".
  // HOLDS THE VALUE OF ``
  // const events = data._embedded.events;
  const {
    _embedded: { events },
  } = data;

  const handleOnEventItemClick = (id) => {
    // FUNCTION TO HANDLE THE EVENT ITEM CLICK
    console.log("clicked handleOnEventItemClick -> ", id);
  };

  const renderEvents = () => {
    // FUNCTION FOR FILTER THE EVENTS BY SEARCH TERM AND RENDER THE EVENTS
    let eventsFiltered = events;
    if (searchTerm.length > 0) {
      eventsFiltered = eventsFiltered.filter((item) =>
        item.name.toLowerCase().includes(searchTerm)
      );
    }

    return eventsFiltered.map((eventItem) => (
      <EventItem
        key={`event-item-${eventItem.id}`}
        info={eventItem.info}
        name={eventItem.name}
        image={eventItem.images[0].url}
        onEventClick={handleOnEventItemClick}
        id={eventItem.id}
      />
    ));
  };

  return (
    <div>
      EVENTOS
      {renderEvents()}
    </div>
  );
};

export default Events;
