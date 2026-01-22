import type { TaskStateModel } from "../../models/taskStateModel";
import { TaskActionsTypes, type TaskActionsModel } from "./taskActions";

export function taskReducer(state: TaskStateModel, action: TaskActionsModel): TaskStateModel {
  switch(action.type) {
    case TaskActionsTypes.START_TASK: {
      return state
    } 

     case TaskActionsTypes.INTERRUPT_TASK: {
      return state
    } 

     case TaskActionsTypes.RESET_TASK: {
      return state
    } 
  }

  return state 
}