const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="heroContent">
        <h1>YOUR FEET DESERVES THE BEST</h1>
        <p>
          YOUR FEET DESERVES THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.
          YOUR FEET DESERVES THE BEST AND WE'RE HERE TO HELP YOU.
        </p>
        <div className="heroButton">
          <button>Shop Now</button>
          <button className="secondary-button">Category</button>
        </div>
        <div className="shopping">
          <p>Also available on</p>
          <div className="brandIcons">
            <img src="./images/flipkart.png" alt="Flipkart Logo" />
            <img src="./images/amazon.png" alt="Amazon Logo" />
          </div>
        </div>
      </div>
      <div className="heroImage">
        <img src="./images/shoe_image.png" alt="Show Image" />
      </div>
    </main>
  );
};
export default HeroSection;
