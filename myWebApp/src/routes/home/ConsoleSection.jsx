import Sticker from "../../components/sticker/Sticker";

import popular from "../../assets/home-images/popular.jpg";
import latest from "../../assets/home-images/latest.jpg";

const ConsoleSection = () => {
  return (
    <section className="alt-bg-color">
      <div className="container">
        <div className="simple-grid">
          <div className="simple-col-2 early-full-width">
            <div className="simple-col-img hover-border">
              <img src={popular} alt="popular-img" />
              <div className="complex-img-text">
                <Sticker title="Most Popular" />
                <h2>Genshin Impact</h2>
              </div>
            </div>
          </div>
          <div className="simple-col-2 early-full-width">
            <div className="simple-col-img hover-border">
              <img src={latest} alt="latest-img" />
              <div className="complex-img-text">
                <Sticker title="Latest Game" />
                <h2>Modern Warfare III</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsoleSection;
