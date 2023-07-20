import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import ListingPage from "./pages/ListingPage";
import DetailsPage from "./pages/DetailsPage";
import './css/style.css'
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={ListingPage} />
          <Route path="/details/:id" component={DetailsPage} />
          <Route path="/warehouse/:id" component={DetailsPage} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
