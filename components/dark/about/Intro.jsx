import React from 'react';

function Intro() {
  return (
    <section className="page-intro position-re">
      <div className="container-fluid rest">
        <div className="row justify-content-end">
          <div className="col-sm-9">
            <div className="img to-up fit-img">
              <img src="/dark/assets/imgs/background/back.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container section-padding">
        <div className="row">
          <div className="col-lg-5">
            <h6 className="sub-title main-color">À propos de l&apos;agence</h6>
          </div>
          <div className="col-lg-7">
            <div className="text">
              <h4>
              <span style={{fontSize: '50px', fontWeight: 'bold'}}>Osmia</span><span style={{fontSize: '50px',color: '#00adb5'}}>.</span> une agence SEO spécialisée, se concentre sur l&apos;augmentation de 
              la visibilité de votre entreprise et sur l&apos;éclipse de vos concurrents. Avec 
              une équipe compacte mais dévouée, notre mission est claire : élaborer des 
              stratégies de référencement local sur mesure pour accroître votre présence 
              sur les pages de résultats des moteurs de recherche. Nous allons plus loin 
              en tirant parti de Google Ads pour amplifier votre portée. Notre objectif 
              ultime ? Aider votre entreprise à se développer grâce à des stratégies soigneusement élaborées.
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="line-overlay">
        <svg
          viewBox="0 0 1728 1101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-43 773.821C160.86 662.526 451.312 637.01 610.111 733.104C768.91 829.197 932.595 1062.9 602.782 1098.75C272.969 1134.6 676.888 25.4306 1852 1"
            style={{ strokeDasharray: 3246.53 }}
          ></path>
        </svg>
      </div>
    </section>
  );
}

export default Intro;
