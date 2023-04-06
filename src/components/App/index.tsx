import SearchBar from '../SearchBar';
import Message from '../Message';
import './styles.scss';
import ReposResults from '../ReposResults';

function App() {
  return (
    <div className="app">
      <img
        src="src/assets/images/logo-github.png"
        alt="github logo and title"
      />

      <SearchBar />
      <Message />
      <ReposResults />
    </div>
  );
}

export default App;
