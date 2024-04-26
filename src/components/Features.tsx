import Image from "next/image";

function Features() {
  return (
    <section id="features" className="features">
      Section Title
      <div className="container section-title" data-aos="fade-up">
        <h2>Current lineup</h2>
        <p>The services we offer in the present time</p>
      </div>
      End Section Title
      <div className="container">
        <div
          className="row gy-4 align-items-stretch justify-content-between features-item"
          id="phone"
        >
          <div
            className="col-lg-4 d-flex justify-content-center flex-column"
            data-aos="fade-up"
          >
            <h3>Mobile Phones</h3>
            <p>
              We have options for you in brands like Apple, Samsung, Mi,
              Motorola, Oneplus ,and many more.
            </p>
            <a
              href="./assets/html/mobile.html"
              className="btn btn-get-started align-self-start"
            >
              Explore
            </a>
          </div>
          <div
            className="col-lg-5 d-flex align-items-center features-img-bg"
            data-aos="zoom-out"
          >
            <Image
              src="https://img.freepik.com/free-vector/woman-man-holding-coffee-while-look-phone-check-social-media_10045-652.jpg"
              className="img-fluid"
              alt=""
              width={500}
              height={500}
            />
          </div>
        </div>
        Features Item
        <div
          className="tablet row gy-4 align-items-stretch justify-content-between features-item"
          id="tablet"
        >
          <div
            className="col-lg-5 d-flex align-items-center features-img-bg"
            data-aos="zoom-out"
          >
            <Image
              src="https://cdn1.vectorstock.com/i/1000x1000/59/05/woman-showing-tablet-vector-21615905.jpg"
              className="img-fluid"
              alt=""
              width={500}
              height={500}
            />
          </div>
          <div
            className="col-lg-5 d-flex justify-content-center flex-column"
            data-aos="fade-up"
          >
            <h3>Tablets</h3>
            <p>
              We have a wide variety of options to choose from in Tablets be it
              iPad, Galaxy Book or even a Kindle!
            </p>
            <a
              href="./assets/html/tablet.html"
              className="btn btn-get-started align-self-start"
            >
              Explore
            </a>
          </div>
        </div>
        Features Item
        <div
          className="row gy-4 align-items-stretch justify-content-between features-item"
          id="laptop"
        >
          <div
            className="col-lg-4 d-flex justify-content-center flex-column"
            data-aos="fade-up"
          >
            <h3>Laptops</h3>
            <p>
              You can compare and find the best option available for you in the
              range of our wide variety of products.
            </p>
            <a
              href="./assets/html/laptop.html"
              className="btn btn-get-started align-self-start"
            >
              Explore
            </a>
          </div>
          <div
            className="col-lg-6 d-flex align-items-center features-img-bg"
            data-aos="zoom-out"
          >
            <Image
              src="https://img.freepik.com/premium-vector/set-people-are-using-laptop-vector-illustration_7087-474.jpg"
              className="img-fluid"
              alt=""
              width={500}
              height={500}
            />
          </div>
        </div>
        Features Item
        <div
          className="row gy-4 align-items-stretch justify-content-between features-item"
          id="audio"
        >
          <div
            className="col-lg-4 align-items-center features-img-bg"
            data-aos="zoom-out"
          >
            {/* <img src="assets/img/audio.png" className="img-fluid" alt="">  */}
            <Image
              src="https://img.freepik.com/premium-vector/cartoon-drawing-woman-with-large-headphones_147933-4902.jpg"
              className="img-fluid"
              alt=""
              width={500}
              height={500}
            />
          </div>
          <div
            className="col-lg-5 d-flex justify-content-center flex-column"
            data-aos="fade-up"
          >
            <h3>Audio Products</h3>
            <p>
              We can help you choose the best Audio Product to match your vibe,
              you can choose from brands like JBL, Sony, Boat, Marshal, and many
              more. <br />
              We got you all covered :)
            </p>
            <ul>
              <li>
                <i className="bi bi-check"></i> <span>Headphone</span>
              </li>
              <li>
                <i className="bi bi-check"></i>
                <span>Neckband</span>
              </li>
              <li>
                <i className="bi bi-check"></i> <span>EarBuds</span>.
              </li>
              <li>
                <i className="bi bi-check"></i> <span>Speakers</span>.
              </li>
            </ul>
            <a
              href="./assets/html/audio.html"
              className="btn btn-get-started align-self-start"
            >
              Explore
            </a>
          </div>
        </div>
        Features Item
      </div>
    </section>
  );
}

export default Features;
