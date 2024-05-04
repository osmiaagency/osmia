'use client';
import React, { useEffect } from 'react';

function Footer() {
  useEffect(() => {
    if (window.innerWidth > 991) {
      gsap.set('.footer-container', { yPercent: -50 });
      const uncover = gsap.timeline({ paused: true });
      uncover.to('.footer-container', { yPercent: 0, ease: 'none' });
      ScrollTrigger.create({
        trigger: 'main',
        start: 'bottom bottom',
        end: '+=50%',
        animation: uncover,
        scrub: true,
      });
    }
  }, []);
  return (
    <footer className="modern-footer sub-bg pt-80">
      <div className="footer-container">
        <div className="container ontop">
          <div className="row pb-30 bord-thin-bottom">
            <div className="col-lg-5">
              <div className="logo icon-img-120">
                <img src="/dark/assets/imgs/logo-light.png" alt="" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="social-media d-flex justify-content-end">
                <ul className="rest d-flex align-items-center fz-14">
                  <li className="hover-this cursor-pointer ml-50">
                    <a href="www.linkedin.com/in/osmia-agency-718278306" className="hover-anim">
                      <i className="fab fa-linkedin-in mr-10"></i> LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row pt-80">
            <div className="col-lg-7">
              <div className="call-action">
                <h2 className="d-slideup wow fz-60 fw-600">
                  <span className="sideup-text">
                    <span className="up-text">Avez-vous un projet en tête?</span>
                  </span>
                  <span className="sideup-text">
                    <span className="up-text underline">
                      <a href="https://calendly.com/contact-sl29/30min" className="main-color">
                      Mettons-nous au travail.
                      </a>
                    </span>
                  </span>
                </h2>
                <div className="info mt-80 d-flex align-items-center">
                  <div>
                  <a
                      href="mailto:contact@osmiaagency.com"
                      className="butn butn-md butn-bord-thin radius-30"
                    >
                     <span className="text">contact@osmiaagency.com</span>
                    </a>
                    
                  </div>
                  <div>
                  <a
                    href="https://calendly.com/contact-sl29/30min"
                    className="butn butn-md butn-bord-thin radius-30 ml-30"
                    style={{backgroundColor: '#00adb5', color: '#eeeeee'}}
                   >
                     <span className="text">Reserve a Call</span>
                  </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 offset-lg-1 bord-left">
              <div className="column">
                <h6 className="sub-title mb-30">Liens utiles</h6>
                <div className="row">
                  <div className="col-6">
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
                        <a href="/dark/page-contact">Contact</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-6">
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
                    </ul>
                  </div>
                </div>
              </div>
              {/* <div className="subscribe-minimal mt-50">
                <form action="contact.php">
                  <div className="form-group rest">
                    <input type="email" placeholder="Type Your Email" />
                    <button type="submit">
                      <i className="ti-arrow-top-right"></i>
                    </button>
                  </div>
                </form>
              </div> */}
            </div>
          </div>
          <div className="text-center pt-30 pb-30 main-bg mt-80">
            <p className="fz-14">
            © 2024 All Rights Reserved By{' '}
              <span className="underline main-color">
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
