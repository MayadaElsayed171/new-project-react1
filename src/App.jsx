
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
import "./App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/new-project-react/",
      element: <Layout />,
      children: [
        {
          index: true, 
          element: <Home />,
        },
        {
          path: "/new-project-react/about",
          element: <About />,
        },
        {
          path: "/new-project-react/portfolio",
          element: <Portfolio />,
        },
        {
          path: "/new-project-react/contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
