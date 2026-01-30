import React from "react";
import { useTranslation } from "@/components/context/translation/Translation.jsx";

const IT = () => {
  const { t } = useTranslation();

  return (
    <div className="skills__content">
      <h3 className="skills__title">{t("skills.it")}</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check" />
            <div>
              <h3 className="skills__name">Linux</h3>
              <span className="skills__level">{t("skills.intermediate")}</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check" />
            <div>
              <h3 className="skills__name">Networking</h3>
              <span className="skills__level">{t("skills.basic")}</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check" />
            <div>
              <h3 className="skills__name">Docker</h3>
              <span className="skills__level">{t("skills.intermediate")}</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check" />
            <div>
              <h3 className="skills__name">Git / GitHub</h3>
              <span className="skills__level">{t("skills.intermediate")}</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check" />
            <div>
              <h3 className="skills__name">CI / CD</h3>
              <span className="skills__level">{t("skills.basic")}</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check" />
            <div>
              <h3 className="skills__name">Vercel</h3>
              <span className="skills__level">{t("skills.intermediate")}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IT;
