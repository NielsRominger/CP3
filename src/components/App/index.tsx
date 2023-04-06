import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import axios, { isCancel, AxiosError } from 'axios';
import SearchBar from '../SearchBar';
import Message from '../Message';
import './styles.scss';
import ReposResults from '../ReposResults';

function App() {
  const [formValue, setFormValue] = useState('');
  const [formSubmittedValue, setFormSubmittedValue] = useState<string>('');
  const [APIdata, setAPIdata] = useState(null);
  const [searchResultNumber, setSearchResultNumber] = useState(0);
  const [cardsDatas, setCardDatas] = useState([]);

  useEffect(() => {
    // console.log(formSubmittedValue);
  }, [formSubmittedValue]);

  const handleOnChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setFormValue(event.target.value);
  };

  const handleSubmitFormValue = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormSubmittedValue(formValue);
    setFormValue('');
  };

  useEffect(() => {
    //! si le temps ajouter un loading + finally
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/search/repositories?q=${formSubmittedValue}`
        );
        setAPIdata(response.data);
        // console.log(APIdata);
        setSearchResultNumber(response.data.items.length);
        // console.log(searchResultNumber);
        setCardDatas(response.data.items);
        console.log(cardsDatas);
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
      }
    };

    fetchData();
  }, [formSubmittedValue, searchResultNumber]);

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
      <Message searchResultNumber={searchResultNumber} />
      <ReposResults cardsDatas={cardsDatas} />
    </div>
  );
}

export default App;
