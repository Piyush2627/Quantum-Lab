import * as React from "react";

interface Props {
  header: string;
  contain: any;
  buttontrue?: boolean;
  imageUrl?: string;
  centered?: boolean;
}

export default function BasicCard({
  header,
  contain,
  buttontrue,
  imageUrl,
  centered,
}: Props) {
  const [isCenter, setiscenter] = React.useState(centered);
  const [needButtons, setneedbuttons] = React.useState(buttontrue);
  setneedbuttons;
  setiscenter;
  return (
    <>
      <div className="max-w-xs w-full bg-white border  border-gray-200 rounded-lg shadow ">
        <a href="#">
          <img className="rounded-t-lg " src={imageUrl} alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5
              className={
                isCenter
                  ? "mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center "
                  : "mb-2 text-2xl font-bold tracking-tight text-gray-900 "
              }
            >
              {header}
            </h5>
          </a>
          <p
            className={
              isCenter
                ? "mb-3 font-normal text-gray-700 text-center"
                : "mb-3 font-normal text-gray-700 "
            }
          >
            {contain}
          </p>
          <div className={centered ? "text-center" : ""}>
            {needButtons && (
              <a className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
