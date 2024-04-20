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
      <div className="my-3 text-2xl">Add Event this Section</div>
      <div>
        <form>
          <div className="mb-3">
            <label className="form-label">Event Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Event Name"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Event Date</label>
            <input
              type="date"
              className="form-control"
              placeholder="Enter Event Date"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Event Time</label>
            <input
              type="time"
              className="form-control"
              placeholder="Enter Event Time"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Venue</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Venue"
            />
          </div>
          <div>make this event</div>
        </form>
      </div>
    </div>
  );
}

export default EventHandling;
