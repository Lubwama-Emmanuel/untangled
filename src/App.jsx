import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AppLayout from "./ui/AppLayout";
import AboutMitch from "./pages/AboutMitch";
import DownloadPDF from "./pages/DownloadPDF";

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
    {
      path: "/leaflet",
      element: <DownloadPDF />,
    },
  ]);

  return <RouterProvider router={router} />;
}
