import styles from './styles.module.css';
import { useTaskContext } from '../../contexts/TasksContext';

export function CountDown() {
  const { state } = useTaskContext();

  return (
    <div className={styles.countdown}>{state.formattedSecondsRemaining}</div>
  );
}
