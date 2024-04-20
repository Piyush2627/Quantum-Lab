import ListCard from "../ListCard.tsx/LIstCard";
const linkdata = [
  {
    name: "Dashboard",
    link: "/",
  },
  {
    name: "Add Student",
    link: "/addstudent",
  },
  {
    name: "Attedence Admin",
    link: "/attedence",
  },
  {
    name: "Student Atedence",
    link: "/addteacher",
  },
  {
    name: "Make Marksheet",
    link: "/makesheet",
  },
  {
    name: "Event Hendling",
    link: "/eventHandling",
  },
  {
    name: "Project Management",
    link: "/projectManagement",
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
