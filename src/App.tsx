
import { Container } from './components/Container';
import { Logo } from './components/Logo'
import { Menu } from './components/Menu'
import { CountDown } from './components/CountDown'
import { DefaultInput } from './components/DefaultInput'

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
            <DefaultInput id={'meuInput'} type={'text'}/>
          </div>

          <div className="row">
            <p>Nesse ciclo <strong>descanse</strong> por <strong>5 minutos</strong></p>
          </div>

          <div className="row">
            <p>Ciclos</p>
            <p> 0 0 0 0 </p>
          </div>

          <div className="row">
            <button>Enviar</button>
          </div>
        </form>
      </Container>
    </>
  );
}
