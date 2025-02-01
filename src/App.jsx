import {createBrowserRouter, RouterProvider} from "react-router";
import Layout from "./Layout.jsx";
import Home from "./Home.jsx";
import Dishes from "./Dishes.jsx";
import Dish from "./Dish.jsx";
import CreateDish from "./CreateDish.jsx";
import UpdateDish from "./UpdateDish.jsx";
import HandleDeleteModal from "./HandleDeleteModal.jsx";

const router = createBrowserRouter([{
    path: "/",
    element: <Layout/>,
    children: [
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/dishes",
            element: <Dishes/>
        },
        {
            path: "/dishes/:id",
            element: <Dish/>
        },
        {
            path: "/dishes/create",
            element: <CreateDish/>
        },
        {
            path: "/dishes/update/:id",
            element: <UpdateDish/>
        },
        {
            path: "/dishes/delete/:id",
            element: <HandleDeleteModal/>
        }
    ]
}])

function App() {

    return (
        <RouterProvider router={router}/>
    )
}

export default App