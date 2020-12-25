import React, { FC } from 'react';
import './blogArticle.scss';

type BlogArticleProps = {
  id: number | undefined;
  title: string | undefined;
  body: string | undefined;
};

export const BlogArticle: FC<BlogArticleProps> = ({
  id,
  title,
  body,
}) => {
  return (
    <div className="BlogArticle">
      <div className="container-fluid">
        <div className="row center-xs">
          <div className="col-xs-12">
            <h3 className="article__heading">
              Article <span className="article__heading__number">#{id}</span>
            </h3>
            <hr className="article__line" />
            <p className="article__date">
              18<sup>th</sup> December, 2020
            </p>
          </div>
        </div>
      </div>
      <div className="row center-xs">
        <div className="col-xs-10 col-md-8">
          <div>
            <h1 className="article__title">{title}</h1>
          </div>
          <img className="article__image" src="https://picsum.photos/800/300" alt="" />
        </div>
      </div>
      <div className="row center-xs">
        <div className="col-xs-10 col-md-6">
          <p className="article__text">{body?.repeat(8)}.</p>
        </div>
      </div>
      <hr className="article__line second" />
    </div>
  );
};
