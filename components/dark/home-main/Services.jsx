import React from 'react';

function Services() {
  return (
    <section className="skills-img-crev pb-50">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-4 offset-lg-1 valign">
            <div className="img md-mb80">
              <div className="rotate-butn-vid">
                <a
                  href="/dark/page-contact"
                  className="vid d-flex align-items-center"
                >
                  <div className="icon">
                    <i className="fas fa-play main-color"></i>
                  </div>
                  <span className="sub-title ml-15">Travaillez avec nous</span>
                </a>
              </div>
              <img
                src="/dark/assets/imgs/intro/04.jpg"
                alt=""
                className="radius-30"
              />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content full-width">
              <div className="sec-head mb-50">
                <h6 className="sub-title mb-15 main-color">Pourquoi nous choisir ?</h6>
                <h2 className="d-slideup wow">
                  <span className="sideup-text">
                    <span className="up-text">Une équipe qui vous accompagne et</span>
                  </span>
                  <span className="sideup-text">
                    <span className="up-text"> experte dans son domaine.</span>
                  </span>
                </h2>
              </div>
              <div className="row justify-content-end">
                <div className="col-lg-11">
                  <div className="text">
                    <p>
                    Notre agence de référencement en ligne vous accompagne à chaque étape pour garantir votre satisfaction à 100 %. 
                    Avec une équipe d&apos;experts dédiés, nous personnalisons chaque stratégie SEO pour répondre précisément à vos besoins. Ensemble, 
                    nous propulsons votre entreprise vers une visibilité maximale sur Google, assurant ainsi votre succès en ligne.
                    </p>
                  </div>
                  <div className="row mt-50 pt-50 bord-thin-top">
                    <div className="col-sm-6">
                      <div className="item d-flex align-items-center sm-mb30">
                        <h2 className="fz-60 line-height-1">
                          <span className="numb-count">50+</span>
                        </h2>
                        <span className="sub-title opacity-7 ml-30">
                        de projet réalisé en <br/>
                        France et Espagne  
                        </span>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="item d-flex align-items-center">
                      <h4 className="fz-50 line-height-1">
                       <span className="numb-count">100%</span>
                      </h4>
                        <span className="sub-title opacity-7 ml-30">
                          d&apos;avis et de <br/>
                          résultats positif
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
