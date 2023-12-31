// On importe ReactDom qui nous permettra d'injecter notre application dans le DOM
import ReactDOM from 'react-dom/client';
// On importe notre composant principal
import App from './components/App';
import './styles/index.scss';
import { BrowserRouter } from 'react-router-dom';

// Je créer un root pour mon application (a partir d'un élément HTML)
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// On injecte notre application dans le DOM
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
