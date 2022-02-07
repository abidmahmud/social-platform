import Navbar from './component/navbar.component';
import { Redirect, Switch, Route } from "react-router-dom";
import LogIn from './component/log-in.component';
import SignUp from './component/sign-up.component';
import Home from './component/home.component';
import Posts from './component/posts.component';
import PrivateRoute from './component/common/privateRoute';
import PublicRoute from './component/common/publicRoute';
import Logout from './component/log-out.component';

const App = () => {
  return (
    <>
      <Navbar />

      <Switch>
        <PublicRoute path="/log-in" component={LogIn} />
        <PublicRoute path="/sign-up" component={SignUp} />
        <PrivateRoute path="/posts" component={Posts} />
        <PrivateRoute path="/log-out" component={Logout} />
        <PrivateRoute path="/" component={Home} />
      </Switch>

    </>
  );
}

export default App;