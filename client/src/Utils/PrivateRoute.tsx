// PrivateRoute.js
import { Route, Navigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";

const PrivateRoute = ({ element: Element, ...rest }) => {
    const token = localStorage.getItem('access_token');
    const decoded = jwtDecode(token);

    console.log(decoded)

    const isTokenExpired = () => {
        // if (!token) {
        //     return true; // Token not present
        // }

        // try {
        //     const decodedToken = jwt.decode(token);
        //     return decodedToken.exp < Date.now() / 1000;
        // } catch (error) {
        //     return true;
        // }
    };

    return (
        <Route
            {...rest}
            element={isTokenExpired() ? <Navigate to="/login" /> : <Element />}
        />
    );
};

export default PrivateRoute;
