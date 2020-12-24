import React, { FC } from 'react';
import './search.scss';

export const Search: FC = () => {
  return (
    <div className="Search">
      <input type="search" placeholder="Search for articles" className="Search__input" />
      <button type="submit" className="Search__button">
        <span role="img" aria-label="search">
          🔍
        </span>
      </button>
    </div>
  );
};
