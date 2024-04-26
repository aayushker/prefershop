function FAQ(){
    return (
        <section id="faq" className="faq">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div className="content px-xl-5">
                <h3>
                  <span>Frequently Asked </span><strong>Questions</strong>
                </h3>
                <p>
                  We have answered the most common questions but if you have any
                  other questions you can get in touch with us through the
                  contact form below.
                </p>
              </div>
            </div>
  
            <div className="col-lg-8" data-aos="fade-up" data-aos-delay="200">
              <div className="faq-container">
                <div className="faq-item faq-active">
                  <h3>
                    <span className="num">1.</span>
                    <span>How does your website help me find the right tech
                      product?
                    </span>
                  </h3>
                  <div className="faq-content">
                    <p>
                      Our website utilizes advanced algorithms to analyze your
                      budget, preferences, and needs. We then provide
                      personalized recommendations based on expert reviews and
                      user feedback.
                    </p>
                  </div>
                  <i className="faq-toggle bi bi-chevron-right"></i>
                </div>
                {/* <!-- End Faq item--> */}
  
                <div className="faq-item">
                  <h3>
                    <span className="num">2.</span>
                    <span>Are the product recommendations unbiased?</span>
                  </h3>
                  <div className="faq-content">
                    <p>
                      Absolutely. Our recommendations are solely based on your
                      input, budget constraints, and the expertise of our team.
                      We don&apos;t promote any specific brands or products for
                      financial gain.
                    </p>
                  </div>
                  <i className="faq-toggle bi bi-chevron-right"></i>
                </div>
                {/* <!-- End Faq item--> */}
  
                <div className="faq-item">
                  <h3>
                    <span className="num">3.</span>
                    <span>How do I submit my preferences to receive personalized
                      recommendations?
                    </span>
                  </h3>
                <div className="faq-content">
                    <p>
                        It&apos;s easy! Simply navigate to our homepage, answer a few
                        quick questions about your budget, preferences, and
                        requirements. Our system will then generate a tailored
                        list of tech products that match your criteria.
                    </p>
                </div>
                  <i className="faq-toggle bi bi-chevron-right"></i>
                </div>
                {/* <!-- End Faq item--> */}
  
                <div className="faq-item">
                  <h3>
                    <span className="num">4.</span>
                    <span>Do you consider the latest tech trends in your
                      recommendations?
                    </span>
                  </h3>
                  <div className="faq-content">
                    <p>
                      Absolutely. Our system is designed to stay updated with
                      the latest tech trends. We take into account the newest
                      releases, customer reviews, and expert insights to ensure
                      our recommendations reflect the current market landscape.
                    </p>
                  </div>
                  <i className="faq-toggle bi bi-chevron-right"></i>
                </div>
                {/* <!-- End Faq item--> */}
  
                <div className="faq-item">
                  <h3>
                    <span className="num">5.</span>
                    <span>Can I trust the expert advice provided on your platform?
                    </span>
                  </h3>
                  <div className="faq-content">
                    <p>
                      Yes, our team comprises tech enthusiasts and experts who
                      thoroughly research and evaluate products. Their
                      recommendations are unbiased and tailored to help you make
                      informed decisions.
                    </p>
                  </div>
                  <i className="faq-toggle bi bi-chevron-right"></i>
                </div>
                {/* <!-- End Faq item--> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default FAQ;