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
      <div className="bg-white min-h-[200px] flex items-center justify-center">
        <button className="px-6 py-2 font-medium bg-indigo-500 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
          Hover me
        </button>
      </div>
    </div>
  );
}

export default EventHandling;
