import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { router } from "./Layout/Router/Router";
import AuthProvider from "./Layout/Provider/AuthProvider";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "./Hooks/ThemeContext";



ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <AuthProvider>
      <ThemeProvider>
        <React.StrictMode>
          <RouterProvider router={router} />
          <Toaster />
        </React.StrictMode>
      </ThemeProvider>
    </AuthProvider>
  </HelmetProvider>
);