import React from 'react';

function Blog() {
  return (
    <section className="blog-list-half section-padding sub-bg">
      <div className="container">
        <div className="sec-head mb-80">
          <h6 className="sub-title main-color mb-25">Notre blog</h6>
          <div className="bord pt-25 bord-thin-top d-flex align-items-center">
            <h2 className="fw-600 d-rotate wow">
              <span className="rotate-text">
              Lire le dernier <span className="fw-200">mises à jour</span>
              </span>
            </h2>
            <div className="ml-auto">
              <a href="/dark/page-contact" className="go-more">
                <span className="text">Travaillez avec nous</span>
                <span className="icon ti-arrow-top-right"></span>
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="item main-bg md-mb50">
              <div className="row rest">
                <div className="col-lg-6 col-md-5 img rest">
                  <img
                    src="/dark/assets/imgs/blog/b/2.png"
                    alt=""
                    className="img-post"
                  />
                  <div className="author d-flex align-items-center">
                    <div>
                      <div className="fit-img icon-img-50 circle">
                        <img src="/dark/assets/imgs/blog/author.png" alt="" />
                      </div>
                    </div>
                    <div className="ml-15 fz-14">
                      <div>
                        <span className="opacity-7">Posted by</span>
                        <br />
                        Osmia.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-7 cont valign">
                  <div className="full-width">
                    <div className="tags mb-15">
                      <a href="/dark/blog-details">Image de marque en ligne</a>
                    </div>
                    <h5>
                      <a href="/dark/blog-details">
                      Stimuler le commerce en ligne avec l'optimisation du référencement.
                      </a>
                    </h5>
                    <span className="date fz-12 ls1 text-u opacity-7 mt-80">
                      10 May, 2024
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="item main-bg">
              <div className="row rest">
                <div className="col-lg-6 col-md-5 img rest">
                  <img
                    src="/dark/assets/imgs/blog/b/3.png"
                    alt=""
                    className="img-post"
                  />
                  <div className="author d-flex align-items-center">
                    <div>
                      <div className="fit-img icon-img-50 circle">
                        <img src="/dark/assets/imgs/blog/author.png" alt="" />
                      </div>
                    </div>
                    <div className="ml-15 fz-14">
                      <div>
                        <span className="opacity-7">Posted by</span>
                        <br />
                        Osmia.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-7 cont valign">
                  <div className="full-width">
                    <div className="tags mb-15">
                      <a href="/dark/blog-details">Google Ads</a>
                    </div>
                    <h5>
                      <a href="/dark/blog-details">
                      Classement en ligne avec annonces Google.
                      </a>
                    </h5>
                    <span className="date fz-12 ls1 text-u opacity-7 mt-80">
                      May 12, 2024
                    </span>
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

export default Blog;
