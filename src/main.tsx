import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import { createRoot } from "react-dom/client";
import App from "./App";
import PartnersPage from "./page/PartnersPage";
import CasePage from "./page/CasePage";
import AboutPage from "./page/AboutPage";
import HomePage from "./page/HomePage";
import TermsConditionsPage from "./page/TermsConditionsPage";
import GrievancePage from "./page/GrievancePage";
import PrivacyPage from "./page/PrivacyPage";
import ContactPage from "./page/ContactPage";
import ExplorePage from "./page/ExplorePage";
import BlogsPage from "./page/BlogsPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/explore",
        element: <ExplorePage />,
      },
      {
        path: "/partners",
        element: <PartnersPage />,
      },
      {
        path: "/case",
        element: <CasePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/terms",
        element: <TermsConditionsPage />,
      },
      {
        path: "/grievance",
        element: <GrievancePage />,
      },
      {
        path: "/privacy",
        element: <PrivacyPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/blogs",
        element: <BlogsPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
    <RouterProvider router={router}></RouterProvider>

);
