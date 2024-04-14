//import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";
import {FC} from 'react'

interface PublicRouteProps{
    children: React.ReactElement;
}
const PublicRoute: FC <PublicRouteProps> = ({children}) => {
    // const { user } = useAuth();
    const user = "John Doe"

    if (user) {
        return <Navigate to='/' replace={true} />;
    }

    // If user is not authenticated, return null or some other fallback component
    return children;
};

export default PublicRoute;
