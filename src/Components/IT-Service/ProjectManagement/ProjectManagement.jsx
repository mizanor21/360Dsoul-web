import ItPhases from "./ItPhases"
import ProjectIntro from "./ProjectIntro"
import ProjectManagementBanner from "./ProjectManagementBanner"
import ProjectManagementBenefit from "./ProjectManagementBenefit"
import ProjectManagerWork from "./ProjectManagerWork"


const ProjectManagement = () => {
  return (
    <div>
        <ProjectManagementBanner></ProjectManagementBanner>
        <ProjectIntro></ProjectIntro>
        <ItPhases></ItPhases>
        <ProjectManagerWork></ProjectManagerWork>
        <ProjectManagementBenefit></ProjectManagementBenefit>
    </div>
  )
}

export default ProjectManagement