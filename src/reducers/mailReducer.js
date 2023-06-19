import { mails } from "../data/mails";
export const initialState = {
  mails,
  spamMails: [],
  trashMails: [],
  filters: []
};

export const mailReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "DELETE_MAIL":
      return {
        ...state,
        mails: payload.updatedMails,
        trashMails: [payload.mail, ...state.trashMails]
      };
    case "STAR_MAIL":
      return {
        ...state,
        mails: payload
      };
    case "MARK_AS_READ":
      return {
        ...state,
        mails: payload
      };
    case "REPORT_SPAM":
      return {
        ...state,
        mails: payload.updatedMails,
        spamMails: [payload.mail, ...state.spamMails]
      };
    case "MOVE_TO_INBOX":
      return {
        ...state,
        mails: [payload.mail, ...state.mails],
        spamMails: payload.updatedMails
      };
    case "RESTORE_MAIL":
      return {
        ...state,
        mails: [payload.mail, ...state.mails],
        trashMails: payload.updatedMails
      };
    case "FILTER":
      return {
        ...state,
        filters: payload
      };
    default:
      return state;
  }
};
