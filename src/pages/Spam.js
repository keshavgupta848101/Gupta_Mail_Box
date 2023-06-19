import { Link } from "react-router-dom";
import { useMail } from "../contexts/mail-context";

const Spam = () => {
  const { state, moveToInboxHandler } = useMail();
  const { spamMails, unread } = state;
  if (spamMails.length === 0)
    return <h1 className="text-center"> Spam is empty</h1>;
  return (
    <div>
      {spamMails?.map(({ subject, mId, content }) => (
        <div
          style={{ background: unread ? "#ebebeb" : "#fff" }}
          className="mail-card"
        >
          <div className="mail-header">
            <h3> Subject : {subject}</h3>
          </div>
          <p className="mail-body"> {content}</p>
          <div className="mail-footer">
            <Link to={`/detail/${mId}`}> View Details </Link>

            <div className="btn-group">
              <button
                className="btn btn-spam"
                onClick={() => moveToInboxHandler(mId)}
              >
                Move to Inbox
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export { Spam };
