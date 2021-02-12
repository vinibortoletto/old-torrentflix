import React from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../../../../../contexts/Data';
import { List } from './Categories.styles';

export default function Categories() {
  const { data } = useData();

  return (
    <List className="categories">
      {data.browse.nav.categories.map((category, index) => (
        <li key={index}>
          <Link
            onClick={(e) => e.target.classList.toggle('active')}
            to={category.path}
            id={category.path}
          >
            {category.name}
          </Link>
        </li>
      ))}
    </List>
  );
}
