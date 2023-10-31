import SectionHeader from "../../components/section-header/SectionHeader";
import blog1 from "../../assets/home-images/blog-01.jpg";
import blog2 from "../../assets/home-images/blog-02.jpg";
import blog3 from "../../assets/home-images/blog-03.jpg";

const NewsSection = () => {
  return (
    <section className="container">
      <SectionHeader title="Latest Blog Entries" />
      <div className="simple-grid">
        <div className="simple-grid-card">
          <div className="grid-card-content">
            <div className="card-image">
              <img src={blog1} alt="blog-img" />
            </div>
            <p>By Tom Landry on August 22, 2023</p>
            <h4>
              Resident Evil Village DLC Winters’ Expansion launches October 28
            </h4>
          </div>
        </div>
        <div className="simple-grid-card">
          <div className="grid-card-content">
            <div className="card-image">
              <img src={blog2} alt="blog-img" />
            </div>
            <p>By Nancy Smith on September 2, 2023</p>
            <h4>The Witcher 3. Meaning of all this simbols</h4>
          </div>
        </div>
        <div className="simple-grid-card">
          <div className="grid-card-content">
            <div className="card-image">
              <img src={blog3} alt="blog-img" />
            </div>
            <p>By Ellie Jones on July 30, 2023</p>
            <h4>
              Players’ Choice: Final Fantasy VII Remake Voted April’s Best New
              Game
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
