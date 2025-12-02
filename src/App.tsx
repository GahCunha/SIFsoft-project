import { Navbar } from "./components/commum/navbar";
import { About } from "./components/sections/about";
import { Contact } from "./components/sections/contact";
import { Hero } from "./components/sections/hero";
import { Menu } from "./components/sections/menu";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Contact />
    </>
  );
}

export default App;
