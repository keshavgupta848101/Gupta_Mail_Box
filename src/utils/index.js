export const getFilteredMails = (filters, mails) => {
  return filters.length > 0
    ? mails.filter((item) => filters.some((ele) => item[ele]))
    : mails;
};

export const findMail = (mails, mailId) =>
  mails.find(({ mId }) => mId === mailId);

export const filterMail = (mails, mailId) =>
  mails.filter(({ mId }) => mId !== mailId);
