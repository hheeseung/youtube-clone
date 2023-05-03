import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Root from "./pages/Root";
import Detail from "./pages/Detail";
import Search from "./pages/Search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/videos/watch/:videoId",
        element: <Detail />,
      },
      {
        path: "/videos/:keyword",
        element: <Search />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
