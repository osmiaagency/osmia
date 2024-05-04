'use client';
import loadBackgroudImages from '@/common/loadBackgroudImages';
import React, { useEffect } from 'react';

function Footer() {
  useEffect(() => {
    loadBackgroudImages();
  }, []);
  return (
    <footer
      className="clean-footer crev bg-img"
      data-background="/dark/assets/imgs/header/bg1.jpg"
      data-overlay-dark="10"
    >
      <div className="container pb-40 section-padding ontop">
        <div className="cal-action pb-50 mb-80 bord-thin-bottom">
          <h2 className="fz-120 line-height-1 d-rotate wow">
            <span className="rotate-text">
              <a href="/dark/page-contact">
                Let’s Contact{' '}
                <span className="ml-30 fz-70 ti-arrow-top-right"></span>
              </a>
            </span>
          </h2>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <div className="logo icon-img-100">
              <img src="/dark/assets/imgs/logo-light.png" alt="" />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="column">
              <div className="mb-40">
                <h6 className="sub-title mb-30">Adresse</h6>
                <h5 className="opacity-8">
                  Europe
                </h5>
                <h5>
                <a href="mailto:contact@osmiaagency.com">contact@<span style={{color: '#00adb5'}}>osmiaagency.com</span></a>
                </h5>
              </div>

              <a href="https://calendly.com/contact-sl29/30min" target='_blank' className="underline" style={{backgroundColor: '#00adb5', color: '#eeeeee', borderRadius: '50px', padding: '18px', textDecoration: 'none', fontSize: '18px', fontWeight: 'bold', fontFamily: 'League Spartan, sans-serif'}}>
                Reserve a Call.
              </a>
            </div>
          </div>
          <div className="col-lg-2 offset-lg-1">
            <div className="column">
              <h6 className="sub-title mb-30">Liens utiles</h6>
              <ul className="rest fz-14">
                <li className="mb-15">
                  <a href="/dark/page-about">À propos de nous</a>
                </li>
                <li className="mb-15">
                  <a href="/dark/page-services">Nos Services</a>
                </li>
                <li className="mb-15">
                  <a href="https://calendly.com/contact-sl29/30min">Reserve a call</a>
                </li>
                <li>
                  <a href="/dark/page-contact">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="column">
              <h6 className="sub-title mb-30">Soutien</h6>
              <ul className="rest fz-14">
                <li className="mb-15">
                  <a href="/dark/page-FAQS">FAQS</a>
                </li>
                <li className="mb-15">
                  <a href="/dark/page-about">Termes et conditions</a>
                </li>
                <li className="mb-15">
                  <a href="/dark/page-about">Politique de confidentialité</a>
                </li>
                <li>
                  <a href="/dark/page-about">Aide</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center pt-30 pb-30 mt-80 bord-thin-top">
          <div>
            <ul className="rest d-flex align-items-center">
              <li className="hover-this cursor-pointer ml-30">
                <a href="http://www.linkedin.com/in/osmia-agency-718278306" className="hover-anim" target='_blank'>
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="ml-auto">
            <p className="fz-14">
              © 2024 All Rights Reserved By{' '}
              <span className="underline">
              <a href="https://calendly.com/contact-sl29/30min" target="_blank" style={{fontSize: '20px', fontWeight: 'bold'}}>
                Osmia<span style={{color: '#00adb5'}}>.</span>
              </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
