import { Home } from './pages/Home';
import { TaskContextsProvider } from './contexts/TasksContext';

import './styles/theme.css';
import './styles/global.css';

export function App() {

  return (
    <TaskContextsProvider>
      <Home />;
    </TaskContextsProvider>
  );
}
