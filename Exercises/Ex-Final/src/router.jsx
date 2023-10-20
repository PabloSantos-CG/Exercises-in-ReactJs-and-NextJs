import { createBrowserRouter } from "react-router-dom";

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
