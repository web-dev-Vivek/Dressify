import "./App.css";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-[#f5f2ed] overflow-x-hidden">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
