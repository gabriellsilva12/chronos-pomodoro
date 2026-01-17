import React, { createContext, useContext } from "react";
import { TaskStateModel } from '../../models/taskStateModel'

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
};

type TasksContextProps = {
  state: TaskStateModel,
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>
}

const ValueTaskContexts = {
  state: initialState,
  setState: () => {},
}

export const TaskContexts = createContext< TasksContextProps >(ValueTaskContexts)



type TaskContextProviderProps = { children: React.ReactNode }

export function TaskContextsProvider({children}: TaskContextProviderProps) {
  return (
    <TaskContexts.Provider value={ValueTaskContexts}>
        {children}
    </TaskContexts.Provider>
  )
}

export function useTaskContext() {
  return useContext(TaskContexts)
}