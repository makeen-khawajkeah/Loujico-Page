import React from "react";
import {
  DevelopmentConsulting,
  FoundingBusiness,
  ManagementConsulting,
  ProjectConsulting,
} from "../data";
import SplitLineHeader from "./SplitLineHeader";
import PortfolioSection from "./PortfolioSection";
import { useTranslation } from "react-i18next";

const Portfolio = () => {
  const { t } = useTranslation();
  return (
    <div className="py-20 bg-[#153457] text-white relative" id="portfolio">
      {/* <img src="/public/assets/image/block 1.png" alt="" className='w-20 absolute left-[50%] translate-x-[-50%] -top-20'/> */}
      <SplitLineHeader title={t("nav.portfolio")} />
      <PortfolioSection
        title={t("portfolio.foundingBusiness")}
        id="founding-business"
        data={FoundingBusiness}
      />
      <PortfolioSection
        title={t("portfolio.developmentConsulting")}
        id="development-consulting"
        data={DevelopmentConsulting}
      />
      <PortfolioSection
        title={t("portfolio.managementConsulting")}
        id="management-consulting"
        data={ManagementConsulting}
      />
      <PortfolioSection
        title={t("portfolio.projectConsulting")}
        id="project-consulting"
        data={ProjectConsulting}
      />
    </div>
  );
};

export default Portfolio;
