import { lazy, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "@pages/RootLayout";
import ModalProvider from "@context/ModalProvider";
import Search from "@pages/Search";
import Blog from "@pages/Blog";
import NotFoundPage from "@pages/NotFoundPage";
import BlogDetail from "@pages/BlogDetail";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const HomePage = lazy(() => import("@pages/HomePage"));
const MovieDetail = lazy(() => import("@pages/MovieDetail"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/movie/:id", element: <MovieDetail /> },
      { path: "/search", element: <Search /> },
    ],
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/blog/:id",
    element: <BlogDetail />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ModalProvider>
        <RouterProvider router={router} />
      </ModalProvider>
    </QueryClientProvider>
  </StrictMode>,
);
