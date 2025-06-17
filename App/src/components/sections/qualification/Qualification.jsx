import React, { useState } from 'react';
import '@/styles/qualification.css';
import { useTranslation } from '@/components/context/translation/Translation.jsx';

const Qualification = () => {
  const { t } = useTranslation();

  const [toggleState, setToggleState] = useState(2);
  const toggleTab = (index) => setToggleState(index);

  return (
    <section className='qualification section'>
      <h2 className='section__title'>{t('qualification.section.title')}</h2>
      <span className='section__subtitle'>{t('qualification.section.subtitle')}</span>
      <div className='qualification__container container'>
        <div className='qualification__tabs'>
          <div className={toggleState === 1 ? 'qualification__button qualification__active button--flex' : 'qualification__button button--flex'} onClick={() => toggleTab(1)}>
            <i className='uil uil-graduation-cap qualification__icon' />{t('qualification.education.header')}
          </div>
          <div className={toggleState === 2 ? 'qualification__button qualification__active button--flex' : 'qualification__button button--flex'} onClick={() => toggleTab(2)}>
            <i className='uil uil-briefcase-alt qualification__icon' />{t('qualification.experience.header')}
          </div>
        </div>
        <div className='qualification__sections'>
          <div className={toggleState === 1 ? 'qualification__content qualification__content-active' : 'qualification__content'}>
            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>{t('qualification.education.title.title_1')}</h3>
                <a href='https://www3.gobiernodecanarias.org/medusa/edublog/iespuertodelacruztelesforobravo/' className='qualification__link' target='_blank' rel='noreferrer'>
                  <span className='qualification__subtitle'>IES Puerto de la Cruz</span>
                </a>
                <a href='https://www3.gobiernodecanarias.org/medusa/edublog/cifpcesarmanrique/' className='qualification__link' target='_blank' rel='noreferrer'>
                  <span className='qualification__subtitle'>CIFP César Manrique</span>
                </a>
                <div className='qualification__calender'><i className='uil uil-calendar-alt' /> Oct 2022 - Jun 2026</div>
              </div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>
            <div className='qualification__data'>
              <div></div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
              <div>
                <h3 className='qualification__title'>{t('qualification.education.title.title_2')}</h3>
                <a href='https://www3.gobiernodecanarias.org/medusa/edublog/iespuertodelacruztelesforobravo/' className='qualification__link' target='_blank' rel='noreferrer'>
                  <span className='qualification__subtitle'>IES Puerto de la Cruz</span>
                </a>
                <div className='qualification__calender'><i className='uil uil-calendar-alt' /> Oct 2006 - Jun 2007</div>
              </div>
            </div>
            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>{t('qualification.education.title.title_3')}</h3>
                <a href='https://www3.gobiernodecanarias.org/medusa/edublog/iespuertodelacruztelesforobravo/' className='qualification__link' target='_blank' rel='noreferrer'>
                  <span className='qualification__subtitle'>IES Puerto de la Cruz</span>
                </a>
                <div className='qualification__calender'><i className='uil uil-calendar-alt' /> Oct 2004 - Jun 2006</div>
              </div>
              <div>
                <span className='qualification__rounder'></span>
              </div>
            </div>
          </div>
          <div className={toggleState === 2 ? 'qualification__content qualification__content-active' : 'qualification__content'}>
            <div className='qualification__data'>
              <div></div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
              <div>
                <h3 className='qualification__title'>{t('qualification.experience.title.job_1')}</h3>
                <a href='https://www.inytel.com' className='qualification__link' target='_blank' rel='noreferrer'>
                  <span className='qualification__subtitle'>Inytel - Informática y Telefonía</span>
                </a>
                <div className='qualification__calender'><i className='uil uil-calendar-alt' /> May 2003 - {t('qualification.present')}</div>
              </div>
            </div>
            <div className='qualification__data'>
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
