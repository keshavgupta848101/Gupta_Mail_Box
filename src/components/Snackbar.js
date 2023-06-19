import { useEffect } from "react";
import { useSnackbar } from "../contexts/snackbar-context";

const Snackbar = () => {
  const { message, dismissSnackbar } = useSnackbar();

  useEffect(() => {
    setTimeout(dismissSnackbar, 4000);
  });

  return (
    <div className="snackbar">
      <div className="msg">{message} </div>
      <button className="snackbar-btn" onClick={dismissSnackbar}>
        X
      </button>
    </div>
  );
};

export default Snackbar;
