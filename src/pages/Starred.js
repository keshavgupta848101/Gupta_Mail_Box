import { MailCard } from "../components/MailCard";
import { useMail } from "../contexts/mail-context";

const Starred = () => {
  const { state } = useMail();
  const { mails } = state;

  const starredMails = mails.filter((mail) => mail.isStarred);
  if (starredMails.length === 0)
    return <h1 className="text-center"> No starred mail found</h1>;
  return (
    <div>
      <h1> Starred</h1>
      {starredMails?.map((mail) => (
        <MailCard key={mail?.mId} mail={mail} />
      ))}
    </div>
  );
};

export { Starred };
