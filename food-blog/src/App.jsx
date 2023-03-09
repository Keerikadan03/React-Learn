import Landing from "./components/Landing";
import About from "./components/About";
import Latest from "./components/Latest";
import Footer from "./components/Footer";

export default function App(){

  return(
    <div className="app">
      <Landing />
      <About />
      <Latest />
      <Footer />
    </div>
  )
}