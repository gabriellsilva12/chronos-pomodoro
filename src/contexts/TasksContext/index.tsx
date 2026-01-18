import React, { createContext, useContext, useState } from "react";
import type { TaskStateModel } from "../../models/taskStateModel";

const initialState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: '00:00',
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
  },
}; // initial state

type TasksContextProps = {
  state: TaskStateModel,
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>
} // type prop use createContext

const ValueTaskContexts = {
  state: initialState,
  setState: () => {},
} // initial value createContext

export const TaskContexts = createContext< TasksContextProps >(ValueTaskContexts) // using type taskcontextprops and valuetaskContext for createContext
type TaskContextProviderProps = { children: React.ReactNode } // defining

export function TaskContextsProvider({children}: TaskContextProviderProps) {
  const [ state, setState ] = useState(initialState);

  return (
    <TaskContexts.Provider value={{ state, setState }}>
        {children}
    </TaskContexts.Provider>
  )
}

export function useTaskContext() {
  return useContext(TaskContexts)
}