function Contact(){
    return(
        <section id="contact" className="contact">
        {/* <!--  Section Title --> */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Contact</h2>
          <p>Get in touch for personalized assistance</p>
        </div>
        {/* <!-- End Section Title --> */}
  
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            <div className="col-lg-6">
              <div className="row gy-4">
                <div className="col-md-6">
                  <div className="info-item" data-aos="fade" data-aos-delay="200">
                    <i className="bi bi-geo-alt"></i>
                    <h3>Address</h3>
                    <p>KIET Ghaziabad, Muradnagar</p>
                    <p>UttarPradesh, IN 201206</p>
                  </div>
                </div>
                {/* <!-- End Info Item --> */}
  
                <div className="col-md-6">
                  <div className="info-item" data-aos="fade" data-aos-delay="300">
                    <i className="bi bi-telephone"></i>
                    <h3>Call Us</h3>
                    <p>1090</p>
                    <p>911</p>
                  </div>
                </div>
                {/* <!-- End Info Item --> */}
  
                <div className="col-md-6">
                  <div className="info-item" data-aos="fade" data-aos-delay="400">
                    <i className="bi bi-envelope"></i>
                    <h3>Email Us</h3>
                    <p>singhaayushker@gmail.com</p>
                    <p>aayushker.2226cseai1@kiet.edu</p>
                  </div>
                </div>
                {/* <!-- End Info Item --> */}
  
                <div className="col-md-6">
                  <div className="info-item" data-aos="fade" data-aos-delay="500">
                    <i className="bi bi-clock"></i>
                    <h3>Open Hours</h3>
                    <p>Monday - Friday</p>
                    <p>9:10AM - 04:50PM</p>
                  </div>
                </div>
                {/* <!-- End Info Item --> */}
              </div>
            </div>
  
            <div className="col-lg-6">
              <form className="php-email-form" id="contactForm">
                {/* <!-- <form action="http://127.0.0.1:5500/send-email" method="post" className="php-email-form" data-aos="fade-up" data-aos-delay="200"> --> */}
  
                <div className="row gy-4">
                  <div className="col-md-6">
                    <input type="text" name="name" id="name" className="form-control" placeholder="Your Name" required />
                  </div>
  
                  <div className="col-md-6">
                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                  </div>
  
                  <div className="col-md-12">
                    <input type="text" className="form-control" name="subject" id="phone" placeholder="Subject" required />
                  </div>
  
                  <div className="col-md-12">
                    <textarea className="form-control" name="message" rows="6" id="message" placeholder="Message" required></textarea>
                  </div>

                </div>
  
                <div className="col-md-12 text-center">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">
                        Your message has been sent. Thank you!
                    </div>

                    {/* <button type="submit" onClick={sendEmail}>Send Message</button> */}
                </div>
              </form>
            </div>
            {/* <!-- End Contact Form --> */}
          </div>
        </div>
      </section>
    )
}

export default Contact;