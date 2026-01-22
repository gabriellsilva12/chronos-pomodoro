import { createContext } from "react"
import type { TaskStateModel } from "../../models/taskStateModel"
import { initialTaskState } from "./initialTaskState"
import type { TaskActionsModel } from "./taskActions"

type TasksContextProps = {
  state: TaskStateModel,
  dispatch: React.Dispatch<TaskActionsModel>
} 

const ValueTaskContexts = {
  state: initialTaskState,
  dispatch: () => {},
} 


export const TaskContexts = createContext< TasksContextProps >(ValueTaskContexts) 

