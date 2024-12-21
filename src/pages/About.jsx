const About = () => {
  return (
    <main className="about d-flex flex-column gap-5 px-3 mt-5 text-center">
      <div className="container">
        <h1>About 2ndHand</h1>
        <p className="lead">
          Welcome to 2ndHand, your trusted marketplace for pre-loved treasures. We believe that every item has a story
          to tell, and we&apos;re here to give those stories a new beginning. By buying and selling quality second-hand
          items, you can find unique pieces, reduce waste, and support a more sustainable world.
        </p>
      </div>
      <div className="container">
        <h1>How it works</h1>
        <p className="lead">Selling or buying with 2ndHand is straightforward:</p>
        <ul className="fs-4">
          <li className="list-group-item">
            <span className="fw-bold">Sell: </span>Easily list your items for sale with detailed descriptions and clear
            photos.
          </li>
          <li className="list-group-item">
            <span className="fw-bold">Buy: </span>Browse a wide variety of pre-loved items and find exactly what you
            need at a fraction of the cost.
          </li>
          <li className="list-group-item">
            <span className="fw-bold">Connect: </span>Make meaningful connections with others who share your passion for
            sustainable living.
          </li>
        </ul>
      </div>
      <div className="container">
        <h1>Join Us</h1>
        <p className="lead">
          Whether you&apos;re looking to give your items a second life or find something truly one-of-a-kind, 2ndHand is
          here to help. Together, we can make the world a better place, one pre-loved item at a time. Explore, shop, and
          save with purpose at 2ndHand.
        </p>
      </div>
    </main>
  );
};

export default About;
