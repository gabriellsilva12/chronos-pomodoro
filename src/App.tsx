import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';

export function App() {
  return (
    <div>
      <Heading>Olá mundo 1!</Heading>
      <Heading>Olá mundo 2!</Heading>
      <Heading>Olá mundo 3!</Heading>
      <Heading attr={4321}>Olá mundo !</Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem aliquam
        fuga in dignissimos, commodi suscipit veritatis tempora quae ea quisquam
        voluptatem odio ex deserunt. Accusamus quae molestias animi debitis
        illum!
      </p>
    </div>
  );
}
