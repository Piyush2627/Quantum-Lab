// StudentInformation.tsx

import React from "react";

// Define the props interface for the StudentInformation component
interface StudentInfoProps {
  name: string;
  studentId: string;
  class: string;
  // Add other relevant props as needed
}

const StudentInfo: React.FC<StudentInfoProps> = ({
  name,
  studentId,
  class: className,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <h2 className="text-lg font-semibold mb-2">Student Information</h2>
      <div className="flex flex-col gap-2">
        <div className="flex items-center">
          <span className="font-semibold mr-2">Name:</span>
          <span>{name}</span>
        </div>
        <div className="flex items-center">
          <span className="font-semibold mr-2">Student ID:</span>
          <span>{studentId}</span>
        </div>
        <div className="flex items-center">
          <span className="font-semibold mr-2">Class:</span>
          <span>{className}</span>
        </div>
        {/* Add other student information fields here */}
      </div>
    </div>
  );
};

export default StudentInfo;
