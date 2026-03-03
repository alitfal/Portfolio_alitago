import React, { useState } from "react";
import "@/styles/services.css";
import { useTranslation } from "@/components/context/translation/Translation.jsx";

const Services = () => {
  const { t } = useTranslation();

  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => setToggleState(index);

  const itServices = [
    {
      modalIndex: 1,
      icon: "uil uil-desktop", // IT Ops → escritorio/sistema
      title1Key: "services.itops.title1",
      title2Key: "services.itops.title2",
      modalTitleKey: "services.itops.title",
      tasks: [
        "services.itops.task1",
        "services.itops.task2",
        "services.itops.task3",
        "services.itops.task4",
        "services.itops.task5",
      ],
    },
    {
      modalIndex: 2,
      icon: "uil uil-network-chart", // Networking → red
      title1Key: "services.networking.title1",
      title2Key: "services.networking.title2",
      modalTitleKey: "services.networking.title",
      tasks: [
        "services.networking.task1",
        "services.networking.task2",
        "services.networking.task3",
        "services.networking.task4",
        "services.networking.task5",
      ],
    },
    {
      modalIndex: 3,
      icon: "uil uil-cloud-computing", // Deployment → cloud computing
      title1Key: "services.deployment.title1",
      title2Key: "services.deployment.title2",
      modalTitleKey: "services.deployment.title",
      tasks: [
        "services.deployment.task1",
        "services.deployment.task2",
        "services.deployment.task3",
        "services.deployment.task4",
        "services.deployment.task5",
      ],
    },
  ];

  const devServices = [
    {
      modalIndex: 4,
      icon: "uil uil-layer-group", // Frontend → capas UI
      title1Key: "services.frontend.title1",
      title2Key: "services.frontend.title2",
      modalTitleKey: "services.frontend.title",
      tasks: [
        "services.frontend.task1",
        "services.frontend.task2",
        "services.frontend.task3",
        "services.frontend.task4",
        "services.frontend.task5",
      ],
    },
    {
      modalIndex: 5,
      icon: "uil uil-server", // Backend → servidor
      title1Key: "services.backend.title1",
      title2Key: "services.backend.title2",
      modalTitleKey: "services.backend.title",
      tasks: [
        "services.backend.task1",
        "services.backend.task2",
        "services.backend.task3",
        "services.backend.task4",
        "services.backend.task5",
      ],
    },
    {
      modalIndex: 6,
      icon: "uil uil-database", // Database → base de datos
      title1Key: "services.database.title1",
      title2Key: "services.database.title2",
      modalTitleKey: "services.database.title",
      tasks: [
        "services.database.task1",
        "services.database.task2",
        "services.database.task3",
        "services.database.task4",
        "services.database.task5",
      ],
    },
    {
      modalIndex: 7,
      icon: "uil uil-table", // FileMaker → tabla/registros
      title1Key: "services.filemaker.title1",
      title2Key: "services.filemaker.title2",
      modalTitleKey: "services.filemaker.title",
      tasks: [
        "services.filemaker.task1",
        "services.filemaker.task2",
        "services.filemaker.task3",
        "services.filemaker.task4",
        "services.filemaker.task5",
      ],
    },
  ];

  const ServiceCard = ({ service }) => (
    <div className="services__content">
      <div>
        <i className={`${service.icon} services__icon`} />
        <h3 className="services__title">
          {t(service.title1Key)}
          <br />
          {t(service.title2Key)}
        </h3>
      </div>

      <span
        className="services__button"
        onClick={() => toggleTab(service.modalIndex)}
      >
        {t("services.viewmore")}
        <i className="uil uil-arrow-right services__button-icon" />
      </span>

      <div
        className={
          toggleState === service.modalIndex
            ? "services__modal active-modal"
            : "services__modal"
        }
      >
        <div className="services__modal-content">
          <i
            onClick={() => toggleTab(0)}
            className="uil uil-times services__modal-close"
          />
          <h3 className="services__modal-title">{t(service.modalTitleKey)}</h3>
          <ul className="services__modal-services grid">
            {service.tasks.map((taskKey) => (
              <li className="services__modal-service" key={taskKey}>
                <i className="uil uil-check-circle services__modal-icon" />
                <p className="services__modal-info">{t(taskKey)}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  return (
    <section className="services section" id="services">
      <h2 className="section__title">{t("services.section.title")}</h2>
      <span className="section__subtitle">
        {t("services.section.subtitle")}
      </span>

      <div className="services__container container grid">
        <div className="services__group">
          <h3 className="services__group-title">{t("services.group.it")}</h3>
          <div className="services__group-grid">
            {itServices.map((service) => (
              <ServiceCard key={service.modalIndex} service={service} />
            ))}
          </div>
        </div>

        <div className="services__group">
          <h3 className="services__group-title">
            {t("services.group.development")}
          </h3>
          <div className="services__group-grid">
            {devServices.map((service) => (
              <ServiceCard key={service.modalIndex} service={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
