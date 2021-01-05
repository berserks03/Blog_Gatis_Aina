import React, { FC } from 'react';
import './bigCard.scss';
import Button from '../button/button';

type BigCardProps = {
  id: number;
  title: string;
  body: string;
  clickHandler: () => void;
};

export const BigCard: FC<BigCardProps> = ({
  id,
  title,
  body,
  clickHandler,
}) => {
  return (
    <div
      className="BigCard"
      role="button"
      onClick={clickHandler}
      tabIndex={0}
      onKeyDown={clickHandler}
    >
      <div>
        <img src={`https://picsum.photos/id/${id}/300`} alt={title} className="BigCard__image" />
        <h3 className="BigCard__title"> <span className="BigCard__title__number">#{id}</span> {title.split(' ').splice(1, 5).join(' ')}</h3>
        <p className="BigCard__body">{body.substring(0, 90).trim().concat('...')}</p>
      </div>
      <div className="BigCard__footer">
        <p className="BigCard__author">By <b>{body.split(' ')[0].toUpperCase()}</b> </p>        
        <Button className='BigCard__button' text='Read more' />
      </div>
    </div>
  );
};
