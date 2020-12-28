import React, { FC } from 'react';
import './commentCard.scss';

type CommentCardProps = {
  name: string;
  email: string;
  body: string;
};

export const CommentCard: FC<CommentCardProps> = ({ name, email, body }) => {

  return (
    <div className="CommentCard">
      <div className="container">
        <div className="row middle-xs">
          <div className="col-xs-3">
            <div className="CommentCard__image-wrapper">
              <img src="https://picsum.photos/300" alt={name} className="CommentCard__image" />
              <p>
                {' '}
                <span role="img" aria-label="mail">
                  📧
                </span>{' '}
                {email}
              </p>
              <button type="button" className="BigCard__button">
                Follow
              </button>
            </div>
          </div>
          <div className="col-xs-9">
            <h3 className="CommentCard__author">
              {email.split('@')[0].replace(/[\W_]/, ' ')}
            </h3>
            <p className="CommentCard__title">{name}</p>
            <p className="CommentCard__text">{body.repeat(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
