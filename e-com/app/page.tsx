import Image from "next/image";
import Slider from "./components/slider";
import Notification from "./components/notification";
import Feature from "./components/feature"
import Offers from "./components/offers";
import About from "./components/about";
import Review from "./components/review";
import FAQ from "./components/faq";
import Subscribe from "./components/subscribe";

export default function Home() {
  return (
    <div>
      <Slider />
      <Notification />
      <Feature />
      <Offers />
      <About />
      <Review />
      <FAQ />
      <Subscribe />

    </div>
  );
}
