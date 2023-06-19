import { useMail } from "../contexts/mail-context";

const Filters = () => {
  const { state, dispatch } = useMail();
  const { filters } = state;

  const checkBoxHandler = (event) => {
    const isChecked = event.target.checked;
    const value = event.target.value;

    if (isChecked) {
      dispatch({ type: "FILTER", payload: [...filters, value] });
    } else {
      const updatedValue = filters.filter((item) => item !== value);
      dispatch({ type: "FILTER", payload: updatedValue });
    }
  };

  return (
    <div className="filter-container">
      <fieldset className="field-set">
        <legend>Filters</legend>
        <input
          id="unread-email"
          type="checkbox"
          checked={filters.includes("unread")}
          value="unread"
          onChange={checkBoxHandler}
        />
        <label htmlFor="unread-email"> Show unread mails</label>
        <input
          id="isStarred-email"
          type="checkbox"
          checked={filters.includes("isStarred")}
          value="isStarred"
          onChange={checkBoxHandler}
        />
        <label htmlFor="isStarred-email"> Show Starred mails</label>
      </fieldset>
    </div>
  );
};

export { Filters };
