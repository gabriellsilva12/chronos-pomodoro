import { MainTemplate } from '../../templates/MainTemplates';
import { Container } from '../../components/Container';
import { Heading } from '../../components/Heading';
import { DefaultInput } from '../../components/DefaultInput';
import { DefaultButton } from '../../components/DefaultButton';
import { SaveIcon } from 'lucide-react';

export function Settings() {
  return (
    <MainTemplate>
      <Container>
        <Heading>Configurações</Heading>
      </Container>
      <Container>
        <p>
          Modifique as configurações para tempo de foco, descanso curto e
          descanso longo.
        </p>
      </Container>

      <Container>
        <form action='' className='form'>
          <div className='row'>
            <DefaultInput id='workTime' labelText='Foco' />
          </div>

          <div className='row'>
            <DefaultInput id='shortBreakTime' labelText='Descanso curto' />
          </div>

          <div className='row'>
            <DefaultInput id='longBreakTime' labelText='Descanso longo' />
          </div>

          <div className='row'>
            <DefaultButton icon={<SaveIcon/>} 
            aria-label='Salvar configurações'
            title='Salvar configurações'/>
          </div>
        </form>
      </Container>
    </MainTemplate>
  );
}
