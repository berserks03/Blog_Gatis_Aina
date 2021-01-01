import React, { FC } from 'react';
import './bigCard.scss';
import Button from '../button/button';

type BigCardProps = {
  id: number | undefined;
  title: string | undefined;
  body: string | undefined;
  clickHandler: () => void;
};

export const BigCard: FC<BigCardProps> = ({
  id,
  title,
  body,
  clickHandler,
}) => {
  return (
    <div className="BigCard">
      <div>
        <img src="https://picsum.photos/300" alt={title} className="BigCard__image" />
        <h3 className="BigCard__title"> <span className="BigCard__title__number">#{id}</span> {title?.toString().split(' ').splice(1, 5).join(' ')}</h3>
        <p className="BigCard__body">{body?.toString().substring(0, 90).trim().concat('...')}</p>
      </div>
      <div className="BigCard__footer">
        <p className="BigCard__author">By <b>{body?.toString().split(' ')[0].toUpperCase()}</b> </p>        
        <Button className='BigCard__button' onClick={clickHandler} text='Read more' />
      </div>
    </div>
  );
};
