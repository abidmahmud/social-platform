import { Redirect } from "react-router-dom";

function Logout(props) {
    localStorage.removeItem("access_token");
    window.location.href = "/log-in";
    // window.location.href = "/log-out";
}

export default Logout; 