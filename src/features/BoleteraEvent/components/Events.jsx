// COMPONENT FOR SHOW THE LIST OF EVENTS(SHOWS IN TICKETMASTER)

import { faBomb, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import useEventsData from "../../../hooks/UseEventsData";
import EventItem from "./EventItem";

const Events = ({ searchTerm }) => {
  // EVENTS COMPONENT
  const { events, loading, error } = useEventsData();

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

  // RENDE CONDICIONAL
  if (error) {
    return (
      <div>
        <FontAwesomeIcon icon={faBomb} style={{ color: "#ff0000" }} />A ocurrido
        un error: {error.message}
      </div>
    );
  }

  if (loading) {
    return (
      <div>
        <FontAwesomeIcon icon={faSpinner} spin />
      </div>
    );
  }

  return (
    <div>
      EVENTOS
      {renderEvents()}
    </div>
  );
};

export default Events;
