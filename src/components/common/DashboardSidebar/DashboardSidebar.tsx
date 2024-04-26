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
    name: "Attedence",
    link: "/dash/attedence",
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
      </div>
    </>
  );
}

export default DashboardSidebar;
