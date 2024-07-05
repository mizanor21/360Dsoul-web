import AboutBanner from "../../Components/About/AboutBanner";
import AboutPlatform from "../../Components/About/AboutPlatform";
import AboutWork from "../../Components/About/AboutWork";
import VisionMissionValues from "../../Components/About/VisionMissionValues";

const AboutPage = () => {
  return (
    <div className="">
      <AboutBanner></AboutBanner>
      <AboutPlatform></AboutPlatform>
      <VisionMissionValues></VisionMissionValues>
      <AboutWork></AboutWork>
    </div>
  );
};

export default AboutPage;
