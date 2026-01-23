import type { TaskStateModel } from '../../models/taskStateModel';
import { formatSecondsTwoMinutes } from '../../utils/formatSecondsTwoMinutes';
import { getNextCycle } from '../../utils/getNextCycle';
import { TaskActionsTypes, type TaskActionsModel } from './taskActions';

export function taskReducer(
  state: TaskStateModel,
  action: TaskActionsModel,
): TaskStateModel {
  
  switch (action.type) {
    case TaskActionsTypes.START_TASK: {
      const newTasks = action.payload;
      const nextCycle = getNextCycle(state.currentCycle);
      const secondsRemaining = newTasks.duration * 60;

      return {
        ...state,
        activeTask: newTasks,
        currentCycle: nextCycle,
        secondsRemaining: secondsRemaining,
        formattedSecondsRemaining: formatSecondsTwoMinutes(secondsRemaining),
        tasks: [...state.tasks, newTasks],
      };
    }

    case TaskActionsTypes.INTERRUPT_TASK: {
      return {
        ...state,
        activeTask: null,
        secondsRemaining: 0,
        formattedSecondsRemaining: '00:00',
        tasks: state.tasks.map(task => {
          if (state.activeTask && state.activeTask.id === task.id) {
            return { ...task, interruptDate: Date.now() };
          }
          return task;
        }),
      };
    }
    case TaskActionsTypes.RESET_TASK: {
      return state;
    }
  }

  return state;
}
