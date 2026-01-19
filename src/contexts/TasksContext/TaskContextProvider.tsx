import { useEffect, useState } from "react";
import { initialTaskState } from "./initialTaskState";
import { TaskContexts } from "./TaskContext";

type TaskContextProviderProps = { children: React.ReactNode }

export function TaskContextsProvider({children}: TaskContextProviderProps) {
  const [ state, setState ] = useState(initialTaskState);

  useEffect(() => { console.log(state) },[state])

  return (
    <TaskContexts.Provider value={{ state, setState }}>
        {children}
    </TaskContexts.Provider>
  )
}