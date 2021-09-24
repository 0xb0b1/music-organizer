import { Switch, Route } from "react-router-dom";
import { AllCategories } from "../pages/Categories";
import { Home } from "../pages/Home";
import { MyPlaylists } from "../pages/MyPlaylists";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/categories" component={AllCategories}></Route>
      <Route path="/myplaylists" component={MyPlaylists}></Route>
    </Switch>
  );
};

export default Routes;
