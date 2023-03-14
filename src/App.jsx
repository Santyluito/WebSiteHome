import { Contact, Feactures, Footer, Gallery, Gallery3, Hero, ImageSlider, Navbar } from "./components";
import { Feactures2 } from "./components/Feactures2";

function App() {
  return (
    <div className="App font-OpenSans">
      <Navbar />
      <Hero />
      <Feactures />
      <Feactures2 />
      {/* <Gallery /> */}
      {/* <ImageSlider /> */}
      <Gallery3 />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;
