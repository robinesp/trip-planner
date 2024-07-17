import "./index.css";
import "@radix-ui/themes/styles.css";
import App from "./App";
import { Theme } from "@radix-ui/themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRoot } from "react-dom/client";

const queryClient = new QueryClient();

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <QueryClientProvider client={queryClient}>
    <Theme accentColor="violet">
      <App />
    </Theme>
  </QueryClientProvider>
);
