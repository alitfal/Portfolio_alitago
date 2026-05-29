import React, { useState, useEffect } from "react";
import "@/styles/header.css";
import { useTranslation } from "@/components/context/translation/Translation.jsx";

const Header = () => {
  const { t } = useTranslation();
  const [headerClass, setHeaderClass] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");
      if (window.scrollY >= 80) {
        setHeaderClass("scroll-header");
      } else {
        setHeaderClass("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <header className={`header ${headerClass}`}>
      <nav className="nav container">
        <a href="/" className="nav__logo" aria-label="Angel Litago"></a>
        <div
          id="nav-menu"
          className={Toggle ? "nav__menu show-menu" : "nav__menu"}
        >
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={
                  activeNav === "#home" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-estate nav__icon" aria-hidden="true" />{" "}
                {t("header.home")}
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={
                  activeNav === "#about" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-user nav__icon" aria-hidden="true" />{" "}
                {t("header.about")}
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#qualification"
                onClick={() => setActiveNav("#qualification")}
                className={
                  activeNav === "#qualification"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i
                  className="uil uil-file-alt nav__icon"
                  aria-hidden="true"
                />{" "}
                {t("header.qualification")}
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => setActiveNav("#skills")}
                className={
                  activeNav === "#skills"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i
                  className="uil uil-file-alt nav__icon"
                  aria-hidden="true"
                />{" "}
                {t("header.skills")}
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#services"
                onClick={() => setActiveNav("#services")}
                className={
                  activeNav === "#services"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i
                  className="uil uil-briefcase-alt nav__icon"
                  aria-hidden="true"
                />{" "}
                {t("header.services")}
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#projects"
                onClick={() => setActiveNav("#projects")}
                className={
                  activeNav === "#projects"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-scenery nav__icon" aria-hidden="true" />{" "}
                {t("header.projects")}
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#testimonials"
                onClick={() => setActiveNav("#testimonials")}
                className={
                  activeNav === "#testimonials"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i
                  className="uil uil-comment-dots nav__icon"
                  aria-hidden="true"
                />{" "}
                {t("header.testimonials")}
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={
                  activeNav === "#contact"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-message nav__icon" aria-hidden="true" />{" "}
                {t("header.contact")}
              </a>
            </li>
          </ul>
          <button
            type="button"
            className="uil uil-times nav__close"
            aria-label="Close navigation menu"
            aria-controls="nav-menu"
            aria-expanded={Toggle}
            onClick={() => showMenu(!Toggle)}
            style={{ backgroundColor: "transparent", padding: 0 }}
          />
        </div>
        <button
          type="button"
          className="uil uil-apps nav__toggle"
          aria-label="Open navigation menu"
          aria-controls="nav-menu"
          aria-expanded={Toggle}
          onClick={() => showMenu(!Toggle)}
          style={{ backgroundColor: "transparent", padding: 0 }}
        />
      </nav>
    </header>
  );
};

export default Header;
