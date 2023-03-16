import { useEffect, useState } from "react";
import { Contact, Footer, Gallery3, Hero } from "./components";
import { Feactures2 } from "./components/Feactures2";
import { Navbar2 } from "./components/Navbar2";
import ButtonW from "./modules/ButtonW";
import WhatsappButton from "./modules/WhatsappButton";

function App() {
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <main className="App font-OpenSans">
      <WhatsappButton />
      <Navbar2 isTopOfPage={isTopOfPage} />
      <Hero />
      <Gallery3 />
      <Feactures2 />
      <Contact />
      <ButtonW className='md:hidden' />
      <Footer />
      
    </main>
  );
}

export default App;
