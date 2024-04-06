function AttendanceCard() {
  return (
    <div>
      <div className=" w-100  border-2 py-2 px-4 rounded-lg">
        <div className=" flex justify-between  align-middle">
          <div className="">
            <p className=" text-xl">Student Card</p>
            <p className=" text-sm">Total number of lab attedance</p>
            <p className=" text-sm">Comments</p>
          </div>
          <div className=" flex gap-3">
            <div>mark button</div>
            <div>read button</div>
            <div>update button</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AttendanceCard;
