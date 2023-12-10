import SectionHeader from "../../components/section-header/SectionHeader";
const deal1 =
  "https://res.cloudinary.com/dp8afa9xy/image/upload/v1702155646/testWeb/mvx51bhm2yscf4eojwir.jpg";
const deal2 =
  "https://res.cloudinary.com/dp8afa9xy/image/upload/v1702155653/testWeb/kn9a9rpnb3xwj6zc8gkx.jpg";
const deal3 =
  "https://res.cloudinary.com/dp8afa9xy/image/upload/v1702155660/testWeb/wbxvhfhg574vg9yxccyv.jpg";
const deal4 =
  "https://res.cloudinary.com/dp8afa9xy/image/upload/e_improve:outdoor/c_scale,h_779,w_1200/testWeb/s1jjdtsmief17rghmjcq.jpg";
const deal5 =
  "https://res.cloudinary.com/dp8afa9xy/image/upload/e_improve:outdoor/c_scale,h_779,w_1200/testWeb/efowgkudd2ocwhh1ekot.jpg";

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
