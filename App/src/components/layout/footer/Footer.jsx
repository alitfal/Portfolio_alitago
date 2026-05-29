import React from "react";
import "@/styles/footer.css";
import { useTranslation } from "@/components/context/translation/Translation.jsx";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Angel Litago</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              {t("footer.about")}
            </a>
          </li>
          <li>
            <a href="#services" className="footer__link">
              {t("footer.services")}
            </a>
          </li>
          <li>
            <a href="#projects" className="footer__link">
              {t("footer.projects")}
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/alitago"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <i className="bx bxl-linkedin" aria-hidden="true" />
          </a>
          <a
            href="https://github.com/alitfal"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <i className="bx bxl-github" aria-hidden="true" />
          </a>
          {/* <a href='https://hub.docker.com/u/alitago' className='footer__social-link' target='_blank' rel='noreferrer'><i className='bx bxl-docker' /></a> */}
          <a
            href="https://paypal.me/alitfal"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
            aria-label="PayPal"
          >
            <i className="bx bxl-paypal" aria-hidden="true" />
          </a>
        </div>
        <span className="footer__copy">
          Copyright &#169; {currentYear} Angel Luis
          <br />
          Litago Falces - MIT License.
          <br />
          <br />
          Powered by{" "}
          <a
            href="https://vercel.com/"
            className="footer__link"
            target="_blank"
            rel="noreferrer"
          >
            &#x25B2;Vercel
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
