import "./App.css";
import About from "./components/About/About";
import Designs from "./components/Designs/Designs";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <div className="section-wrapper">
        <About />
      </div>
      <div className="section-wrapper">
        <Designs />
      </div>
    </div>
  );
}

export default App;
