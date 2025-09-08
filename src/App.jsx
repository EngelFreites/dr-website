import Hero from "./assets/components/Hero/Hero";
import AboutUs from "./components/AboutUs/AboutUs";
import Comments from "./components/Comments/Comments";
import OurServices from "./components/OurServices/OurServices";
import We from "./components/We/We";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import { Whatsapp } from "./components/Whatsapp/Whatsapp";
function App() {
  return (
    <>
      <Header />
      <Hero />
      <AboutUs />
      <OurServices />
      <We />
      <Comments />
      <Contact />
      <Whatsapp />
    </>
  );
}

export default App;
