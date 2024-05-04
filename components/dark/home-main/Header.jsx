'use client';
import React, { useEffect, useLayoutEffect } from 'react';


import loadBackgroudImages from '@/common/loadBackgroudImages';

function Header() {
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo('.header', { y: 200 }, { y: 0 }, '+=2.5');
    tl.fromTo(
      '.header .container',
      { opacity: 0, translateY: 40 },
      { opacity: 1, translateY: 0 },
      '-=0'
    );

    // Cleanup function
    return () => tl.kill();
  }, []);

  useEffect(() => {
    loadBackgroudImages();
  }, []);
  return (
    <div
      className="header main-header bg-img" id='herosection'
      data-background="/dark/assets/imgs/header/bg1.jpg"
      data-overlay-dark="8"
    >
      <div className="container pt-100">
        <div className="row justify-content-end">
          <div className="col-lg-6">
            <div className="text mb-100">
            <h4 style={{fontFamily: 'League Spartan, sans-serif'}}>
            <span style={{fontSize: '2em', fontWeight: 'bold'}}>Osmia</span><span style={{color: '#00adb5', fontSize: '2em'}}>.</span> 
            s'engage à accompagner les entreprises engagées dans leur succès, en favorisant une transparence absolue entre nous et nos clients, pour tisser des liens authentiques et catalyser la croissance de votre activité.
           </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid ontop">
        <div className="container">
          <div className="lg-text">
            <div className="d-flex">
              <h6>Crée votre empreinte numérique avec</h6>
              <h6 className="ml-auto">Ouvrir la voie en matière de référencement</h6>
            </div>
            <h1 style={{fontFamily: 'League Spartan, sans-serif', fontWeight: 'bold'}}>
            <span>O</span><span style={{textTransform: 'lowercase'}}>smia</span><span style={{color: '#00adb5'}}>.</span>
            </h1>
          </div>
        </div>
        <div className="img">
          <img src="/dark/assets/imgs/header/2.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Header;
