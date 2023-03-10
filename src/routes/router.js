import {
    createBrowserRouter,
} from "react-router-dom";
import Residents from "../components/grids/Residents";
import Locations from "../components/lists/Locations";
import Main from "../layouts/Main";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Locations></Locations>,
            },
            {
                path: "/residents/:id",
                element: <Residents></Residents>,
                loader: ({ params }) => fetch(`https://rickandmortyapi.com/api/location/${params.id}`)
            }

        ]
    }

]);