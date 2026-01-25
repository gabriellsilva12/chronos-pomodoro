import { useEffect, useReducer } from "react";
import { initialTaskState } from "./initialTaskState";
import { TaskContexts } from "./TaskContext";
import { taskReducer } from "./taskReducer";

type TaskContextProviderProps = { children: React.ReactNode }

export function TaskContextsProvider({children}: TaskContextProviderProps) {
  const [ state, dispatch ] = useReducer( taskReducer,initialTaskState);

  useEffect(() => { 

    console.log(state) 
    
  },[state])

  return (
    <TaskContexts.Provider value={{ state, dispatch }}>
        {children}
    </TaskContexts.Provider>
  )
}