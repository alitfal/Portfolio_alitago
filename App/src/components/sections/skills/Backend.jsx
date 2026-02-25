import React from "react";
import { useTranslation } from "@/components/context/translation/Translation.jsx";

const Backend = () => {
  const { t } = useTranslation();

  const backendGroups = [
    [
      { name: "Java", level: t("skills.intermediate"), details: "" },
      { name: "PHP", level: t("skills.basic"), details: "" },
      { name: "Bash", level: t("skills.basic"), details: "" },
    ],
    [
      { name: "SQL", level: t("skills.intermediate"), details: "" },
      { name: "Docker", level: t("skills.basic"), details: "" },
      { name: "Node.js", level: t("skills.intermediate"), details: "" },
    ],
  ];

  return (
    <div className="skills__content">
      <h3 className="skills__title">{t("skills.backend")}</h3>

      <div className="skills__box">
        {backendGroups.map((group, idx) => (
          <div className="skills__group" key={idx}>
            {group.map((skill) => (
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
        ))}
      </div>
    </div>
  );
};

export default Backend;
