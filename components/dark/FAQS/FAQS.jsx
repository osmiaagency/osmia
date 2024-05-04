'use client';
import React from 'react';

function FAQS() {
  function openAccordion(event) {
    document.querySelectorAll('.accordion-info').forEach((element) => {
      element.classList.remove('active');
      element.style.maxHeight = 0;
      element.parentElement.classList.remove('active');
    });
    event.currentTarget.parentElement.classList.add('active');
    event.currentTarget.nextElementSibling.style.maxHeight = '300px';
    event.currentTarget.nextElementSibling.classList.add('active');
  }
  return (
    <section className="faqs section-padding position-re">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-4">
            <div className="sec-head md-mb80">
              <h6 className="sub-title main-color mb-15">FAQS</h6>
              <h2>
              Foire aux <br /> questions posées
              </h2>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="list-serv">
              <div className="accordion bord">
                <div className="item mb-15 wow fadeInUp" data-wow-delay=".1s">
                  <div onClick={openAccordion} className="title">
                    <h6>Quels sont les avantages du référencement naturel par rapport à d&apos;autres méthodes de marketing en ligne ?</h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                  <p className="" style={{fontSize: '14px'}}>
                      Les avantages du référencement naturel résident dans sa capacité à 
                      générer un trafic qualifié sur votre site web de manière organique, 
                      ce qui signifie que les visiteurs sont plus susceptibles d&apos;être intéressés 
                      par vos produits ou services. De plus, le référencement naturel offre des 
                      résultats durables à long terme et est souvent considéré comme plus rentable 
                      que d'autres méthodes de marketing en ligne à long terme.
                  </p>
                  </div>
                </div>

                <div
                  className="item active mb-15 wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div onClick={openAccordion} className="title">
                    <h6>En quoi consiste exactement le service de Google Ads et comment cela peut-il bénéficier à mon entreprise ?</h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="mb-30">
                    Google Ads est un service de publicité en ligne proposé par Google qui vous 
                    permet de diffuser des annonces payantes sur le réseau Google. Ces annonces 
                    apparaissent sur les résultats de recherche Google et sur d'autres sites 
                    partenaires. Utiliser Google Ads peut vous aider à obtenir une visibilité 
                    instantanée auprès de votre public cible et à générer du trafic vers votre site web.
                    </p>
                  </div>
                </div>

                <div className="item mb-15 wow fadeInUp" data-wow-delay=".3s">
                  <div onClick={openAccordion} className="title">
                    <h6>Comment votre équipe garantit-elle la durabilité et l'efficacité du référencement 
                      naturel à long terme ?</h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="">
                    Notre équipe assure la durabilité et l&apos;efficacité du référencement naturel à long 
                    terme en mettant en œuvre des stratégies de qualité, axées sur le contenu et 
                    conformes aux meilleures pratiques de référencement. Nous surveillons également 
                    de près les performances, ajustant et optimisant continuellement les stratégies 
                    pour maximiser les résultats.
                    </p>
                  </div>
                </div>

                <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div onClick={openAccordion} className="title">
                    <h6>Quelles sont les étapes impliquées dans la mise en place d&apos;une campagne Google Ads et comment suivez-vous les résultats ?</h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="">
                    La mise en place d&apos;une campagne Google Ads implique plusieurs étapes, 
                    notamment la recherche de mots-clés pertinents, la création d'annonces
                     attrayantes, le paramétrage des enchères et des budgets, ainsi que le
                      suivi des performances à l&apos;aide d&apos;outils d&apos;analyse avancés. Notre 
                      équipe assure un suivi rigoureux des résultats, optimisant la campagne
                       en fonction des données pour maximiser le retour sur investissement.
                    </p>
                  </div>
                </div>

                <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div onClick={openAccordion} className="title">
                    <h6>Pourquoi devrais-je opter pour le plan personnalisé plutôt que le pack standard ?</h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="">
                    Le plan personnalisé offre une approche sur mesure adaptée aux besoins spécifiques de votre entreprise. En optant pour ce plan, vous bénéficiez de services supplémentaires tels que la gestion des réseaux sociaux et la création de vidéos personnalisées, ce qui vous permet de mieux atteindre votre public cible et de différencier votre entreprise de la concurrence.
                    </p>
                  </div>
                </div>

                <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div onClick={openAccordion} className="title">
                    <h6>Pouvez-vous m'expliquer en détail comment votre équipe gère les réseaux sociaux pour promouvoir mon entreprise ?</h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="">
                    Notre équipe gère vos réseaux sociaux en élaborant une stratégie de contenu engageante et en publiant régulièrement du contenu pertinent pour votre audience. Nous surveillons également l'engagement et les commentaires, répondant rapidement aux questions et aux préoccupations des utilisateurs pour renforcer la présence de votre marque sur les réseaux sociaux.
                    </p>
                  </div>
                </div>

                <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div onClick={openAccordion} className="title">
                    <h6>Quels types de vidéos proposez-vous pour promouvoir mon activité et comment sont-elles réalisées ?</h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="">
                    Nous proposons différents types de vidéos pour promouvoir votre activité, notamment des vidéos promotionnelles, des témoignages clients, des tutoriels produits, etc. Nos vidéos sont réalisées par des professionnels expérimentés et sont adaptées à votre image de marque et à vos objectifs marketing.
                    </p>
                  </div>
                </div>

                <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div onClick={openAccordion} className="title">
                    <h6>Quels sont les avantages de travailler avec votre équipe d'experts pour le référencement de mon entreprise ?</h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="">
                    Travailler avec notre équipe d'experts vous garantit une approche personnalisée et axée sur les résultats pour le référencement de votre entreprise. Nous mettons à votre disposition notre expertise et notre expérience pour élaborer des stratégies efficaces qui répondent aux besoins spécifiques de votre entreprise et de votre secteur d'activité.
                    </p>
                  </div>
                </div>

                <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div onClick={openAccordion} className="title">
                    <h6>Comment puis-je savoir si ma demande personnalisée peut être réalisée et quelles sont les conditions associées ?</h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="">
                    Pour savoir si votre demande personnalisée peut être réalisée et connaître les conditions associées, nous vous invitons à entrer directement en contact avec notre équipe. Nous serons heureux d'évaluer vos besoins et de vous proposer une solution adaptée à votre entreprise.
                    </p>
                  </div>
                </div>

                <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div onClick={openAccordion} className="title">
                    <h6>Quelle est votre approche pour garantir la satisfaction client et les résultats optimaux dans mon secteur d'activité ?</h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="">
                    Notre approche pour garantir la satisfaction client et les résultats optimaux dans votre secteur d'activité repose sur une communication ouverte et transparente, une écoute attentive de vos besoins et des objectifs clairs. Nous nous engageons à fournir un service de haute qualité et à travailler en étroite collaboration avec vous pour atteindre vos objectifs commerciaux.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="line-overlay up opacity-7">
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

export default FAQS;
