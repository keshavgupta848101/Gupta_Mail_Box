import { createContext, useContext, useState } from "react";

const SnackbarContext = createContext();

const SnackbarProvider = ({ children }) => {
  const [message, setMessage] = useState("");

  const showSnackbar = (msg) => setMessage(msg);
  const dismissSnackbar = () => setMessage("");

  return (
    <SnackbarContext.Provider
      value={{ message, showSnackbar, dismissSnackbar }}
    >
      {children}
    </SnackbarContext.Provider>
  );
};

const useSnackbar = () => useContext(SnackbarContext);
export { SnackbarProvider, useSnackbar };
