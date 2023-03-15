import { Contact, Footer, Gallery3, Hero } from "./components";
import { Feactures2 } from "./components/Feactures2";
import { Navbar2 } from "./components/Navbar2";

function App() {
  return (
    <div className="App font-OpenSans">
      <Navbar2 />
      <Hero />
      <Feactures2 />
      <Gallery3 />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
