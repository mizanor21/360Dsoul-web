import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import ErrorPage from "../Components/Error/ErrorPage";
import Home from "../Pages/HomePage/Home";
import About from "../Pages/About/About";
import BlogPage from "../Pages/BlogPage/BlogPage";
import ContactPage from "../Pages/ContactPage/ContactPage";
import TeamPage from "../Pages/TeamPage/TeamPage";
import EventsPage from "../Pages/EventsPage/EventsPage";
import Career from "../Components/Career/Career";
import GalleryPage from "../Pages/GallaryPage/GalleryPage";
import HROperations from "../Pages/WhatWeDo/Business-Operations/Hr-Operations/HROperations";
import Choose from "../Components/Choose/Choose";
import ITServices from "../Pages/WhatWeDo/Business-Operations/It-Operations/IT-Services/IT-Services";
import ProjectManagement from "../Components/IT-Service/ProjectManagement/ProjectManagement";
import SoftwareDevelopment from "../Components/IT-Service/SoftwareDevelopment/SoftwareDevelopment";
import AnalysisBusiness from "../Components/IT-Service/Analysis-Business/AnalysisBusiness";
import ITSecurityRiskManagement from "../Components/IT-Service/IT SECURITY & RISK MANAGEMENT/ITSecurityRiskManagement";
import ITGovernance from "../Components/IT-Service/IT GOVERNANCE & COMPLIANCE/ITGovernance";
import ItTRaining from "../Components/IT-Service/IT TRAINING & CHANGE MANAGEMENT/ItTRaining";
import Network from "../Components/IT-Service/NetworkOperations/Network";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/blog",
        element: <BlogPage></BlogPage>,
      },
      {
        path: "/contact-us",
        element: <ContactPage></ContactPage>,
      },
      {
        path: "/team",
        element: <TeamPage></TeamPage>,
      },
      {
        path: "/our-events",
        element: <EventsPage></EventsPage>,
      },
      {
        path: "/career",
        element: <Career></Career>,
      },
      {
        path: "/gallery",
        element: <GalleryPage></GalleryPage>,
      },
      {
        path: "/hr-operations",
        element: <HROperations></HROperations>,
      },
      {
        path: "/why-choose-us",
        element: <Choose></Choose>,
      },
      {
        path: "/IT-Services",
        element: <ITServices></ITServices>,
      },
      {
        path: "/details-It-Project-Management",
        element: <ProjectManagement></ProjectManagement>,
      },
      {
        path: "/software-development",
        element: <SoftwareDevelopment></SoftwareDevelopment>,
      },
      {
        path: "/analysis-business",
        element: <AnalysisBusiness></AnalysisBusiness>,
      },
      {
        path: "/security-riskManagement",
        element: <ITSecurityRiskManagement></ITSecurityRiskManagement>,
      },
      {
        path: "/IT-Governance",
        element: <ITGovernance></ITGovernance>,
      },
      {
        path: "/IT-Training",
        element: <ItTRaining></ItTRaining>,
      },
      {
        path: "/network",
        element: <Network></Network>,
      },
    ],
  },
]);

export default router;
