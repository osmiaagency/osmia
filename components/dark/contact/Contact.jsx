import React from 'react';

function Contact() {
  return (
    <section className="contact section-padding sub-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 valign">
            <div className="sec-head md-mb80">
              <h2 className="text-u ls1 d-rotate wow">
                <span className="rotate-text">
                Faisons votre <br /> marque{' '}
                  <span className="fw-200">brillant!</span>
                </span>
              </h2>
              <p className="mt-20 mb-20">
              Si vous souhaitez travailler avec nous ou simplement nous contacter,
              Nous aimerions recevoir de vos nouvelles!
              </p>
              <div className="row">
                <div className="col-md-6">
                  <div className="morinfo mt-30">
                    <h6 className="mb-15">Adresse</h6>
                    <p>Europe</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="morinfo mt-30">
                    <h6 className="mb-15">Email</h6>
                    <a
                      href="mailto:contact@osmiaagency.com"
                      className="butn butn-md butn-bord-thin radius-30"
                    >
                     <span className="text">contact@osmiaagency.com</span>
                    </a>
                  </div>
                </div>
              </div>
                  <a
                    href="https://calendly.com/contact-sl29/30min"
                    className="butn butn-md butn-bord-thin radius-30 ml-6 mt-25"
                    style={{backgroundColor: '#00adb5', color: '#eeeeee'}}
                   >
                     <span className="text">Reserve a Call</span>
                  </a>
              <ul className="rest social-text d-flex mt-60">
                <li className="mr-30">
                  <a href="www.linkedin.com/in/osmia-agency-718278306" className="hover-this">
                    <span className="hover-anim">LinkedIn</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
