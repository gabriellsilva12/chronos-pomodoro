import { Home } from './pages/Home';
import { TaskContextsProvider } from './contexts/TasksContext/TaskContextProvider';
import { MessagesContainer } from './components/MessagesContainer';
import './styles/theme.css';
import './styles/global.css';

export function App() {
  return (
    <TaskContextsProvider>
      <MessagesContainer>
        <Home />;
      </MessagesContainer>
    </TaskContextsProvider>
  );
}
