import SectionHeader from "../../components/section-header/SectionHeader";
import deal1 from "../../assets/home-images/deal-1.jpg";
import deal2 from "../../assets/home-images/deal-2.jpg";
import deal3 from "../../assets/home-images/deal-3.jpg";
import deal4 from "../../assets/home-images/deal-4.jpg";
import deal5 from "../../assets/home-images/deal-5.jpg";

const HotDealsSection = () => {
  return (
    <section className="alt-bg-color">
      <div className="container">
        <SectionHeader title="Hot Deals" />
        <div className="simple-grid">
          <div className="simple-col-2">
            <div className="simple-col-img">
              <img src={deal1} className="img-fade" alt="deal-img" />
              <div className="simple-img-text">
                <p>shop now</p>
                <hr />
              </div>
            </div>
          </div>
          <div className="simple-col-2">
            <div className="simple-col-img">
              <img src={deal2} className="img-fade" alt="deal-img" />
              <div className="simple-img-text">
                <p>shop now</p>
                <hr />
              </div>
            </div>
          </div>
          <div className="simple-col-3">
            <div className="simple-col-img">
              <img src={deal3} className="img-fade" alt="deal-img" />
              <div className="simple-img-text">
                <p>shop now</p>
                <hr />
              </div>
            </div>
          </div>
          <div className="simple-col-3">
            <div className="simple-col-img">
              <img src={deal4} className="img-fade" alt="deal-img" />
              <div className="simple-img-text">
                <p>shop now</p>
                <hr />
              </div>
            </div>
          </div>
          <div className="simple-col-3">
            <div className="simple-col-img">
              <img src={deal5} className="img-fade" alt="deal-img" />
              <div className="simple-img-text">
                <p>shop now</p>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotDealsSection;
