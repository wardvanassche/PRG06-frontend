import {createBrowserRouter, RouterProvider} from "react-router";
import Layout from "./Layout.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Dishes from "./Dishes.jsx";
import Dish from "./Dish.jsx";

const router = createBrowserRouter([{
    path: "/",
    element: <Layout />,
    children: [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/dishes/:id",
            element: <Dish />
        },
        {
            path: "/dishes",
            element: <Dishes />
        },
        {
            path: "/about",
            element: <About />
        },
    ]
}])


function App() {

  return (
      <RouterProvider router={router} />
  )
}

export default App