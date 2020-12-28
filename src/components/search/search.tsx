import React, { FC } from 'react';
import './search.scss';
import Button from '../button/button';

export const Search: FC = () => {
  return (
    <div className="Search">
      <input 
        type="search" 
        placeholder="Search for articles" 
        className="Search__input" 
      />      
      <Button className='Search__button' text='🔍' />
    </div>
  );
};
