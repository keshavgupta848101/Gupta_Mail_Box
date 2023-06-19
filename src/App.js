import "./styles.css";
import { Routes, Route } from "react-router-dom";
import { Inbox, MailDetail, NotFound, Spam, Trash } from "./pages";
import { Sidebar } from "./components/Sidebar";
import { Starred } from "./pages/Starred";
import { useSnackbar } from "./contexts/snackbar-context";
import Snackbar from "./components/Snackbar";

const App = () => {
  const { message } = useSnackbar();
  return (
    <div className="App">
      {message && <Snackbar />}
      <Sidebar />
      <main className="main">
        <h2 className="text-center">Keshav Gupta Mail Box</h2>
        <Routes>
          <Route path="/" element={<Inbox />} />
          <Route path="/spam" element={<Spam />} />
          <Route path="/trash" element={<Trash />} />
          <Route path="/starred" element={<Starred />} />
          <Route path="/detail/:mailId" element={<MailDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
};

export { App };
