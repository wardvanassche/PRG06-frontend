import {createBrowserRouter, RouterProvider} from "react-router";
import Layout from "./Layout.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Dishes from "./Dishes.jsx";
import Dish from "./Dish.jsx";
import CreateDish from "./CreateDish.jsx";
import UpdateDish from "./UpdateDish.jsx";

const router = createBrowserRouter([{
    path: "/",
    element: <Layout />,
    children: [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/about",
            element: <About />
        },
        {
            path: "/dishes",
            element: <Dishes />
        },
        {
            path: "/dishes/:id",
            element: <Dish />
        },
        {
            path: "/dishes/create",
            element: <CreateDish />
        },
        {
            path: "/dishes/update/:id",
            element: <UpdateDish />
        },
    ]
}])


function App() {

  return (
      <RouterProvider router={router} />
  )
}

export default App