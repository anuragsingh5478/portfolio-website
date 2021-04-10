import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./components/homepage/Homepage";
import Navigation from "./components/navigation/Navigation";
import "./App.css";
import Projects from "./components/projects/Projects";
function App() {
  return (
    <Router>
      <div className="App">
        {/* navigation */}
        <Navigation />
        {/* homepage */}
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/projects" exact component={Projects} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
