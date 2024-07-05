const FeaturedCards = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  gap-4 mt-20">
        {/* card 1  */}
        <div className="">
          <div className=" border-b-4 border-blue-400 max-w-md shadow-xl rounded-sm min-h-[400px]">
            <div className="card-body">
              <h2 className="text-4xl font-semibold">360d Soul Limited</h2>
              <p className="font-light border text-xl mt-4">
                A premier integrated space and terrestrial network operator
                seamlessly connects applications, data, and partner ecosystems.
              </p>
            </div>
            <figure className="bg-[#f4f0ef] justify-content: flex-end ml-8 mr-8">
              <img
                src="https://www.oracle.com/node/oce/storyhub/prod/api/v1.1/assets/CONTE16DAFEFED884D11A0BB995810164932/native/rh09-intelsat.jpg"
                alt="img 1"
                className="max-w-52 p-4"
              />
            </figure>
          </div>
        </div>
        <div className="">
          <div className=" border-b-4 border-blue-400 max-w-md shadow-xl rounded-sm min-h-[400px]">
            <div className="card-body">
              <h2 className="text-4xl font-semibold">360d Soul Limited</h2>
              <p className="font-light border text-xl mt-4">
                A premier integrated space and terrestrial network operator
                seamlessly connects applications, data, and partner ecosystems.
              </p>
            </div>
            <figure className="bg-[#f4f0ef] justify-content: flex-end ml-8 mr-8">
              <img
                src="https://www.oracle.com/node/oce/storyhub/prod/api/v1.1/assets/CONTE16DAFEFED884D11A0BB995810164932/native/rh09-intelsat.jpg"
                alt="img 1"
                className="max-w-52 p-4"
              />
            </figure>
          </div>
        </div>
        <div className="">
          <div className=" border-b-4 border-blue-400 max-w-md shadow-xl rounded-sm min-h-[400px]">
            <div className="card-body">
              <h2 className="text-4xl font-semibold">360d Soul Limited</h2>
              <p className="font-light border text-xl mt-4">
                A premier integrated space and terrestrial network operator
                seamlessly connects applications, data, and partner ecosystems.
              </p>
            </div>
            <figure className="bg-[#f4f0ef] justify-content: flex-end ml-8 mr-8">
              <img
                src="https://www.oracle.com/node/oce/storyhub/prod/api/v1.1/assets/CONTE16DAFEFED884D11A0BB995810164932/native/rh09-intelsat.jpg"
                alt="img 1"
                className="max-w-52 p-4"
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCards;
