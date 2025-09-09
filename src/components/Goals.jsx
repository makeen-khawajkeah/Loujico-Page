// src/components/Goals.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import CountUp from "react-countup";
import { FaUsers, FaCube, FaHandshake, FaAward } from "react-icons/fa"; // استيراد الأيقونات
import { GoalsData } from "../data";
import SplitLineHeader from "./SplitLineHeader";

const Goals = () => {
  const { t } = useTranslation();
  const IconComponents = {
    FaUsers: FaUsers,
    FaCube: FaCube,
    FaHandshake: FaHandshake,
    FaAward: FaAward,
  };

  return (
    <section id="goals" className="py-20 sm:px-5 bg-[#1F476F] text-white">
      {/* خلفية أغمق للقسم */}
      <div className="container mx-auto px-4">
        <SplitLineHeader title={t("goals.ourGoals")} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {GoalsData.map((goal) => {
            const IconComponent = IconComponents[goal.icon];
            return (
              <div
                key={goal.id}
                className="bg-gradient-to-br from-[#153457] to-[#2a5b8e] rounded-xl shadow-2xl p-8 
                        flex flex-col items-center justify-center h-56
                        transform transition-all duration-300 hover:scale-105 hover:shadow-glow-goals"
              >
                {IconComponent && (
                  <IconComponent className="h-16 w-16 text-[#B88647] mb-4" />
                )}
                <div className="text-5xl md:text-6xl font-extrabold text-white mb-2 dir-ltr">
                  {/* لون أبيض للأرقام */}
                  <span>+</span>
                  <CountUp
                    end={goal.target}
                    duration={2.5}
                    separator=","
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-[#E3C194]">
                  {/* لون فاتح للعناوين */}
                  {t(goal.title)}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Goals;
