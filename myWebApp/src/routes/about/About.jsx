import SectionHeader from "../../components/section-header/SectionHeader";

import about1 from "../../assets/about/about1.jpg";
import about2 from "../../assets/about/about2.png";

import "./about.scss";

const About = () => {
  return (
    <section className="container">
      <SectionHeader title="About Us" />
      <div className="about-section">
        <div className="about-text">
          <h2 className="secondary-color">Our Story</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            totam nam enim commodi iusto placeat suscipit a nemo neque similique
            rerum accusantium, odit porro eligendi praesentium officia
            consequatur, inventore minus. Aperiam labore, commodi atque ab
            tempora autem, amet deleniti sint sit dicta neque corrupti! Cumque
            vero minima sequi temporibus nesciunt nihil ex tempore quia maiores
            porro, perferendis asperiores cum assumenda. Eligendi porro,
            architecto aliquam maiores reiciendis at eum inventore consequatur
            aut unde natus soluta dolorum necessitatibus, deleniti beatae fugit
            corrupti. Omnis doloribus in facilis, beatae aspernatur excepturi
            dolor tenetur nisi?
          </p>
        </div>
        <div className="about-img">
          <img src={about1} alt="our story" />
        </div>
      </div>

      <div className="about-section about-reverse">
        <div className="about-img">
          <img src={about2} alt="our mission" />
        </div>
        <div className="about-text">
          <h2 className="secondary-color">Our Mission</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At odit
            minima pariatur reprehenderit ut ipsam temporibus nobis mollitia
            placeat magni perferendis illo, neque ipsum vero, quos illum aperiam
            quisquam assumenda. Hic, blanditiis inventore placeat vel earum
            eaque natus eligendi dolore, laudantium suscipit corporis et?
            Architecto eaque earum dicta modi harum mollitia quod laudantium et
            minima totam. Dolores, perspiciatis magnam. Aperiam?
          </p>
        </div>
      </div>
      <div className="about-section">
        <blockquote cite="">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
            adipisci minus saepe debitis dolorum! Autem perspiciatis id
            veritatis. Numquam nulla laboriosam quod temporibus aliquid nesciunt
            quaerat itaque sint repudiandae exercitationem?
          </p>
          <h4 align="right">-Ipsum Gibbus</h4>
        </blockquote>
      </div>
    </section>
  );
};

export default About;
