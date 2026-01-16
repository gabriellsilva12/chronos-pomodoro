import { DefaultInput } from '../DefaultInput'
import { Cycles } from '../Cycles'
import { DefaultButton } from '../DefaultButton'
import { PlayCircleIcon } from 'lucide-react'
import type { HomeProps } from '../../pages/Home'



export function MainForm({ state, setState }: HomeProps) {
  const handleClick = () => {
    setState(prevState => {
      return {
        ...prevState,
        formattedSecondsRemaining: "22:22",
        config: {
          ...prevState.config,
          workTime: 32,
        },
      }
    })
  }
  return (
    <div>
        <form className='form' action=''>
          <div>
            <button type='button' onClick={handleClick}>click</button>
          </div>
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
              <strong> {state.config.workTime} minutos</strong>
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
  )
}
