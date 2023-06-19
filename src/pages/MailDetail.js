import { useParams } from "react-router-dom";
import { mails } from "../data/mails";

const MailDetail = () => {
  const { mailId } = useParams();

  const mail = mails?.find((mail) => mail.mId === mailId);

  return (
    <div
      key={mail?.mId}
      style={{ background: mail?.unread ? "#ebebeb" : "#fff" }}
      className="mail-card"
    >
      <div className="mail-header">
        <h3> Subject : {mail?.subject}</h3>
      </div>
      <p className="mail-body"> {mail?.content}</p>
    </div>
  );
};

export { MailDetail };
