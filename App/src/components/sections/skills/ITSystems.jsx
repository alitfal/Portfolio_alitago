import React from "react";
import { useTranslation } from "@/components/context/translation/Translation.jsx";

const ITSystems = () => {
  const { t } = useTranslation();

  const items = [
    {
      name: "macOS",
      level: t("skills.advanced"),
      icon: "bxl-apple",
      details: t("skills.it.details.macos"),
    },
    {
      name: "Microsoft Windows",
      level: t("skills.advanced"),
      icon: "bxl-windows",
      details: t("skills.it.details.windows"),
    },
    {
      name: "Linux",
      level: t("skills.intermediate"),
      icon: "bxl-tux",
      details: t("skills.it.details.linux"),
    },
    {
      name: "Networking",
      level: t("skills.advanced"),
      icon: "bx-network-chart",
      details: t("skills.it.details.networking"),
    },
    {
      name: "Docker",
      level: t("skills.intermediate"),
      icon: "bxl-docker",
      details: t("skills.it.details.docker"),
    },
  ];

  return (
    <div className="skills__content">
      <h3 className="skills__title">{t("skills.it.sections.systems")}</h3>
      <div className="skills__box">
        <div className="skills__group">
          {items.map((skill) => (
            <div className="skills__data" key={skill.name}>
              <i className={`bx ${skill.icon}`} />
              <div>
                <h3 className="skills__name">{skill.name}</h3>
                <span className="skills__level">{skill.level}</span>
                {skill.details ? (
                  <p className="skills__details">{skill.details}</p>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ITSystems;
