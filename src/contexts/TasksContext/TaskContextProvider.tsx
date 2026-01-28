import { useEffect, useReducer } from 'react';
import { initialTaskState } from './initialTaskState';
import { TaskContexts } from './TaskContext';
import { taskReducer } from './taskReducer';
import { TimerWorkerManager } from '../../workers/TimerWorkerManager';
import { TaskActionsTypes } from './taskActions';

type TaskContextProviderProps = { children: React.ReactNode };

export function TaskContextsProvider({ children }: TaskContextProviderProps) {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState);

  const worker = TimerWorkerManager.getInstance();

  worker.onmessage(e => {
    const countDownSeconds = e.data;
    console.log(e.data);

    if (countDownSeconds <= 0) {
      dispatch({
        type: TaskActionsTypes.COMPLETE_TASK
      });
    } else {
      dispatch({
        type: TaskActionsTypes.COUNT_DOWN,
        payload: { secondsRemaining: countDownSeconds },
      });
    }
  });

  useEffect(() => {
    console.log(state)
    if (!state.activeTask) {
      console.log('Worker terminado por falta de activeTask');
      worker.terminate();
    }
    worker.postMessage(state);
  }, [worker, state]);

  return (
    <TaskContexts.Provider value={{ state, dispatch }}>
      {children}
    </TaskContexts.Provider>
  );
}
