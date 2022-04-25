import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Blog from "./pages/Blog/Blog";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
