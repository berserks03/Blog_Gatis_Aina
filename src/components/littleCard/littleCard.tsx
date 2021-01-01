import React, { FC } from 'react';
import './littleCard.scss';

type LittleCardProps = {
  title: string | undefined;
  clickHandler: () => void;
};

export const LittleCard: FC<LittleCardProps> = ({ title, clickHandler }) => {
  return (
    <div className="LittleCard" role="button" onClick={clickHandler} tabIndex={0} onKeyDown={clickHandler}>
      <div className="container">
        <div className="row middle-xs">
          <div className="col-xs-7">
            <div>
              <img src="https://picsum.photos/300/400" alt={title} className="LittleCard__image" />
            </div>
          </div>
          <div className="col-xs-5">
            <h3 className="LittleCard__title">
              {title}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
