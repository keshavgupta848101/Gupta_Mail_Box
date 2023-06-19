import { createContext, useContext, useEffect, useReducer } from "react";
import { mailReducer, initialState } from "../reducers/mailReducer";
import { filterMail, findMail } from "../utils";
import { useSnackbar } from "./snackbar-context";
const MailContext = createContext();

export const localState = (initialState) =>
  JSON.parse(localStorage.getItem("state")) || initialState;

const MailProvider = ({ children }) => {
  const [state, dispatch] = useReducer(mailReducer, initialState, localState);
  const { mails, trashMails, spamMails } = state;
  const { showSnackbar } = useSnackbar();

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  const markAsreadMailHandler = (mailId) => {
    const updatedMails = mails.map((mail) =>
      mail.mId === mailId ? { ...mail, unread: !mail.unread } : mail
    );
    dispatch({ type: "MARK_AS_READ", payload: updatedMails });
  };

  const starMailHandler = (mailId) => {
    const updatedMails = mails.map((mail) =>
      mail.mId === mailId ? { ...mail, isStarred: !mail.isStarred } : mail
    );
    dispatch({ type: "STAR_MAIL", payload: updatedMails });
  };

  const reportSpamMailHandler = (mailId) => {
    const mail = findMail(mails, mailId);
    const updatedMails = filterMail(mails, mailId);
    dispatch({ type: "REPORT_SPAM", payload: { updatedMails, mail } });
    showSnackbar("conversation moved to spam");
  };

  const deleteMailHandler = (mailId) => {
    const mail = findMail(mails, mailId);
    const updatedMails = filterMail(mails, mailId);
    dispatch({ type: "DELETE_MAIL", payload: { updatedMails, mail } });
    showSnackbar("conversation moved to trash");
  };
  const restoreMailHandler = (mailId) => {
    const mail = findMail(trashMails, mailId);
    const updatedMails = filterMail(trashMails, mailId);
    dispatch({ type: "RESTORE_MAIL", payload: { updatedMails, mail } });
    showSnackbar("conversation restored successfully");
  };
  const moveToInboxHandler = (mailId) => {
    const mail = findMail(spamMails, mailId);
    const updatedMails = filterMail(spamMails, mailId);
    dispatch({ type: "MOVE_TO_INBOX", payload: { updatedMails, mail } });
    showSnackbar("conversation moved to inbox");
  };

  return (
    <MailContext.Provider
      value={{
        state,
        dispatch,
        deleteMailHandler,
        reportSpamMailHandler,
        starMailHandler,
        markAsreadMailHandler,
        restoreMailHandler,
        moveToInboxHandler
      }}
    >
      {children}
    </MailContext.Provider>
  );
};

const useMail = () => useContext(MailContext);
export { MailProvider, useMail };
