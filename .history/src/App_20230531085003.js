import "./App.css";
import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Content />
    </div>
  );
}

export default App;
