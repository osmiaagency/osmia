'use client';
import loadBackgroudImages from '@/common/loadBackgroudImages';
import React, { useEffect } from 'react';

function Intro2() {
  useEffect(() => {
    loadBackgroudImages();
  }, []);
  return (
    <section className="page-intro-cerv section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 bord-thin-right rest">
            <div className="row justify-content-end rest">
              <div className="col-md-5 rest">
                <div className="cont">
                  <div className="mb-40">
                    <h2 className="fz-100 numb-font">1.</h2>
                  </div>
                  <h4>Notre mission</h4>
                  <div className="text mt-30">
                    <p>
                    Avec Osmia, le référencement de votre activité professionnelle 
                    est pris en charge de A à Z. Nous nous assurons que votre entreprise 
                    se développe de la meilleure manière possible, vous permettant ainsi
                     de vous concentrer sereinement sur vos objectifs à atteindre.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-5 rest">
                <div className="img fit-img bord-thin-left">
                  <img src="/dark/assets/imgs/intro/02.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="row justify-content-end bord-thin-top rest">
              <div className="col-md-5 rest">
                <div className="img fit-img">
                  <img src="/dark/assets/imgs/intro/03.jpg" alt="" />
                </div>
              </div>
              <div className="col-md-5 rest">
                <div className="cont bord-thin-left">
                  <div className="mb-40">
                    <h2 className="fz-100 numb-font">2.</h2>
                  </div>
                  <h4>Notre vision</h4>
                  <div className="text mt-30">
                    <p>
                    Cette année, lors de nos accompagnements, nous avons atteint un 
                    taux de satisfaction client de 100 %. Rejoignez-nous dès aujourd&apos;hui 
                    et bénéficiez des solutions clé en main les plus performantes pour 
                    assurer le succès de votre activité. Notre équipe s&apos;engage à perfectionner 
                    en permanence ses stratégies et à les adapter aux évolutions du marché, 
                    afin de garantir une expérience optimale à nos clients.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 rest">
            <div className="bord-thin-top mt-100 position-re">
              <div className="row">
                <div className="col-md-11">
                  <div className="cont">
                    <div className="mb-40">
                      <h2 className="fz-100 numb-font">3.</h2>
                    </div>
                    <h4>Pourquoi nous?</h4>
                    <div className="text mt-30">
                      <p>
                      En nous choisissant, vous optez pour une collaboration étroite avec notre équipe 
                      dévouée, qui mettra tout en œuvre pour référencer votre entreprise de manière optimale. 
                      Grâce à notre analyse approfondie, notre expertise et notre expérience, nous vous offrons 
                      une stratégie de référencement sur mesure.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="bg-dots bg-img"
                data-background="/dark/assets/imgs/patterns/dots.png"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro2;
