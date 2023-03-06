const Priority = ({priority, onChangePriority}) => {
  const priorityChangeHandler = (event) => {
    onChangePriority(event.target.value);
  };

  return (
    <div>
      <div>
        <label>Priority</label>
        <select value={priority} onChange={priorityChangeHandler} required>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
    </div>
  );
};

export default Priority;
