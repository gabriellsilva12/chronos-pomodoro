import { DefaultInput } from '../DefaultInput';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { PlayCircleIcon } from 'lucide-react';
import { useRef, useState } from 'react';

export function MainForm() {

  const numero = useRef< HTMLInputElement >(null) 

  function handleCreateNewTask(event:  React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    console.log(numero.current.value)
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
            ref={numero}
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
