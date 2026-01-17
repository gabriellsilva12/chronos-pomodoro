import { DefaultInput } from '../DefaultInput';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { PlayCircleIcon } from 'lucide-react';
import { useTaskContext } from '../../contexts/TasksContext';

export function MainForm() {
  const { setState } = useTaskContext();

  const handleClick = () => {
    setState(prevState => {
      return {
        ...prevState,
        formattedSecondsRemaining: '11:11',
      };
    });
  };

  return (
    <div>
      <form className='form' action=''>
        <button onClick={handleClick} type='button'>
          click
        </button>

        <div className='row'>
          <DefaultInput
            id={'meuInput'}
            type={'text'}
            labelText={'task'}
            title='title'
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
