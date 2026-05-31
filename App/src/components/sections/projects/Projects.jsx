import React, { useState, useEffect } from "react";
import Image from "next/image";
import "@/styles/projects.css";
import { projectsNav, projectsData } from "./Data.jsx";
import { useTheme } from "@/components/context/theme/Theme.jsx";
import { useTranslation } from "@/components/context/translation/Translation.jsx";

const Work = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    // Get projects based on item
    if (
      item.name === "all" ||
      item.name === t("projects.data.all").toLowerCase()
    ) {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        // Translate the project category before comparing it
        const translatedCategory = t(`projects.data.${project.category}`);
        return translatedCategory.toLowerCase() === item.name;
      });

      setProjects(newProjects);
    }
  }, [item, t]);

  const handleClick = (name, index) => {
    setItem({ name });
    setActive(index);
  };

  return (
    <section className="work section" id="projects">
      <h2 className="section__title">{t("projects.section.title")}</h2>
      <span className="section__subtitle">
        {t("projects.section.subtitle")}
      </span>
      <p className="work__note">{t("projects.confidentiality")}</p>
      <div>
        {/* projectsNav */}
        <div className="work__filters">
          {projectsNav.map((item, index) => {
            const translatedName = t(`projects.data.${item.name}`);
            return (
              <button
                type="button"
                onClick={() => {
                  handleClick(translatedName.toLowerCase(), index);
                }}
                className={`${active === index ? "active-work" : ""} work__item`}
                aria-pressed={active === index}
                key={index}
              >
                {translatedName}
              </button>
            );
          })}
        </div>
        {/* projects */}
        <div className="work__container container grid">
          {projects.map((item) => {
            const title = item.titleKey ? t(item.titleKey) : item.title;
            const image = (
              <Image
                className="work__img"
                src={theme === "light" ? item.imageLight : item.imageDark}
                alt=""
                width={295}
                height={295}
                sizes="(max-width: 576px) calc(100vw - 5rem), 295px"
              />
            );

            return (
              <div className="work__card" key={item.id}>
                {item.repository ? (
                  <a
                    href={item.repository}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={title}
                  >
                    {image}
                  </a>
                ) : (
                  image
                )}
                <h3 className="work__title">{title}</h3>
                <p className="work__description">{t(item.descriptionKey)}</p>
                <div className="work__tags">
                  {item.technologies.map((technology) => (
                    <span className="work__tag" key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>
                {item.repository ? (
                  <a
                    className="work__button"
                    href={item.repository}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t("projects.repository")}
                    <i
                      className="bx bx-right-arrow-alt work__button-icon"
                      aria-hidden="true"
                    />
                  </a>
                ) : (
                  <span className="work__button work__button--muted">
                    {t("projects.private")}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Work;
