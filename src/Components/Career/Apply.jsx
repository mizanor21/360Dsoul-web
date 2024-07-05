const Apply = () => {
  return (
    <div className="apply">
      <div className="px-4 py-16  container mx-auto md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col bg-white border rounded shadow-sm md:justify-center lg:flex-row">
          <div className="flex flex-col justify-between p-5 border-b sm:p-10 lg:border-b-0 lg:border-r lg:w-1/2">
            <div>
              <p className="mb-2 text-xs font-semibold tracking-wide uppercase">
                New History
              </p>
              <h5 className="max-w-md mb-6 text-3xl font-extrabold leading-none sm:text-4xl">
                The quick, brown fox jumps over a lazy dog
              </h5>
              <p className="mb-6 text-base text-gray-700 md:text-lg sm:mb-8">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae. explicabo.
              </p>
            </div>
            <div className="flex items-center">
              <button
                type="submit"
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                Please Apply Here
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-between p-5 sm:p-10 lg:w-1/2">
            <div>
              <p className="mb-2 text-xs font-semibold tracking-wide uppercase">
                New History
              </p>
              <h5 className="max-w-md mb-6 text-3xl font-extrabold leading-none sm:text-4xl">
                The first mate and his Skipper too will do
              </h5>
              <p className="mb-6 text-base text-gray-700 md:text-lg sm:mb-8">
                Disrupt inspire and think tank, social entrepreneur but
                preliminary thinking think tank compelling.
              </p>
            </div>
            <div className="flex items-center">
              <button
                type="submit"
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                Please Apply Here
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apply;
