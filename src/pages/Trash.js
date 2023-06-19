import { Link } from "react-router-dom";
import { useMail } from "../contexts/mail-context";

const Trash = () => {
  const { state, restoreMailHandler } = useMail();
  const { trashMails } = state;

  if (trashMails.length === 0)
    return <h1 className="text-center"> Trash is empty</h1>;
  return (
    <div>
      <h1> Trash</h1>
      {trashMails?.map((mail) => (
        <div
          key={mail.mId}
          style={{ background: mail.unread ? "#ebebeb" : "#fff" }}
          className="mail-card"
        >
          <div className="mail-header">
            <h3> Subject : {mail.subject}</h3>
          </div>
          <p className="mail-body"> {mail.content}</p>
          <div className="mail-footer">
            <Link to={`/detail/${mail.mId}`}> View Details </Link>

            <div className="btn-group">
              <button
                className="btn btn-spam"
                onClick={() => restoreMailHandler(mail.mId)}
              >
                Restore
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export { Trash };
