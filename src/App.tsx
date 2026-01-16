import './styles/theme.css';
import './styles/global.css';

import { useState } from 'react';
import { Home } from './pages/Home';
import type { TaskStateModel } from './models/taskStateModel';
import { TaskContexts } from './contexts/TasksContext';

// export type TaskStateModel = {
//   tasks: TaskModel[];
//   secondsRemaining: number;
//   formattedSecondsRemaining: string;
//   activeTask: TaskModel | null;
//   currentCycle: number;
//   config: {
//     workTime: number;
//     shortBreakTime: number;
//     longBreakTime: number;
//   };
// };

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

export function App() {
  const [state, setState] = useState(initialState);

  return (
    <TaskContexts.Provider value={{outraCoisa: 1233}} >
      <Home />;
    </TaskContexts.Provider>
  );
}
