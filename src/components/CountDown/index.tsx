import { useContext } from 'react';
import styles from './styles.module.css';
import { TaskContexts } from '../../contexts/TasksContext';
 
export function CountDown() {
    const context = useContext(TaskContexts)
    console.log(context)
  return (
    <div className={styles.countdown}>00:00</div>
  );
}