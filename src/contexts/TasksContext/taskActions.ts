import type { TaskModel } from '../../models/taskModel';
import type { TaskStateModel } from '../../models/taskStateModel';

export enum TaskActionsTypes {
  START_TASK = 'START_TASK',
  INTERRUPT_TASK = 'INTERRUPT_TASK',
  RESET_TASK = 'RESET',
  COUNT_DOWN = 'COUNT_DOWN',
  COMPLETE_TASK = 'COMPLETE_TASK',
  CHANGE_SETTINGS = 'CHANGE_SETTINGS',
}

export type TaskActionsWithPayload =
  | {
      type: TaskActionsTypes.START_TASK;
      payload: TaskModel;
    }
  | {
      type: TaskActionsTypes.COUNT_DOWN;
      payload: { secondsRemaining: number };
    }
  | {
      type: TaskActionsTypes.CHANGE_SETTINGS;
      payload: TaskStateModel["config"]
    } ;

export type TaskActionsWithoutPayload =
  | {
      type: TaskActionsTypes.RESET_TASK;
    }
  | {
      type: TaskActionsTypes.INTERRUPT_TASK;
    }
  | {
      type: TaskActionsTypes.COMPLETE_TASK;
    };

export type TaskActionsModel =
  | TaskActionsWithPayload
  | TaskActionsWithoutPayload;
