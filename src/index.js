import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { MailProvider } from "./contexts/mail-context";
import { SnackbarProvider } from "./contexts/snackbar-context";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <SnackbarProvider>
        <MailProvider>
          <App />
        </MailProvider>
      </SnackbarProvider>
    </BrowserRouter>
  </StrictMode>
);
