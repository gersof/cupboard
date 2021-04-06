import { firebase } from "./firebase";
import { useEffect } from "react";
import Dashboard from "./Components/Dashboard";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ProductPage from "./Pages/ProductsPage";
import HomePage from "./Pages/HomePage";

function App() {
 
  return (
    <Router>
      <Switch>
        <div >
          <Route path="/product">
            <Dashboard >
              <ProductPage />
            </Dashboard>
          </Route>
          <Route exact path="/">
            <Dashboard >
              <HomePage />
            </Dashboard>
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
