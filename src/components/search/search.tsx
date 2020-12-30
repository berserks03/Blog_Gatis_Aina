import React, { FC } from 'react';
import './search.scss';
import Button from '../button/button';

type SearchType = {
  type: string,
  placeholder: string,
  value: string,
  onChange: (ev: React.ChangeEvent<HTMLInputElement>) => void,
  onClick: () => void,
};

export const Search: FC<SearchType> = ({
  type,
  placeholder,
  value,
  onChange,
  onClick,
}) => {

  return (
    <div className="Search">
      <input
        type={type}
        placeholder={placeholder}
        className="Search__input"
        value={value}
        onChange={onChange}
      />
      <Button className="Search__button" text="🔍" onClick={onClick} />
    </div>
  );
};
