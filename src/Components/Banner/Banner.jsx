import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "./Banner.css";

const Banner = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      centerMode={false}
      className=" services"
      containerClass="container-with-dots"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
          partialVisibilityGutter: 40,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          partialVisibilityGutter: 30,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          partialVisibilityGutter: 30,
        },
      }}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      {/* Add your actual content here */}
      <div className="banner">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col bg-white border rounded shadow-sm md:justify-center lg:flex-row">
            <div className="flex flex-col justify-between p-5 border-b sm:p-10 lg:border-b-0 lg:border-r lg:w-1/2">
              <img src="https://w0.peakpx.com/wallpaper/868/430/HD-wallpaper-social-networks-blue-background-social-networks-icons-blue-light-globe-global-networks-social-networks-blue-background-social-networks-concepts.jpg"></img>
            </div>
            <div className="flex flex-col justify-between p-5 sm:p-10 lg:w-1/2">
              <div>
                <p className="mb-2 text-xs font-semibold tracking-wide uppercase">
                  New History
                </p>
                <h5 className="max-w-md mb-6 text-xl lg:text-5xl font-extrabold leading-none sm:text-4xl uppercase">
                  Welcome To{" "}
                  <span className="text-blue-400">360d Soul Limited</span>
                </h5>
                <p className="mb-6 text-base text-gray-700 md:text-lg sm:mb-8">
                  Disrupt inspire and think tank, social entrepreneur but
                  preliminary thinking think tank compelling.
                </p>
              </div>
              <div className="flex items-center">
                <button
                  type="submit"
                  className="inline-flex items-center bg-blue-400 justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                >
                  Get started
                </button>
                <a
                  href="/"
                  aria-label=""
                  className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;
