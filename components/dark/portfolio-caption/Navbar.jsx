'use client';
import React, { useEffect, useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleScroll() {
    const bodyScroll = window.scrollY;
    const navbar = document.querySelector('.navbar');

    if (bodyScroll > 300) navbar.classList.add('nav-scroll');
    else navbar.classList.remove('nav-scroll');
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  function toggleSearch() {
    let form = document.querySelector('.navbar .search-form');
    let closeBtn = document.querySelector('.search-form .close-search');

    form.classList.toggle('open');
    if (form.classList.contains('open')) closeBtn.style.display = 'block';
    else closeBtn.style.display = 'none';
  }
  function toggleMenu() {
    const hamenu = document.querySelector('.hamenu');

    setIsOpen((prev) => !prev);

    setTimeout(() => {
      if (document.querySelector('.hamenu').classList.contains('open')) {
        document.querySelector('.hamenu').style.left = '0';
      } else {
        document.querySelector('.hamenu').style.left = '-100%';
      }
    }, 300);
  }

  function closeMenu() {
    const hamenu = document.querySelector('.hamenu');

    setIsOpen(false);
    setTimeout(() => {
      hamenu.style.left = '-100%';
    }, 300);
  }

  function handleMouseEnter(event) {
    document.querySelectorAll('ul.main-menu li').forEach((item) => {
      item.classList.add('hoverd');
    });
    event.currentTarget.classList.remove('hoverd');
  }

  function handleMouseLeave() {
    document
      .querySelectorAll('ul.main-menu li')
      .forEach((item) => item.classList.remove('hoverd'));
  }

  function toggleSubMenu(event) {
    const subMenu = event.currentTarget.querySelector('.sub-menu');
    const SubMenu2 = event.currentTarget.querySelector('.sub-menu2');
    if (subMenu) {
      if (subMenu.classList.contains('sub-open') && SubMenu2 == null) {
        document.querySelectorAll('.sub-menu').forEach((item) => {
          item.classList.remove('sub-open');
          item.style.maxHeight = '0';
          item.previousElementSibling.children[0].classList.remove('dopen');
        });
        subMenu.classList.remove('sub-open');
        subMenu.style.maxHeight = '0';
        subMenu.previousElementSibling.children[0].classList.remove('dopen');
      } else if (!subMenu.classList.contains('sub-open')) {
        if (SubMenu2 == null) {
          document.querySelectorAll('.sub-menu').forEach((item) => {
            item.classList.remove('sub-open');
            item.style.maxHeight = '0';
            item.previousElementSibling.children[0].classList.remove('dopen');
          });

          subMenu.classList.add('sub-open');
          subMenu.style.maxHeight = '450px';
          subMenu.previousElementSibling.children[0].classList.add('dopen');
        } else {
          subMenu.classList.add('sub-open');
          subMenu.style.maxHeight = '450px';
          subMenu.previousElementSibling.children[0].classList.add('dopen');
        }
      }
    }
  }
  function toggleSubMenu2(event) {
    const SubMenu2 = event.currentTarget.querySelector('.sub-menu2');
    if (SubMenu2) {
      if (SubMenu2.classList.contains('sub-open')) {
        event.currentTarget.querySelectorAll('.sub-menu2').forEach((item) => {
          item.classList.remove('sub-open');
          item.style.maxHeight = '0';
          item.previousElementSibling.children[0].classList.remove('dopen');
        });
        SubMenu2.classList.remove('sub-open');
        SubMenu2.style.maxHeight = '0';
        SubMenu2.previousElementSibling.children[0].classList.remove('dopen');
      } else if (!SubMenu2.classList.contains('sub-open')) {
        event.currentTarget.querySelectorAll('.sub-menu2').forEach((item) => {
          item.classList.remove('sub-open');
          item.style.maxHeight = '0';
          item.previousElementSibling.children[0].classList.remove('dopen');
        });
        SubMenu2.classList.add('sub-open');
        SubMenu2.style.maxHeight = '450px';
        SubMenu2.previousElementSibling.children[0].classList.add('dopen');
      }
    }
  }

  function handleDropdownMouseMove(event) {
    event.currentTarget.querySelector('.dropdown-menu').classList.add('show');
  }

  function handleDropdownMouseLeave(event) {
    event.currentTarget
      .querySelector('.dropdown-menu')
      .classList.remove('show');
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bord blur">
        <div className="container">
          <a className="logo icon-img-100" href="/">
            <img src="/dark/assets/imgs/logo-light.png" alt="logo" />
          </a>

          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li
                onMouseLeave={handleDropdownMouseLeave}
                onMouseMove={handleDropdownMouseMove}
                className="nav-item dropdown"
              >
                <a
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="rolling-text">Travaillez avec nous</span>
                </a>
                 <div className="dropdown-menu">
                  <a className="dropdown-item" href="https://calendly.com/contact-sl29/30min">
                  Reserve a Call
                  </a>
                 
                </div>
              </li>
              <li
                onMouseLeave={handleDropdownMouseLeave}
                onMouseMove={handleDropdownMouseMove}
                className="nav-item dropdown"
              >
                <a
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="rolling-text">Portefeuille</span>
                </a>
                <div className="dropdown-menu">
                  <div className="container">
                    <div className="row">
                      
                        <div className="clumn">
                          <div className="title">
                            <h6 className="sub-title ls1">
                            <a
                                className="dropdown-item"
                                href="/dark/portfolio-standard"
                              >
                               Portefeuille 
                              </a>
                            </h6>
                          </div>
                          <div className="links row">
                            <div className="col-lg-4">
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              
              </li>
              <li
                onMouseLeave={handleDropdownMouseLeave}
                onMouseMove={handleDropdownMouseMove}
                className="nav-item dropdown"
              >
                <a
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="rolling-text">En savoir plus</span>
                </a>
                <ul className="dropdown-menu">
                  <li className="dropdown-item">
                    <a href="/dark/page-about">
                    À propos de nous<i className="fas "></i>
                    </a>
                  </li>
                  <li className="dropdown-item">
                    <a href="/dark/page-services">
                    Prestations de service<i className="fas"></i>
                    </a>
                  </li>
                  <li className="dropdown-item">
                    <a href="/dark/page-contact">
                    Contactez-nous{' '}
                      <i className="fas"></i>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/dark/page-FAQS">
                      FAQS
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/dark/page-contact">
                  <span className="rolling-text">Contact Us</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="search-form">
            <div className="form-group">
              <input type="text" name="search" placeholder="Search" />
              <button>
                <span className="pe-7s-search"></span>
              </button>
            </div>
            <div onClick={toggleSearch} className="search-icon">
              <span className="pe-7s-search open-search"></span>
              <span className="pe-7s-close close-search"></span>
            </div>
          </div>
          <div className="topnav">
            <div onClick={toggleMenu} className="menu-icon cursor-pointer">
              <span className="icon ti-align-right"></span>
            </div>
          </div>
        </div>
      </nav>

      <div className={`hamenu ${isOpen == true ? 'open' : ''}`}>
        <div className="logo icon-img-100">
          <img src="/dark/assets/imgs/logo-light.png" alt="" />
        </div>
        <div
          onClick={closeMenu}
          className="close-menu cursor-pointer ti-close"
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-2">
              <div className="menu-text">
                <div className="text">
                  <h2>Menu</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="menu-links">
                <ul className="main-menu rest">
                  <li
                    onMouseLeave={handleMouseLeave}
                    onMouseEnter={handleMouseEnter}
                    onClick={toggleSubMenu}
                  >
                    <div className="o-hidden">
                      <div className="link cursor-pointer dmenu">
                        <span className="fill-text" data-text="Travaillez avec nous.">
                        Travaillez avec nous.
                        </span>{' '}
                        <i></i>
                      </div>
                    </div>
                    <div className="sub-menu">
                      <ul>
                        <li>
                          <a href="/dark/home-main" className="sub-link">
                          Remplir le formulaire
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li
                    onMouseLeave={handleMouseLeave}
                    onMouseEnter={handleMouseEnter}
                    onClick={toggleSubMenu}
                  >
                    <div className="o-hidden">
                      <div className="link cursor-pointer dmenu">
                        <span className="fill-text" data-text="En savoir plus">
                          En savoir plus
                        </span>{' '}
                        <i></i>
                      </div>
                    </div>
                    <div className="sub-menu no-bord">
                      <ul>
                        <li onClick={toggleSubMenu2}>
                          <div className="o-hidden">
                            <div className="link cursor-pointer sub-dmenu">
                            <a href='/dark/page-about'>
                              <span className="fill-text" data-text="À propos de nous">
                                  À propos de nous
                              </span>{' '}
                              </a>
                              <i></i>
                            </div>
                          </div>

                          {/* <div className="sub-menu2">
                            <ul>
                              <li>
                                <a href="/dark/page-about" className="sub-link">
                                  About Us 
                                </a>
                              </li>
                              </ul>
                          </div> */}
                        </li>
                        <li onClick={toggleSubMenu2}>
                          <div className="o-hidden">
                            <div className="link cursor-pointer sub-dmenu">
                              <a href='/dark/page-services'>
                              <span className="fill-text" data-text="Prestations de service">
                                Prestations de service
                              </span>{' '}
                              </a>
                              <i></i>
                            </div>
                          </div>
                          {/* <div className="sub-menu2">
                            <ul>
                              <li>
                                <a
                                  href="/dark/page-services"
                                  className="sub-link"
                                >
                                  Services v1
                                </a>
                              </li>
                            </ul>
                          </div> */}
                        </li>
                        <li onClick={toggleSubMenu2}>
                          <div className="o-hidden">
                            <div className="link cursor-pointer sub-dmenu">
                              <a href='/dark/page-contact'>
                              <span className="fill-text" data-text="Contact">
                                Contact
                              </span>{' '}
                              </a>
                              <i></i>
                            </div>
                          </div>
                          {/* <div className="sub-menu2">
                            <ul>
                              <li>
                                <a
                                  href="/dark/page-contact"
                                  className="sub-link"
                                >
                                  Contact v1
                                </a>
                              </li>
                            </ul>
                          </div> */}
                        </li>
                        <li onClick={toggleSubMenu2}>
                          <div className="o-hidden">
                            <div className="link cursor-pointer sub-dmenu">
                              <a href='/dark/page-FAQS'>
                              <span className="fill-text" data-text="FAQS">
                                FAQS
                              </span>{' '}
                              </a>
                              <i></i>
                            </div>
                          </div>
                          {/* <div className="sub-menu2">
                            <ul>
                              <li>
                                <a href="/dark/page-FAQS" className="sub-link">
                                  FAQS
                                </a>
                              </li>
                            </ul>
                          </div> */}
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li
                    onMouseLeave={handleMouseLeave}
                    onMouseEnter={handleMouseEnter}
                    onClick={toggleSubMenu}
                  >
                    <div className="o-hidden">
                      <div className="link cursor-pointer dmenu">
                        <span className="fill-text" data-text="Portefeuille">
                        Portefeuille 
                        </span>{' '}
                        <i></i>
                      </div>
                    </div>
                    <div className="sub-menu no-bord">
                      <ul>
                        <li onClick={toggleSubMenu2}>
                          <div className="o-hidden">
                            <div className="link cursor-pointer sub-dmenu">
                              <a href='/dark/portfolio-standard'>
                              <span
                                className="fill-text"
                                data-text="Portefeuille"
                              >
                                Portefeuille
                              </span>{' '}
                              </a>
                              <i></i>
                            </div>
                          </div>
                          </li>
                      </ul>
                    </div>
                  </li>

                  <li
                    onMouseLeave={handleMouseLeave}
                    onMouseEnter={handleMouseEnter}
                    onClick={toggleSubMenu}
                  >
                    <div className="o-hidden">
                      <a href="/dark/page-contact" className="link">
                        <span className="fill-text" data-text="Contact Us">
                          Contact Us
                        </span>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="cont-info">
                <div className="item mb-50">
                  <h6 className="sub-title mb-15 opacity-7">Adresse</h6>
                  <h5>
                    Europe <br />
                  </h5>
                </div>
                <div className="item mb-50">
                  <h6 className="sub-title mb-15 opacity-7">Social Media</h6>
                  <ul className="rest social-text">
                    <li className="mb-10">
                      <a href="http://www.linkedin.com/in/osmia-agency-718278306" className="hover-this">
                        <span className="hover-anim">LinkedIn</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="item mb-40">
                  <h6 className="sub-title mb-15 opacity-7">Contact Us</h6>
                  <h5>
                  <a href="mailto:contact@osmiaagency.com">contact@osmiaagency.com</a>
                  </h5>

                  <h5 className="underline mt-10">
                          <a href="https://calendly.com/contact-sl29/30min" style={{backgroundColor: '#00adb5', color: '#eeeeee', borderRadius: '9px', padding: '16px', textDecoration: 'none'}}>
                        Reserve a call
                          </a>
                   </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
