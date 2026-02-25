import React from "react";
import { useTranslation } from "@/components/context/translation/Translation.jsx";

const ITSystems = () => {
  const { t } = useTranslation();

  const items = [
    {
      name: "macOS",
      level: t("skills.advanced"),
      details: t("skills.it.details.macos"),
    },
    {
      name: "Microsoft Windows",
      level: t("skills.advanced"),
      details: t("skills.it.details.windows"),
    },
    {
      name: "Linux",
      level: t("skills.intermediate"),
      details: t("skills.it.details.linux"),
    },
    {
      name: "Networking",
      level: t("skills.advanced"),
      details: t("skills.it.details.networking"),
    },
    {
      name: "Docker",
      level: t("skills.intermediate"),
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
              <i className="bx bx-badge-check" />
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
