import React from 'react';
import { useData } from '../../../../contexts/Data';
import { Form } from './Search.styles';

export default function Search() {
  const { language, data } = useData();

  return (
    <Form>
      <label
        htmlFor="search"
        aria-label={language === 'en' ? 'Search' : 'Pesquisar'}
      >
        <input
          name="search"
          type="text"
          id="search"
          placeholder={language === 'en' ? 'Search' : 'Pesquisar'}
        />
      </label>
    </Form>
  );
}
