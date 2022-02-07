import { Redirect, Route } from "react-router-dom";
import getCurrentUser from "../../service/authService.service";

function PublicRoute({ component: Component, ...rest }) {
    return (
        <Route {...rest} render={props => {
            if (getCurrentUser()) {
                return (
                    <Redirect to={{
                        pathname: props.location.state ? props.location.state.from.pathname : "/",
                        //search: props.location.state ? props.location.state.from.search : "",
                        state: { from: props.location }
                    }} />
                )
            } else {
                return (
                    <Component {...props} />
                )
            }
        }} />
    )
}

export default PublicRoute;