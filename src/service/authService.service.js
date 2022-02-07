import jwtDecode from "jwt-decode";

function getCurrentUser() {
    try {
        const jwt = localStorage.getItem("access_token")
        return jwtDecode(jwt);
    }
    catch (error) {
        return null;
    }
}

export default getCurrentUser;