import HomeCarousel from "../../components/home-carousel/HomeCarousel";
import ConsoleSection from "./ConsoleSection";
import HotDealsSection from "./HotDealsSection";
import ItemSection from "./ItemSection";
import NewsSection from "./NewsSection";
import Perks from "./Perks";

const Home = () => {
  return (
    <>
      <HomeCarousel />
      <Perks />
      <ConsoleSection />
      <ItemSection />
      <HotDealsSection />
      <NewsSection />
    </>
  );
};

export default Home;
