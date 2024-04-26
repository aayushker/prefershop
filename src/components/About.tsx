import React from 'react'

function About(){
  return (
    <>
    <section id="about" className="about">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row align-items-xl-center gy-5">
          <div className="col-xl-5 content">
            <h3>About Us</h3>
            <h2>Who are we?</h2>
            <p>
              We are here to help you select the right product according to
              your needs!
            </p>
            <a href="#team" className="read-more"><span>Know Us</span><i className="bi bi-arrow-right"></i></a>
          </div>

          <div className="col-xl-7">
            <div className="row gy-4 icon-boxes">
            <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
                <div className="icon-box">
                    <i className="bi bi-clipboard-pulse"></i>
                    <h3>Curated for &apos;You&apos;</h3>
                    <p>
                        The algorithm detects your needs and suggests you the
                        <strong>best possible product</strong>.
                    </p>
                </div>
            </div>
               {/* End Icon Box */}

              <div className="col-md-6" data-aos="fade-up" data-aos-delay="300">
                <div className="icon-box">
                  <i className="bi bi-buildings"></i>
                  <h3>Easier than ever</h3>
                  <p>
                    Get the right product to fulfill your needs in
                    <strong>just some clicks</strong>.
                  </p>
                </div>
              </div>
               {/* End Icon Box */}

              <div className="col-md-6" data-aos="fade-up" data-aos-delay="500">
                <div className="icon-box">
                  <i className="bi bi-graph-up-arrow"></i>
                  <h3>Faster</h3>
                  <p>
                    <strong>Saves hours</strong> of tirelessly searching for
                    the right product.
                  </p>
                </div>
              </div>
               {/* End Icon Box */}

              <div className="col-md-6" data-aos="fade-up" data-aos-delay="400">
                <div className="icon-box">
                  <i className="bi bi-command"></i>
                  <h3>Get the best Deal</h3>
                  <p>
                    We not only suggest you the best product but also suggest
                    you the place where you can get it at
                    <strong>best price</strong>.
                  </p>
                </div>
              </div>
               {/* End Icon Box */}
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default About
