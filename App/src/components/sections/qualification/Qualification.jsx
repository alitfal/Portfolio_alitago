import React, { useRef, useState } from "react";
import "@/styles/qualification.css";
import { useTranslation } from "@/components/context/translation/Translation.jsx";

const Qualification = () => {
  const { t } = useTranslation();

  const [toggleState, setToggleState] = useState(1);
  const tabRefs = useRef([]);
  const toggleTab = (index) => setToggleState(index);
  const tabs = [
    {
      index: 1,
      icon: "uil uil-graduation-cap qualification__icon",
      label: t("qualification.education.header"),
      controls: "qualification-education-panel",
      id: "qualification-education-tab",
    },
    {
      index: 2,
      icon: "uil uil-briefcase-alt qualification__icon",
      label: t("qualification.experience.header"),
      controls: "qualification-experience-panel",
      id: "qualification-experience-tab",
    },
  ];

  const handleTabKeyDown = (event, tabIndex) => {
    const keyActions = {
      ArrowLeft: tabIndex === 0 ? tabs.length - 1 : tabIndex - 1,
      ArrowRight: tabIndex === tabs.length - 1 ? 0 : tabIndex + 1,
      Home: 0,
      End: tabs.length - 1,
    };

    if (!(event.key in keyActions)) return;

    event.preventDefault();
    const nextTabIndex = keyActions[event.key];
    toggleTab(tabs[nextTabIndex].index);
    tabRefs.current[nextTabIndex]?.focus();
  };

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">{t("qualification.section.title")}</h2>
      <span className="section__subtitle">
        {t("qualification.section.subtitle")}
      </span>
      <div className="qualification__container container">
        <div className="qualification__tabs" role="tablist">
          {tabs.map((tab, tabIndex) => (
            <button
              type="button"
              className={
                toggleState === tab.index
                  ? "qualification__button qualification__active button--flex"
                  : "qualification__button button--flex"
              }
              onClick={() => toggleTab(tab.index)}
              onKeyDown={(event) => handleTabKeyDown(event, tabIndex)}
              role="tab"
              aria-selected={toggleState === tab.index}
              aria-controls={tab.controls}
              id={tab.id}
              ref={(element) => {
                tabRefs.current[tabIndex] = element;
              }}
              key={tab.id}
            >
              <i className={tab.icon} aria-hidden="true" />
              {tab.label}
            </button>
          ))}
        </div>
        <div className="qualification__sections">
          <div
            id="qualification-education-panel"
            role="tabpanel"
            aria-labelledby="qualification-education-tab"
            hidden={toggleState !== 1}
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  {t("qualification.education.title.title_1")}
                </h3>
                <a
                  href="https://www3.gobiernodecanarias.org/medusa/edublog/iespuertodelacruztelesforobravo/"
                  className="qualification__link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="qualification__subtitle">
                    IES Puerto de la Cruz
                  </span>
                </a>
                <a
                  href="https://www3.gobiernodecanarias.org/medusa/edublog/cifpcesarmanrique/"
                  className="qualification__link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="qualification__subtitle">
                    CIFP César Manrique
                  </span>
                </a>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt" aria-hidden="true" />{" "}
                  Oct 2022 - Jun 2026
                </div>
              </div>
              <div aria-hidden="true">
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div aria-hidden="true">
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  {t("qualification.education.title.title_2")}
                </h3>
                <a
                  href="https://www3.gobiernodecanarias.org/medusa/edublog/iespuertodelacruztelesforobravo/"
                  className="qualification__link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="qualification__subtitle">
                    IES Puerto de la Cruz
                  </span>
                </a>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt" aria-hidden="true" />{" "}
                  Oct 2006 - Jun 2007
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  {t("qualification.education.title.title_3")}
                </h3>
                <a
                  href="https://www3.gobiernodecanarias.org/medusa/edublog/iespuertodelacruztelesforobravo/"
                  className="qualification__link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="qualification__subtitle">
                    IES Puerto de la Cruz
                  </span>
                </a>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt" aria-hidden="true" />{" "}
                  Oct 2004 - Jun 2006
                </div>
              </div>
              <div aria-hidden="true">
                <span className="qualification__rounder"></span>
              </div>
            </div>
          </div>
          <div
            id="qualification-experience-panel"
            role="tabpanel"
            aria-labelledby="qualification-experience-tab"
            hidden={toggleState !== 2}
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div></div>
              <div aria-hidden="true">
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  {t("qualification.experience.title.job_1")}
                </h3>
                <a
                  href="https://www.inytel.com"
                  className="qualification__link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="qualification__subtitle">
                    Inytel - Informática y Telefonía
                  </span>
                </a>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt" aria-hidden="true" />{" "}
                  May 2003 -{" "}
                  {t("qualification.present")}
                </div>
              </div>
            </div>
            <div className="qualification__data">
              {/* <div>
                <h3 className='qualification__title'>{t('qualification.experience.title.job_2')}</h3>
                <a href='https://www.facebook.com/OrquestaFilarmonicaJuvenildeTenerifeMiguelJaubert/' className='qualification__link' target='_blank' rel='noreferrer'>
                  <span className='qualification__subtitle'>OFJT-MJ - Orquesta Filarmónica Juvenil de Tenerife "Miguel Jaubert"</span>
                </a>
                <div className='qualification__calender'><i className='uil uil-calendar-alt' /> Nov 2017 - Feb 2019</div>
              </div> */}
              <div>
                {/* <span className='qualification__rounder'></span> */}
                {/*<span className='qualification__line'></span>*/}
              </div>
            </div>
            {/*
            <div className='qualification__data'>
              <div></div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
              <div>
                <h3 className='qualification__title'>Database Developer</h3>
                <span className='qualification__subtitle'>...</span>
                <div className='qualification__calender'><i className='uil uil-calendar-alt' /> 2022 - 2024</div>
              </div>
            </div>
            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>Web Application Developer</h3>
                <span className='qualification__subtitle'>...</span>
                <div className='qualification__calender'><i className='uil uil-calendar-alt' /> 2020 - 2022</div>
              </div>
              <div>
                <span className='qualification__rounder'></span>
              </div>
            </div>
            */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
