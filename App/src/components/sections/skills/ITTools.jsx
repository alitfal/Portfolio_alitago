import React from "react";
import { useTranslation } from "@/components/context/translation/Translation.jsx";

const ITTools = () => {
  const { t } = useTranslation();

  const items = [
    {
      name: "Git / GitHub",
      level: t("skills.intermediate"),
      details: t("skills.it.details.git"),
    },
    {
      name: "CI / CD",
      level: t("skills.basic"),
      details: t("skills.it.details.cicd"),
    },
    {
      name: "Vercel",
      level: t("skills.intermediate"),
      details: t("skills.it.details.vercel"),
    },
  ];

  return (
    <div className="skills__content">
      <h3 className="skills__title">{t("skills.it.sections.tools")}</h3>

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

export default ITTools;
