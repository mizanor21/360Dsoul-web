const AnalyticsMethodology = () => {
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-normal leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            Methodology
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </p>
        </div>
        <div className="grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2">
          <div className="duration-300 transform bg-white border-l-4 border-deep-purple-accent-400 hover:-translate-y-2">
            <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
              <h6 className="mb-2 font-semibold leading-5">
                Assessment and Planning
              </h6>
              <p className="text-sm text-gray-900">
                Conduct thorough assessments and planning to understand business
                objectives, challenges, and data requirements, defining project
                scope and goals.
              </p>
            </div>
          </div>
          <div className="duration-300 transform bg-white border-l-4 border-deep-purple-accent-400 hover:-translate-y-2">
            <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
              <h6 className="mb-2 font-semibold leading-5">Implementation</h6>
              <p className="text-sm text-gray-900">
                Integrate data, develop solutions, and conduct rigorous testing
                to ensure accuracy, consistency, and performance of the BI
                solutions.
              </p>
            </div>
          </div>
          <div className="duration-300 transform bg-white border-l-4 border-deep-purple-accent-400 hover:-translate-y-2">
            <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
              <h6 className="mb-2 font-semibold leading-5">Deployment</h6>
              <p className="text-sm text-gray-900">
                Roll out BI solutions with comprehensive user training,
                configure systems in the production environment, and integrate
                with existing workflows.
              </p>
            </div>
          </div>
          <div className="duration-300 transform bg-white border-l-4 border-deep-purple-accent-400 hover:-translate-y-2">
            <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
              <h6 className="mb-2 font-semibold leading-5">
                Support and Maintenance
              </h6>
              <p className="text-sm text-gray-900">
                Provide ongoing support with regular updates, performance
                optimization, troubleshooting, and continuous monitoring to
                maintain efficiency and relevance of BI solutions.
              </p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <a
            href="/"
            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white bg-blue-400 transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsMethodology;
