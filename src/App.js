import "./App.css";
import NavbarComponent from "./component/NavbarComponent";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import ProfileComponent from "./component/ProfileComponent";

import ContactComponent from "./component/ContactComponent";
import BannerComponent from "./component/BannerComponent";

function App() {
  return (
    <div>
      <NavbarComponent />

      <Switch>
        <Route exact path="/home">
          <BannerComponent />
        </Route>
        <Route exact path="/profile">
          <ProfileComponent />
        </Route>
        
        <Route path="/contact">
          <ContactComponent />
        </Route>

        <Redirect to="/home" />
      </Switch>
    </div>
  );
}

export default App;
