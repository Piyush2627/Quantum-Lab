import { useState } from "react";
import EventCard from "../../common/EventCard/EventCard";
import EventModel from "../../common/EventModel/EventModel";

function EventHandling() {
  const [isEventModelOpen, setIsEventModelOpen] = useState(false);

  const handleEventModelClick = () => {
    setIsEventModelOpen(!isEventModelOpen);
  };

  return (
    <div className=" p-5">
      <div className=" text-center text-3xl font-semibold">
        Event handling Admin Section
      </div>
      <div className="my-3 text-2xl">Up-Comming Event</div>
      <EventCard shouButtonEvent={handleEventModelClick} />
      {isEventModelOpen && (
        <EventModel
          EventModelCloseFunction={handleEventModelClick}
          EventState={isEventModelOpen}
        />
      )}
    </div>
  );
}

export default EventHandling;
