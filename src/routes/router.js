import {
    createBrowserRouter,
} from "react-router-dom";
import Locations from "../components/lists/Locations";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Locations></Locations>,
    },
]);