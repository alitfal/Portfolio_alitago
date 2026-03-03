import React from "react";
import { useTranslation } from "@/components/context/translation/Translation.jsx";

const Backend = () => {
  const { t } = useTranslation();

  const backendGroups = [
    [
      {
        name: "Java",
        level: t("skills.intermediate"),
        icon: "bxl-java",
        details: "",
      },
      { name: "PHP", level: t("skills.basic"), icon: "bxl-php", details: "" },
      {
        name: "Bash",
        level: t("skills.basic"),
        icon: "bx-terminal",
        details: "",
      },
    ],
    [
      {
        name: "SQL",
        level: t("skills.intermediate"),
        icon: "bx-data",
        details: "",
      },
      {
        name: "Docker",
        level: t("skills.basic"),
        icon: "bxl-docker",
        details: "",
      },
      {
        name: "Node.js",
        level: t("skills.intermediate"),
        icon: "bxl-nodejs",
        details: "",
      },
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
        ))}
      </div>
    </div>
  );
};

export default Backend;
