import { createContext } from "react"
import type { TaskStateModel } from "../../models/taskStateModel"
import { initialTaskState } from "./initialTaskState"

type TasksContextProps = {
  state: TaskStateModel,
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>
} 

const ValueTaskContexts = {
  state: initialTaskState,
  setState: () => {},
} 


export const TaskContexts = createContext< TasksContextProps >(ValueTaskContexts) 

