import Navbar from "./components/Navbar/Navbar";
import './App.css'
import Intro from "./components/Intro/Intro";
import Research from "./components/Research/Research";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Research />
    </div>
  );
}

export default App;
