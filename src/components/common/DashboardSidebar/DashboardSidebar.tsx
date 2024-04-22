import ListCard from "../ListCard.tsx/LIstCard";
const linkdata = [
  {
    name: "Dashboard",
    link: "/dash/dashboard",
  },
  {
    name: "Add Student",
    link: "/dash/addstudent",
  },
  {
    name: "Attedence Admin",
    link: "/dash/attedence",
  },
  {
    name: "Student Atedence",
    link: "/dash/addteacher",
  },
  {
    name: "Make Marksheet",
    link: "/dash/makesheet",
  },
  {
    name: "Event Hendling",
    link: "/dash/eventHandling",
  },
  {
    name: "Project Management",
    link: "/dash/projectManagement",
  },
];
function DashboardSidebar() {
  return (
    <>
      <div className="text-center ">
        {" "}
        <div className="mb-4">
          <ListCard
            listHeading="Student Section"
            data={linkdata}
            emailrequired={false}
            amountRequired={false}
          />
        </div>
        <div className=" font-medium text-xl">Have a nice day</div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, similique?
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
        cupiditate.
      </div>
    </>
  );
}

export default DashboardSidebar;
