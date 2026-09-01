import "./App.css";
import Home from "./components/Home/Home";
import Gallery from "./components/Gallery/Gallery";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import ParentContainer from "./components/ParentContainer/ParentContainer";
import NotFound from "./components/NotFound/NotFound";
import {
  LaptopsArticle,
  PhonesArticle,
  WatchesArticle,
} from "./components/Articles/Articles";
function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "gallery",
          element: <Gallery />,
          children: [
            { path: "phone", element: <PhonesArticle /> },
            { path: "laptop", element: <LaptopsArticle /> },
            { path: "watch", element: <WatchesArticle /> },
          ],
        },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
        { path: "cards", element: <ParentContainer /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
