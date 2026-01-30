import { TaskContextsProvider } from './contexts/TasksContext/TaskContextProvider';
import { MessagesContainer } from './components/MessagesContainer';
import { MainRouters } from './routers/MainRouters';

import './styles/theme.css';
import './styles/global.css';

export function App() {
  return (
    <TaskContextsProvider>
      <MessagesContainer>
        <MainRouters/>
      </MessagesContainer>
    </TaskContextsProvider>
  );
}
