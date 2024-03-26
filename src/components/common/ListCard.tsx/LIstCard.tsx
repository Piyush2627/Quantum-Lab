import  { useState } from "react";
import { Link } from "react-router-dom";

interface ListCardProps {
  listHeading: string;
  data?: { name?: string; link?: string }[];
  emailrequired?: boolean;
  amountRequired?: boolean;
}

function ListCard({
  listHeading,
  emailrequired,
  amountRequired,
  data,
}: ListCardProps) {
  const [needEmail, setNeedEmail] = useState(emailrequired);
  const [needAmount, setNeedAmount] = useState(amountRequired);
  setNeedEmail
  setNeedAmount
  return (
    <>
      <div className="w-full  p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8">
        <div className="flex items-center justify-between mb-4">
          <h5 className="truncate text-xl font-bold leading-none text-gray-900 ">
            {listHeading}
          </h5>
        </div>
        <div className="flow-root">
          <ul
            role="list"
            className="divide-y divide-gray-200 "
          >
            {data?.map((ele) => {
              return (
                <li className="py-1 sm:py-2">
                  <div className="flex items-center">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate ">
                        {ele.link && <Link to={ele.link}>{ele.name}</Link>}
                      </p>
                      {needEmail && (
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                          email@windster.com
                        </p>
                      )}
                    </div>

                    {needAmount && (
                      <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        $320
                      </div>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default ListCard;
