import Navbar from "./components/Navbar/Navbar";
import './App.css'
import Intro from "./components/Intro/Intro";
import Research from "./components/Research/Research";
import Teaching from "./components/Teaching/Teaching";
import { useContext } from "react";
import { themeContext } from "./Context";
import Experience from "./components/Experience/Experience";
import Others from "./components/Others/Others";
import Contact from "./components/Contact/Contact";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"
    style={{
      background: darkMode ? "black" : "",
      color: darkMode ? "white" : "",
    }}
    >
      <Navbar />
      <Intro />
      <Research />
      <Teaching />
      <Experience />
      <Others />
      <Contact />
    </div>
  );
}

export default App;
