import { DefaultInput } from '../DefaultInput';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { PlayCircleIcon } from 'lucide-react';
import { useRef} from 'react';
import type { TaskModel } from '../../models/taskModel';
import { useTaskContext } from '../../contexts/TasksContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';

export function MainForm() {
  const { state, setState } = useTaskContext()
  const taskNameInput = useRef< HTMLInputElement >(null) 


  const nextCycle = getNextCycle(state.currentCycle)

  console.log(nextCycle)

  function handleCreateNewTask(event:  React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if(taskNameInput.current === null) return

    const taskName = taskNameInput.current.value.trim();
    if(!taskName) return alert('campo em branco, digite algo!!')


    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: 1,
      type: 'workTime',
    }

    const secondsRemaining = newTask.duration * 60;
 
    setState(prevState => {
      return {
        ...prevState,
        config: {...prevState.config},
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining,
        formattedSecondsRemaining: '00:00',
        tasks: [...prevState.tasks, newTask]
      }
    })

  }

  return (
    <div>
      <form onSubmit={handleCreateNewTask} className='form' action='' >
        <div className='row'>
          <DefaultInput
            id={'meuInput'}
            type={'text'}
            labelText={'task'}
            title='title'
            ref={taskNameInput}
          />
        </div>

        <div className='row'>
          <p>
            Nesse ciclo <strong>descanse</strong> por
            <strong> 5 minutos</strong>
          </p>
        </div>

        <div className='row'>
          <Cycles />
        </div>

        <div className='row'>
          <DefaultButton icon={<PlayCircleIcon />} color='green' />
        </div>
      </form>
    </div>
  );
}
