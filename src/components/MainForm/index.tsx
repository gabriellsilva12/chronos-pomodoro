import { DefaultInput } from '../DefaultInput';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { CircleStopIcon, PlayCircleIcon } from 'lucide-react';
import { useRef } from 'react';
import type { TaskModel } from '../../models/taskModel';
import { useTaskContext } from '../../contexts/TasksContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import { TaskActionsTypes } from '../../contexts/TasksContext/taskActions';
import { showMessage } from '../../adapters/showMessage';
import Tips from '../Tips';

export function MainForm() {
  const { state, dispatch } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);
  const lastTaskName = state.tasks[state.tasks.length - 1]?.name || '';

  // cycles
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    showMessage.dismiss();

    if (taskNameInput.current === null) return;

    const taskName = taskNameInput.current.value.trim();
    if (!taskName) {
      showMessage.warning('Digite o nome da tarefa');
      return;
    }

    console.log(state.tasks)

    if(state.tasks.length === 2000) {
      showMessage.warning("Cuidado! Você ultrapassou 2000 mensagens, seu historico pode ocasionar travamentos no navegador")
      return
    }
    
    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    };


    dispatch({ type: TaskActionsTypes.START_TASK, payload: newTask });
    showMessage.success('Tarefa iniciada com sucesso!');
  }

  function handleInterruptTask() {
    showMessage.dismiss();
    showMessage.error('Ops, tarefa cancelada!');
    dispatch({ type: TaskActionsTypes.INTERRUPT_TASK });
  }

  return (
    <div>
      <form onSubmit={handleCreateNewTask} className='form' action=''>
        <div className='row'>
          <DefaultInput
            id={'meuInput'}
            type={'text'}
            labelText={'task'}
            title='title'
            ref={taskNameInput}
            disabled={!!state.activeTask}
            defaultValue={lastTaskName}
          />
        </div>

        <div className='row'>
          <p>
            <Tips />
          </p>
        </div>

        {state.currentCycle > 0 && (
          <div className='row'>
            <Cycles />
          </div>
        )}

        <div className='row'>
          {!state.activeTask && (
            <DefaultButton
              type='submit'
              aria-label='Iniciar nova tarefa'
              title='Iniciar nova tarefa'
              icon={<PlayCircleIcon />}
              color={'green'}
              key={'botao_submit'}
            />
          )}

          {!!state.activeTask && (
            <DefaultButton
              type='button'
              aria-label='Interromper tarefa atual'
              title='Interromper tarefa atual'
              icon={<CircleStopIcon />}
              color={'red'}
              key={'botao_button'}
              onClick={handleInterruptTask}
            />
          )}
        </div>
      </form>
    </div>
  );
}
