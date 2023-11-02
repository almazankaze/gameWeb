import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import PercentOutlinedIcon from "@mui/icons-material/PercentOutlined";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";

import "./perks.scss";

const Perks = () => {
  return (
    <section className="container">
      <div className="perks-container">
        <div className="perk-card">
          <div className="perk-icon">
            <LocalShippingOutlinedIcon />
          </div>
          <div className="perk-info">
            <h4>Free Shipping</h4>
            <p className="desc-text">Orders over $30</p>
          </div>
        </div>
        <div className="perk-card">
          <div className="perk-icon">
            <AttachMoneyOutlinedIcon />
          </div>
          <div className="perk-info">
            <h4>Money Return</h4>
            <p className="desc-text">Guarantee in 7 days</p>
          </div>
        </div>
        <div className="perk-card">
          <div className="perk-icon">
            <PercentOutlinedIcon />
          </div>
          <div className="perk-info">
            <h4>Member Discount</h4>
            <p className="desc-text">Orders over $60</p>
          </div>
        </div>
        <div className="perk-card">
          <div className="perk-icon">
            <HeadsetMicOutlinedIcon />
          </div>
          <div className="perk-info">
            <h4>Online Support</h4>
            <p className="desc-text">Support 24/7</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Perks;
