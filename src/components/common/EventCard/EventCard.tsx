interface EventCardProps {
  shouButtonEvent: () => void;
}
function EventCard({ shouButtonEvent }: EventCardProps) {
  return (
    <div className="max-w-xs w-full bg-white border  border-gray-200 rounded-lg shadow  relative">
      <div className="p-5">
        <div className="flex justify-between">
          <div className=" text-xl font-bold">Event Name</div>
          <div className="w-20 border rounded-md absolute right-5">
            <div className="w-full h-2 bg-violet-600 rounded-t z-10"></div>
            <div className="p-2 w-full text-center">12 Nov</div>
          </div>
        </div>
        <div className="my-2">Event decreption</div>
        <hr />
        <div className="text-sm my-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla itaque
          laudantium cum.
        </div>
        <button
          className="bg-violet-600 text-white py-2 rounded-md px-4"
          onClick={shouButtonEvent}
        >
          {" "}
          Show Details
        </button>
      </div>
    </div>
  );
}

export default EventCard;
