import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';

import { Container } from './components/Container';
import { Logo } from './components/Logo'
import { Menu } from './components/Menu'
import { CountDown } from './components/CountDown'
import { DefaultInput } from './components/DefaultInput'
import { Cycles } from './components/Cycles';
import { DefaultButton } from './components/DefaultButton';

import './styles/theme.css';
import './styles/global.css';

export function App() {
  return (
    <>
      <Container>
        <Logo/>
      </Container>
      
      <Container>
        <Menu/>
      </Container>

      <Container>
        < CountDown />
      </Container>

      <Container>
        <form className='form' action="">
          <div className="row">
            <DefaultInput 
            id={'meuInput'} 
            type={'text'} 
            labelText={'tasks'} 
            title='title' 
          />
          </div>

          <div className="row">
            <p>Nesse ciclo <strong>descanse</strong> por <strong>5 minutos</strong></p>
          </div>

          <div className="row">
            <Cycles/>
          </div>

          <div className="row">
            < DefaultButton icon={ <PlayCircleIcon/>} color='green'/>
          </div>
        </form>
      </Container>
    </>
  );
}
