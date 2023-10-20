import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import ItemsLayout from "./pages/items/Layout";
import ListItems from "./pages/items/ListItems";
import CreateItems from "./pages/items/CreateItems";
import ShowItems from "./pages/items/ShowItem";
import UpdateItems from "./pages/items/UpdateItem";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "items",
        element: <ItemsLayout />,
        children: [
          { index: true, element: <ListItems /> },
          { path: "new", element: <CreateItems /> },
          { path: ":id", element: <ShowItems /> },
          { path: ":id/update", element: <UpdateItems /> },
        ],
      },
    ],
  },
]);

export default router;