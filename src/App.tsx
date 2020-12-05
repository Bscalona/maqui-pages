import React, { useEffect } from "react";
import Header from "./components/header";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  RouteComponentProps,
  Redirect,
} from "react-router-dom";

import Home from "./screens/home/index";
import Dashboard from "./screens/dashboard/index";
import {
  HOME,
  DASHBOARD,
  REDEEM_CODE,
  PLAYLIST_AVOCADO,
  GAMES,
} from "./routes";
import { getUserLogin, history } from "./utils/functions";
import Redeem from "./screens/redeem/index";
import PlaylistMusic from "./screens/playMusic";
import Game from "./screens/game/index";
const AppContent: React.SFC<RouteComponentProps> = ({ history }) => {
  useEffect(() => {
    const user = getUserLogin();
    if (!user) {
      history.push(HOME);
    }
  }, [history]);

  return (
    <Switch>
      <Route exact path={DASHBOARD} component={Dashboard}></Route>
      <Route exact path={REDEEM_CODE} component={Redeem}></Route>
      <Route exact path={GAMES} component={Game}></Route>
      <Route exact path={PLAYLIST_AVOCADO} component={PlaylistMusic}></Route>
      <Route render={() => <Redirect to={DASHBOARD} />}></Route>
    </Switch>
  );
};

const App = () => {
  return (
    <Router>
      {/* <div className="content-app-content"> */}
      <Header />
      <Switch>
        <Route exact path={HOME} component={Home}></Route>
        <Route component={AppContent}></Route>
      </Switch>
      {/* </div> */}
    </Router>
  );
};

export default App;
