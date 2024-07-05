import ITSecurityRiskManagementBanner from "./ITSecurityRiskManagementBanner";
import ITSecurityRiskManagementChoose from "./ITSecurityRiskManagementChoose";
import ITSecurityRiskManagementIntro from "./ITSecurityRiskManagementIntro";
import ITSecurityRiskManagementService from "./ITSecurityRiskManagementService";

const ITSecurityRiskManagement = () => {
  return (
    <div>
      <ITSecurityRiskManagementBanner></ITSecurityRiskManagementBanner>
      <ITSecurityRiskManagementIntro></ITSecurityRiskManagementIntro>
      <ITSecurityRiskManagementService></ITSecurityRiskManagementService>
      <ITSecurityRiskManagementChoose></ITSecurityRiskManagementChoose>
    </div>
  );
};

export default ITSecurityRiskManagement;
