import AnalysisBusinessBanner from "./AnalysisBusinessBanner";
import AnalyticsCaseStudy from "./AnalyticsCaseStudy";
import AnalyticsMethodology from "./AnalyticsMethodology";
import AnalyticsServiceProvide from "./AnalyticsServiceProvide";
import AnalyticsTools from "./AnalyticsTools";
import BusinessAnalysisIntro from "./BusinessAnalysisIntro";

const AnalysisBusiness = () => {
  return (
    <div>
      <AnalysisBusinessBanner></AnalysisBusinessBanner>
      <BusinessAnalysisIntro></BusinessAnalysisIntro>
      <AnalyticsServiceProvide></AnalyticsServiceProvide>
      <AnalyticsMethodology></AnalyticsMethodology>
      <AnalyticsCaseStudy></AnalyticsCaseStudy>
      <AnalyticsTools></AnalyticsTools>
    </div>
  );
};

export default AnalysisBusiness;
