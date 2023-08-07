 import Daynamic from "./Daynamic/daynamic";
import Home from "./home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DataShow from "./productDataShow/DataShow";
import Layout from "./Layout/Layout";
import Cart from "./Cart/Cart";
 

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/:category",
          element: <Daynamic />,
          loader: ({ params }) => fetch(`http://localhost:5000/category/${params.category}`),
        },
        {
          path: "/:category/:id",
          element: <DataShow />,
        },
        {
          path: "cart",
          element:<Cart/>
        }
      ]
    }
  ]);

  return (
    <div>
       <RouterProvider router={router}/>
    </div>
  );
}

export default App;
