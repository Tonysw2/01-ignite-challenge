import Clipboard from '../../assets/clipboard.svg';
import styles from './EmptyTasks.module.css';

export const EmptyTasks = function () {
  return (
    <div className={styles.emptyTasksContainer}>
      <img src={Clipboard} />
      <p>
        Você ainda não tem tarefas cadastradas
        <span>Crie tarefas e organize seus itens a fazer</span>
      </p>
    </div>
  );
};
