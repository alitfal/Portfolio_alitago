import React from "react";
import { useTranslation } from "@/components/context/translation/Translation.jsx";

const Frontend = () => {
  const { t } = useTranslation();

  const frontendGroups = [
    [
      {
        name: "HTML",
        level: t("skills.advanced"),
        icon: "bxl-html5",
        details: "",
      },
      {
        name: "CSS",
        level: t("skills.intermediate"),
        icon: "bxl-css3",
        details: "",
      },
      {
        name: "JavaScript",
        level: t("skills.intermediate"),
        icon: "bxl-javascript",
        details: "",
      },
    ],
    [
      { name: "Vue", level: t("skills.basic"), icon: "bxl-vuejs", details: "" },
      {
        name: "React",
        level: t("skills.intermediate"),
        icon: "bxl-react",
        details: "",
      },
      {
        name: "Next.js",
        level: t("skills.basic"),
        icon: "bxl-nodejs",
        details: "",
      },
    ],
  ];

  return (
    <div className="skills__content">
      <h3 className="skills__title">{t("skills.frontend")}</h3>
      <div className="skills__box">
        {frontendGroups.map((group, idx) => (
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

export default Frontend;
