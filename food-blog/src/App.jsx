import Landing from "./components/Landing";
import About from "./components/About";
import Latest from "./components/Latest";

export default function App(){

  return(
    <div className="app">
      <Landing />
      <About />
      <Latest />
    </div>
  )
}