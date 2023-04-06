import { useState, useTransition, ChangeEvent, FormEvent } from 'react';
import SearchBar from '../SearchBar';
import Message from '../Message';
import './styles.scss';
import ReposResults from '../ReposResults';

function App() {
  const [formValue, setFormValue] = useState('');
  const [formSubmittedValue, setFormSubmittedValue] = useState('');

  const handleOnChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setFormValue(event.target.value);
  };

  const handleSubmitFormValue = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormSubmittedValue(formValue);
    setFormValue('');
    console.log(formSubmittedValue);
  };

  return (
    <div className="app">
      <img
        src="src/assets/images/logo-github.png"
        alt="github logo and title"
      />

      <SearchBar
        ValueInSearchBar={formValue}
        handleOnChangeInput={handleOnChangeInput}
        handleSubmitFormValue={handleSubmitFormValue}
      />
      <Message />
      <ReposResults />
    </div>
  );
}

export default App;
