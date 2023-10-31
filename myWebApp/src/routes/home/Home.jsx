import HomeCarousel from "../../components/home-carousel/HomeCarousel";
import ConsoleSection from "./ConsoleSection";
import HotDealsSection from "./HotDealsSection";
import NewsSection from "./NewsSection";

const Home = () => {
  return (
    <>
      <HomeCarousel />
      <ConsoleSection />
      <HotDealsSection />
      <NewsSection />
    </>
  );
};

export default Home;
