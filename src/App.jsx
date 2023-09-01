import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AppLayout from "./ui/AppLayout";
import AboutMitch from "./pages/AboutMitch";

export default function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "/about_mitch",
          element: <AboutMitch />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
