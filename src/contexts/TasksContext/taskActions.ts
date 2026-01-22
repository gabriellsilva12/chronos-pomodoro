import type { TaskModel } from '../../models/taskModel';

export enum TaskActionsTypes {
  START_TASK = 'START_TASK',
  INTERRUPT_TASK = 'INTERRUPT_TASK',
  RESET_TASK = 'RESET',
}

export type TaskActionsWithPayload =
  | {
      type: TaskActionsTypes.START_TASK;
      payload: TaskModel;
    }
  | {
      type: TaskActionsTypes.INTERRUPT_TASK;
      payload: TaskModel;
    };

export type TaskActionsWithoutPayload = {
  type: TaskActionsTypes.RESET_TASK;
};

export type TaskActionsModel =
  | TaskActionsWithoutPayload
  | TaskActionsWithoutPayload;
