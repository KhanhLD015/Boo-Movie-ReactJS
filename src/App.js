import "./App.css";
import Content from "./components/Contents/Content";
import Intro from "./components/Intro/Intro";
import Menus from "./components/Menu/Menus";
import Navbar from "./components/Navbar/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Content />
      <Menus />
    </div>
  );
}

export default App;
