const Home = () => {
  return (
    <main>
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="phone_banner.jpg" className="d-block w-100" alt="Phone Banner" />
          </div>
          <div className="carousel-item">
            <img src="car_banner.jpg" className="d-block w-100" alt="Car Banner" />
          </div>
          <div className="carousel-item">
            <img src="book_banner.jpg" className="d-block w-100" alt="Book Banner" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container">
        <div className="container marketing mt-5">
          <div className="row">
            <div className="col-lg-4">
              <img
                src="tree.png"
                alt="Item Tree"
                className="rounded-5 mb-2"
                style={{ height: "140px", width: "140px" }}
              />
              <h2 className="fw-normal">Sustainability & Value</h2>
              <p className="fs-5">Give Your Unused Items a New Life!</p>
            </div>
            <div className="col-lg-4">
              <img
                src="hand.png"
                alt="Hand Holding Phone"
                className="rounded-5 mb-2"
                style={{ height: "140px", width: "140px" }}
              />
              <h2 className="fw-normal">Buy & Sell</h2>
              <p className="fs-5">Your Next Favorite Item is Just a Click Away.</p>
            </div>
            <div className="col-lg-4">
              <img
                src="map.png"
                alt="Map With Location Markers"
                className="rounded-5 mb-2"
                style={{ height: "140px", width: "140px" }}
              />
              <h2 className="fw-normal">Community-Focused</h2>
              <p className="fs-5">Join Our Community of Conscious Consumers.</p>
            </div>
          </div>

          <hr className="featurette-divider" />

          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading fw-normal lh-1">Reduce Waste, Reuse, Repeat.</h2>
              <p className="lead">
                At 2ndHand, every purchase is a step toward a more sustainable future. By choosing pre-loved items,
                you&apos;re not only giving products a second life but also helping to reduce waste and protect the
                planet. From vintage treasures to everyday essentials, discover the joy of shopping consciously and
                making a positive impact. Together, we can build a community that values reuse and reinvention.
              </p>
            </div>
            <div className="col-md-5">
              <img src="reduce.png" alt="Reduce Reuse Recycle Symbol" style={{ height: "400px", width: "400px" }} />
            </div>
          </div>

          <hr className="featurette-divider" />

          <div className="row featurette">
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading fw-normal lh-1">Convenience & Ease</h2>
              <p className="lead">
                Say goodbye to clutter and hello to simplicity with 2ndHand. Our user-friendly platform makes it easier
                than ever to buy and sell second-hand items. List your items in minutes or browse a curated selection of
                pre-loved treasures from the comfort of your home. Whether you&apos;re decluttering or hunting for
                unique finds, we&apos;ve got you covered—convenience has never looked this good!
              </p>
            </div>
            <div className="col-md-5 order-md-1">
              <img src="cart.png" alt="Shopping Cart" style={{ height: "400px", width: "400px" }} />
            </div>
          </div>

          <hr className="featurette-divider" />

          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading fw-normal lh-1">Pre-Owned. Premium. Affordable.</h2>
              <p className="lead">
                Why break the bank when you can own premium items at unbeatable prices? At 2ndHand, we bring you the
                best deals on high-quality, pre-owned goods—from designer fashion to top-notch gadgets. Experience
                luxury for less while giving these items a new purpose. With 2ndHand, affordability and style go hand in
                hand.
              </p>
            </div>
            <div className="col-md-5">
              <img src="watch.png" alt="Watch" style={{ height: "400px", width: "400px" }} />
            </div>
          </div>

          <hr className="featurette-divider" />
        </div>
      </div>

      <footer className="container">
        <p className="float-end">
          <a href="#">Back to top</a>
        </p>
        <p>
          &copy; 2024 2ndHand, Inc.
        </p>
      </footer>
    </main>
  );
};

export default Home;
