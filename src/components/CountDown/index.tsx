import styles from './styles.module.css';
import { useTaskContext } from '../../contexts/TasksContext';

export function CountDown() {
  const { state, setState } = useTaskContext();

  const handleClick = () => {
    setState(prevState => {
      return {
        ...prevState,
        formattedSecondsRemaining: '11:11'
      }
    })
  }
  console.log(state);
  return (
    <div onClick={handleClick} className={styles.countdown}>{state.formattedSecondsRemaining}</div>
  );
}
