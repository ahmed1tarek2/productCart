import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { system } from "./theme";
import "./index.css";
import { router } from "./routes";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider value={system}>
        {" "}
        <RouterProvider router={router} />,{" "}
      </ChakraProvider>
    </QueryClientProvider>
  </StrictMode>,
);
