const AnalyticsServiceProvide = () => {
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-normal tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                The Services We Provide
              </h2>
            </div>
            <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
              <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
                <div className="h-full p-5 border border-l-0 rounded-r">
                  <h6 className="mb-2 font-semibold leading-5">
                    Data Collection and Integration
                  </h6>
                  <p className="text-sm text-gray-900">
                    Identifying relevant data sources, extracting data, and
                    loading it into a central system, ensuring accuracy and
                    consistency for comprehensive analysis.
                  </p>
                </div>
              </div>
              <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
                <div className="h-full p-5 border border-l-0 rounded-r">
                  <h6 className="mb-2 font-semibold leading-5">
                    Data Warehousing
                  </h6>
                  <p className="text-sm text-gray-900">
                    Creating a structured, central repository for integrated
                    data, optimized for retrieval and analysis, supporting
                    efficient querying and BI initiatives.
                  </p>
                </div>
              </div>
              <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
                <div className="h-full p-5 border border-l-0 rounded-r">
                  <h6 className="mb-2 font-semibold leading-5">
                    Data Visualization
                  </h6>
                  <p className="text-sm text-gray-900">
                    Translating complex data sets into intuitive visual
                    representations, such as interactive dashboards and custom
                    reports, for real-time monitoring and decision-making.
                  </p>
                </div>
              </div>
              <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
                <div className="h-full p-5 border border-l-0 rounded-r">
                  <h6 className="mb-2 font-semibold leading-5">
                    Business Intelligence Tools
                  </h6>
                  <p className="text-sm text-gray-900">
                    Selecting, implementing, and supporting BI platforms like
                    Tableau, Power BI, and QlikView, ensuring effective data
                    analysis, visualization, and decision-making across the
                    organization.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <img
              className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
              src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsServiceProvide;
