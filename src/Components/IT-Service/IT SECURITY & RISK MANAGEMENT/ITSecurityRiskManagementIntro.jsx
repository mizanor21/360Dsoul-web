const ITSecurityRiskManagementIntro = () => {
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2 flex items-center">
          <div className="lg:pr-10">
            <a
              href="/"
              aria-label="Go Home"
              title="Logo"
              className="inline-block mb-5"
            ></a>
            <h5 className="mb-4 text-4xl font-normal leading-none">
              Introduction
            </h5>
            <p className="mb-6 text-gray-900">
              In todays digital landscape, cyber threats are a constant concern.
              Our IT Security & Risk Management services provide a comprehensive
              solution, from vulnerability assessments to incident response
              planning. We offer experienced professionals, proven success, and
              flexible options to safeguard your data and ensure business
              continuity. Contact us to build a robust security posture and
              achieve peace of mind.
            </p>
          </div>
          <div>
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

export default ITSecurityRiskManagementIntro;
