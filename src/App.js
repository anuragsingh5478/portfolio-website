import "./App.css";
import Homepage from "./components/homepage/Homepage";
import Navigation from "./components/navigation/Navigation";

function App() {
  return (
    <div className="App">
      {/* navigation */}
      <Navigation />
      {/* homepage */}
      <Homepage />
    </div>
  );
}

export default App;
