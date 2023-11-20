import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../../store/home/home-actions";

import HomeCarousel from "../../components/home-carousel/HomeCarousel";
import ConsoleSection from "./ConsoleSection";
import HotDealsSection from "./HotDealsSection";
import ItemSection from "./ItemSection";
import NewsSection from "./NewsSection";
import Perks from "./Perks";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

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
