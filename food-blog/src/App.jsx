import Landing from "./components/Landing";
import About from "./components/About";
import Latest from "./components/Latest";
import Footer from "./components/Footer";

export default function App(){

  return(
    <div className="app">
      <div className="top">
      <Landing />
      <About />
      </div>
      <div className="bottom">
      <Latest />
      <Footer />
      </div>
    </div>
  )
}