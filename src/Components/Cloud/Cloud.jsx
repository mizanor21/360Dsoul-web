import "../../Styles/Cloud/Cloud.css";

const Cloud = () => {
  return (
    <div>
      <div className="">
        <div className="flex flex-col  bg-white border rounded shadow-sm md:justify-center lg:flex-row">
          <div className="flex flex-col cloud-1 justify-between p-5 border-b sm:p-10 lg:border-b-0 lg:border-r lg:w-1/2">
            <div className="">
              <p className="mb-2 text-xl  lg:text-3xl tracking-wide text-white font-light flex justify-end">
                360d Soul Cloud
              </p>
              <h5 className=" mb-6 text-2xl  lg:text-5xl text-white font-extrabold leading-none sm:text-4xl flex justify-end">
                Applications
              </h5>
              <div className="flex justify-end">
                <p className="mb-6 text-base md:text-lg sm:mb-8 lg:max-w-[70%] text-justify text-white">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae. explicabo.
                </p>
              </div>
            </div>
            <div className="flex  justify-end">
              <button
                type="submit"
                className="inline-flex  justify-end h-12 px-6 pt-3 mr-6 font-medium tracking-wide bg-white max-w-40 text-black transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                Get started
              </button>
            </div>
          </div>
          <div className="flex flex-col cloud-2 justify-between p-5 border-b sm:p-10 lg:border-b-0 lg:border-r lg:w-1/2 ">
            <div className="">
              <p className="mb-2 text-xl lg:text-3xl  tracking-wide text-white font-light">
                360d Soul Cloud
              </p>
              <h5 className=" mb-6 text-2xl lg:text-5xl text-white font-extrabold leading-none sm:text-4xl">
                Applications
              </h5>
              <p className="mb-6 text-justify text-base md:text-lg sm:mb-8  lg:max-w-[70%] text-white">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae. explicabo.
              </p>
            </div>
            <div className="">
              <button
                type="submit"
                className="inline-flex  h-12 px-6 pt-3 mr-6 font-medium tracking-wide bg-white max-w-40 text-black transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cloud;
