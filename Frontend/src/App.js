import "./Style.css";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./Components/About/About";

AOS.init();
function App() {
  return (
    <div className="App">
      <About />
    </div>
  );
}

export default App;
