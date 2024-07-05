import AchieveMaintainCompliance from "./AchieveMaintainCompliance";
import ITGovernanceBanner from "./ITGovernanceBanner";
import ITGovernanceFoundation from "./ITGovernanceFoundation";
import ITGovernanceIntro from "./ITGovernanceIntro";

const ITGovernance = () => {
  return (
    <div>
      <ITGovernanceBanner></ITGovernanceBanner>
      <ITGovernanceIntro></ITGovernanceIntro>
      <ITGovernanceFoundation></ITGovernanceFoundation>
      <AchieveMaintainCompliance></AchieveMaintainCompliance>
    </div>
  );
};

export default ITGovernance;
