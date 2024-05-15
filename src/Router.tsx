import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import Homepage from "./pages/Homepage";
import Nosotros from "./pages/Nosotros";
import Testimonios from "./pages/Testimonios";
import Servicios from "./pages/Servicios";
import Contacto from "./pages/Contacto";
import Empleo from "./pages/Empleo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "nosotros", element: <Nosotros /> },
      { path: "testimonios", element: <Testimonios /> },
      { path: "servicios", element: <Servicios /> },
      { path: "contacto", element: <Contacto /> },
      { path: "empleo", element: <Empleo /> },
    ],
  },
]);

const RouterComponent = () => <RouterProvider router={router} />;

export default RouterComponent;
