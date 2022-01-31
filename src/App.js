import Navbar from './component/navbar.component';
import { Redirect, Switch, Route } from "react-router-dom"
import LogIn from './component/log-in.component';
import SignUp from './component/sign-up.component';
import Home from './component/home.component';

const App = () => {
  return (
    <>
      <Navbar />

      <Switch>
        <Route path="/log-in" component={LogIn} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/" component={Home} />
      </Switch>

    </>
  );
}

export default App;