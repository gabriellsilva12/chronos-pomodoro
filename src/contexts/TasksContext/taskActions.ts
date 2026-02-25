import type { TaskModel } from '../../models/taskModel';
import type { TaskStateModel } from '../../models/taskStateModel';

export const TASK_ACTIONS_TYPES = {
  START_TASK: 'START_TASK',
  INTERRUPT_TASK: 'INTERRUPT_TASK',
  RESET_TASK: 'RESET',
  COUNT_DOWN: 'COUNT_DOWN',
  COMPLETE_TASK: 'COMPLETE_TASK',
  CHANGE_SETTINGS: 'CHANGE_SETTINGS',
} as const;

export type TaskActionsTypes =
  (typeof TASK_ACTIONS_TYPES)[keyof typeof TASK_ACTIONS_TYPES];

export type TaskActionsWithPayload =
  | {
      type: typeof TASK_ACTIONS_TYPES.START_TASK;
      payload: TaskModel;
    }
  | {
      type: typeof TASK_ACTIONS_TYPES.COUNT_DOWN;
      payload: { secondsRemaining: number };
    }
  | {
      type: typeof TASK_ACTIONS_TYPES.CHANGE_SETTINGS;
      payload: TaskStateModel['config'];
    };

export type TaskActionsWithoutPayload =
  | {
      type: typeof TASK_ACTIONS_TYPES.RESET_TASK;
    }
  | {
      type: typeof TASK_ACTIONS_TYPES.INTERRUPT_TASK;
    }
  | {
      type: typeof TASK_ACTIONS_TYPES.COMPLETE_TASK;
    };

export type TaskActionsModel =
  | TaskActionsWithPayload
  | TaskActionsWithoutPayload;
