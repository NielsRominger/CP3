import React from 'react';
import { Form } from 'semantic-ui-react';
import './styles.scss';

function SearchBar() {
  return (
    <Form className="search_bar">
      <Form.Field>
        <input className="search_field" />
      </Form.Field>
    </Form>
  );
}

export default SearchBar;
