import { Link } from "react-router-dom";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useMail } from "../contexts/mail-context";
const MailCard = ({ mail }) => {
  const { mId, unread, isStarred, subject, content } = mail;

  const {
    deleteMailHandler,
    reportSpamMailHandler,
    starMailHandler,
    markAsreadMailHandler
  } = useMail();
  return (
    <div
      style={{ background: unread ? "#ebebeb" : "white" }}
      className="mail-card"
    >
      <div className="mail-header">
        <h3> Subject : {subject}</h3>
        <button className="btn-star" onClick={() => starMailHandler(mId)}>
          {isStarred ? (
            <AiFillStar color="orange" size="25" title="star" />
          ) : (
            <AiOutlineStar color="gray" size="25" title="unstar" />
          )}
        </button>
      </div>
      <p className="mail-body"> {content}</p>
      <div className="mail-footer">
        <Link to={`/detail/${mId}`}> View Details </Link>

        <div className="btn-group">
          <button
            className=" btn btn-delete"
            onClick={() => deleteMailHandler(mId)}
          >
            Delete
          </button>
          <button
            className="btn btn-read"
            onClick={() => markAsreadMailHandler(mId)}
          >
            {unread ? "Mark as Read" : "Mark as Unread"}
          </button>
          <button
            className="btn btn-spam"
            onClick={() => reportSpamMailHandler(mId)}
          >
            Report Spam
          </button>
        </div>
      </div>
    </div>
  );
};

export { MailCard };
