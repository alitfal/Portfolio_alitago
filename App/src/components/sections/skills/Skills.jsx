import React from "react";
import "@/styles/skills.css";
import Frontend from "./Frontend.jsx";
import Backend from "./Backend.jsx";
import ITSystems from "./ITSystems.jsx";
import ITTools from "./ITTools.jsx";
import IT from "./ITSystems.jsx";

import { useTranslation } from "@/components/context/translation/Translation.jsx";

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">{t("skills.section.title")}</h2>
      <span className="section__subtitle">{t("skills.section.subtitle")}</span>

      {/* PROGRAMACIÓN */}
      <div className="skills__category">
        <h3 className="skills__category-title">
          {t("skills.category.programming")}
        </h3>

        <div className="skills__container skills__container--2 container grid">
          <Frontend />
          <Backend />
        </div>
      </div>

      {/* IT */}
      <div className="skills__category">
        <h3 className="skills__category-title">{t("skills.category.it")}</h3>

        <div className="skills__container container grid">
          <ITSystems />
          <ITTools />
        </div>
      </div>
    </section>
  );
};

export default Skills;
