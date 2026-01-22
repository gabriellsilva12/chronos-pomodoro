import { DefaultInput } from '../DefaultInput';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { CircleStopIcon, PlayCircleIcon } from 'lucide-react';
import { useRef } from 'react';
import type { TaskModel } from '../../models/taskModel';
import { useTaskContext } from '../../contexts/TasksContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import { formatSecondsTwoMinutes } from '../../utils/formatSecondsTwoMinutes';

export function MainForm() {
  const { state, setState } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);

  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (taskNameInput.current === null) return;

    const taskName = taskNameInput.current.value.trim();
    if (!taskName) return alert('campo em branco, digite algo!!');

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    };

    const secondsRemaining = newTask.duration * 60;

    setState(prevState => {
      return {
        ...prevState,
        config: { ...prevState.config },
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining,
        formattedSecondsRemaining: formatSecondsTwoMinutes(secondsRemaining),
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

  function handleInterruptTask() {
    setState(prevState => {
      return {
        ...prevState,
        activeTask: null,
        secondsRemaining: 0,
        formattedSecondsRemaining: '00:00',
        tasks: prevState.tasks.map(( task ) => {
          if(prevState.activeTask && prevState.activeTask.id === task.id) {
            return {...task, interruptDate: Date.now()}
          }
          return task
        })
      };
    });
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
          />
        </div>

        <div className='row'>
          <p>
            Nesse ciclo <strong>descanse</strong> por
            <strong> 5 minutos</strong>
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
