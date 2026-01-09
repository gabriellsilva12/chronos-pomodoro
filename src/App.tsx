import { Heading } from './components/Heading';
import { TimerIcon } from 'lucide-react';

import './styles/theme.css';
import './styles/global.css';

export function App() {
  return (
    <div>
      <Heading>
        Olá mundo 1!

        <button>
          <TimerIcon />
        </button>

      </Heading>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem aliquam
        fuga in dignissimos!
      </p>
    </div>
  );
}
