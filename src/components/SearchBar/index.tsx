import { ChangeEvent, FormEvent } from 'react';
import { Form } from 'semantic-ui-react';
import './styles.scss';

interface SearchBarProps {
  handleOnChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSubmitFormValue: (event: FormEvent<HTMLFormElement>) => void;
  ValueInSearchBar: string;
}

function SearchBar({
  handleOnChangeInput,
  handleSubmitFormValue,
  ValueInSearchBar,
}: SearchBarProps) {
  return (
    <Form className="search_bar" onSubmit={handleSubmitFormValue}>
      <Form.Field>
        <input
          className="search_field"
          onChange={handleOnChangeInput}
          value={ValueInSearchBar}
        />
      </Form.Field>
    </Form>
  );
}

export default SearchBar;
