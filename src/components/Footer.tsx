function Footer(){
    return (
        <footer id="footer" className="footer">
        <div className="container footer-top">
          <div className="row gy-4">
            <div className="col-lg-5 col-md-12 footer-about">
              <a href="index.html" className="logo d-flex align-items-center">
                <span>PickZ</span>
              </a>
              <p>Providing solutions to every individual.</p>
              <div className="social-links d-flex mt-4">
                <a href="https://twitter.com/aayushker"><i className="bi bi-twitter"></i></a>
                <a href="https://github.com/aayushker/"><i className="bi bi-github"></i></a>
                <a href="https://instagram.com/aayushkers"><i className="bi bi-instagram"></i></a>
                <a href="https://www.linkedin.com/in/aayushker/"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
    
            <div className="col-lg-2 col-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About us</a></li>
                <li><a href="#team">Know us</a></li>
                <li>
                  <a href="./assets/supplements/t&c.html">Terms & Conditions</a>
                </li>
                <li>
                  <a href="./assets/supplements/privacypolicy.html">Privacy policy</a>
                </li>
              </ul>
            </div>
    
            <div className="col-lg-2 col-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li><a href="#phone">Phone</a></li>
                <li><a href="#tablet">Tablet</a></li>
                <li><a href="#laptop">Laptop</a></li>
                <li><a href="#audio">Audio Products</a></li>
              </ul>
            </div>
    
            <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
              <h4>Contact Us</h4>
              <p>KIET Ghaziabad,</p>
              <p>Muradnagar, UttarPradesh</p>
              <p>India</p>
              <p className="mt-4"><strong>Phone:</strong> <span>1090</span></p>
              <p>
                <strong>Email:</strong> <span>aayushker.2226cseai1@kiet.edu</span>
              </p>
            </div>
          </div>
        </div>
    
        <div className="container copyright text-center mt-4">
          <p>
            &copy; <span>Copyright</span> <strong className="px-1">PickZ</strong>
            <span>All Rights Reserved</span>
          </p>
          <div className="credits">
            Designed by
            <a href="https://github.com/aayushker" target="_blank">Aayushker Singh</a>
          </div>
        </div>
      </footer>
    )
}

export default Footer;