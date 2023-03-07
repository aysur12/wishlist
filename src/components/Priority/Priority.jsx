import styles from './Priority.module.scss';

const Priority = ({ priority, onChangePriority }) => {
  const priorityChangeHandler = (event) => {
    onChangePriority(event.target.value);
  };

  return (
    <div className={styles['priority']}>
      <label className={styles['priority__label']}>Priority:</label>
      <select className={styles['priority__select']} value={priority} onChange={priorityChangeHandler} required>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
    </div>
  );
};

export default Priority;
