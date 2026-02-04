import { MainTemplate } from '../../templates/MainTemplates';
import { Container } from '../../components/Container';
import { Heading } from '../../components/Heading';
import { DefaultButton } from '../../components/DefaultButton';
import { TrashIcon } from 'lucide-react';

import styles from './styles.module.css';
import { useTaskContext } from '../../contexts/TasksContext/useTaskContext';
import formateDate from '../../utils/formateDate';
import getTaskStatus from '../../utils/getTaskStatus';

export function History() {
  const { state } = useTaskContext();

  console.log(state);

  return (
    <MainTemplate>
      <Container>
        <Heading>
          <span>History</span>

          <span className={styles.buttonContainer}>
            <DefaultButton
              icon={<TrashIcon />}
              color='red'
              aria-label='Apagar todo o historico'
              title='Apagar historico'
            />
          </span>
        </Heading>
      </Container>

      <Container>
        <div className={styles.responsiveTable}>
          <table>
            <thead>
              <tr>
                <th>Tarefa</th>
                <th>Duração</th>
                <th>Data</th>
                <th>Status</th>
                <th>Tipo</th>
              </tr>
            </thead>
            <tbody>
              {state.tasks.map((task) => {
                
                return (
                  <tr key={task.id}>
                    <td>{task.name}</td>
                    <td>{task.duration}min</td>
                    <td>{formateDate(task.startDate)}</td>
                    <td>{getTaskStatus(task, state.activeTask)}</td>
                    <td>{task.type}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Container>
    </MainTemplate>
  );
}