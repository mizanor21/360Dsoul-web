const AnalyticsCaseStudy = () => {
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-normal leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            Case Studies
          </h2>
        </div>
        <div className="grid gap-8 row-gap-12 lg:grid-cols-2">
          <div className="max-w-md sm:mx-auto sm:text-center">
            <div className=" w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24"></div>
            <h6 className="mb-3 text-2xl font-medium leading-5 text-left">
              Industry-specific Solutions
            </h6>
            <p className="mb-3 text-sm text-gray-900 text-justify">
              Our expertise spans various industries, enabling us to deliver
              tailored BI solutions that address specific challenges and
              opportunities. In retail and e-commerce, we help businesses
              optimize inventory management, enhance customer segmentation, and
              improve sales forecasting. For healthcare organizations, our
              solutions support patient care analytics, operational efficiency,
              and compliance with regulatory requirements. Financial services
              clients benefit from risk analysis, fraud detection, and
              performance monitoring, while manufacturing companies gain
              insights into supply chain optimization, production efficiency,
              and quality control.
            </p>
            <a
              href="/"
              aria-label=""
              className="text-white bg-blue-400 p-3 rounded-md font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </a>
          </div>
          <div className="max-w-md sm:mx-auto sm:text-center">
            <div className=" w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24"></div>
            <h6 className="mb-3 text-2xl font-medium leading-5 text-left">
              Client Success Stories
            </h6>
            <p className="mb-5 text-sm text-gray-900 text-justify">
              Our client success stories highlight the tangible benefits
              achieved through our data analysis and BI services. Each case
              study showcases the unique challenges faced by the client, the
              tailored solutions we provided, and the measurable results
              obtained. For example, a retail client might have struggled with
              inventory inaccuracies and achieved a 20% reduction in stockouts
              through our data integration and visualization solutions. Another
              success story could involve a healthcare provider improving
              patient outcomes by leveraging predictive analytics to identify
              high-risk patients and implement preventive measures.
            </p>
            <a
              href="/"
              aria-label=""
              className="text-white  bg-blue-400 p-3 rounded-md font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsCaseStudy;
