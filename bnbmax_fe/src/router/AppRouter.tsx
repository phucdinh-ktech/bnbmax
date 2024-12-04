import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "@/components/layouts/RootLayout";
import Home from "@/pages/Home";
import Users from "@/pages/Users";
import { paths } from "@/utils/constants/paths";

const router = createBrowserRouter([
  {
    path: paths.HOME,
    element: <RootLayout />,
    children: [
      {
        path: paths.HOME,
        element: <Home />,
      },
      {
        path: paths.USERS,
        element: <Users />,
      },
    ],
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;
