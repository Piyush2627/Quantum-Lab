 import BasicCard from "../../common/BasicCard/BasicCard";
import StudentPagenationTable from "../../common/studentPagenationTable/StudentPagenationTable";
import data from "../../../mock/StudentData.json";

function Dashboard() {
  return (
    <>
      <div className=" flex justify-center w-full">
        <div className="mx-6 w-full">
          <div className="container m-auto flex justify-center items-center">
            <div className=" text-center">
              <div className="mt-12 sm:text-8xl text-6xl ">Quantum Lab</div>
              <div className="sm:text-4xl  text-2xl"> Student Management</div>
              <div className="text-xl sm:text-lg text-gray-400">
                Efficiently Manage Student Activities and Resources
              </div>
              <div></div>
            </div>
          </div>

          <div className="lg:flex lg:space-x-4 sm:justify-center mt-8 block text-center ">
            <BasicCard
              header="Heading"
              contain="lorem ipsum dolor sit amet, consectetur adipis text et dolor sit amet, consectetur adipis consequ "
              centered
              buttontrue
            />{" "}
            <BasicCard
              header="Heading"
              contain="lorem ipsum dolor sit amet, consectetur adipis text et dolor sit amet, consectetur adipis consequ "
              centered
              buttontrue
            />
            <BasicCard
              header="Heading"
              contain="lorem ipsum dolor sit amet, consectetur adipis text et dolor sit amet, consectetur adipis consequ "
              centered
              buttontrue
            />
          </div>

          <div className="container m-auto text-center mt-16">
            <StudentPagenationTable data={data} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
