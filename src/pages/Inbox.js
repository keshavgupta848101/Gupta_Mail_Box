import { Filters } from "../components/Filters";
import { MailCard } from "../components/MailCard";
import { useMail } from "../contexts/mail-context";
import { getFilteredMails } from "../utils";

const Inbox = () => {
  const { state } = useMail();

  const { mails, filters } = state;

  const unreadMailsCount = mails?.reduce(
    (acc, curr) => (curr.unread ? acc + 1 : acc),
    0
  );

  const filteredMails = getFilteredMails(filters, mails);

  return (
    <>
      <Filters />
      <div className="inbox">
        <h3> Unread : {unreadMailsCount} </h3>
        <ul>
          {filteredMails.map((mail) => (
            <MailCard key={mail.mId} mail={mail} />
          ))}
        </ul>
      </div>
    </>
  );
};

export { Inbox };
