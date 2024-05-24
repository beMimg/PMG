import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import Homepage from "./pages/Homepage";
import Nosotros from "./pages/Nosotros";
import Servicios from "./pages/Servicios";
import Contacto from "./pages/Contacto";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "nosotros", element: <Nosotros /> },
      { path: "servicios", element: <Servicios /> },
      { path: "contacto", element: <Contacto /> },
    ],
  },
]);

const RouterComponent = () => <RouterProvider router={router} />;

export default RouterComponent;
