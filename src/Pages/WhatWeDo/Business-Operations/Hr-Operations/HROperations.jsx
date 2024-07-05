import HROperationsBanner from "./HROperationsBanner";

const HROperations = () => {
  return (
    <div>
      <HROperationsBanner></HROperationsBanner>
      <div className=" container mx-auto">
        <div className="">
          <div className="grid grid-cols-2 gap-5 row-gap-5 sm:grid-cols-3 lg:grid-cols-5 text-white">
            <div className="text-center bg-primary py-10 rounded-md">
              <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
                <svg
                  className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
                HRIS
              </h6>
            </div>
            <div className="text-center bg-secondary py-10 rounded-md">
              <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
                <svg
                  className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
                leave & Attendance
              </h6>
            </div>
            <div className="text-center bg-info py-10 rounded-md">
              <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
                <svg
                  className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
                Payroll & Benefits
              </h6>
            </div>
            <div className="text-center bg-success py-10 rounded-md">
              <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
                <svg
                  className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
                KPI & PMS
              </h6>
            </div>
            <div className="text-center bg-primary py-10 rounded-md">
              <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
                <svg
                  className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
                Employee Relations
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HROperations;
