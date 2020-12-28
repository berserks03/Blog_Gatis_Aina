import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { ArticleType } from '../../store/articlesReducer/articlesTypes';
import { CommentType } from '../../store/commentsReducer/commentsTypes';
import Button from '../button/button';
import { CommentCard } from '../commentCard/commentCard';
import { LittleCard } from '../littleCard/littleCard';
import './blogArticle.scss';

type BlogArticleProps = {
  id: number | undefined;
  title: string | undefined;
  body: string | undefined;
  blogArray: ArticleType[];
  articleComments: CommentType[];
};

export const BlogArticle: FC<BlogArticleProps> = ({
  id,
  title,
  body,
  blogArray,
  articleComments,
}) => {
  const history = useHistory();

  const backButtonClickHandler = () => {
    history.push('/home');
  };

  const readMoreHandler = (ident: number) => {
    history.push(`/articles/${String(ident)}`);
  };

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
      <div className="row center-xs">
        <div className="col-xs-12">
          <hr className="article__line second" />
          <Button 
            className="BigCard__button" 
            onClick={backButtonClickHandler} 
            text="Go Back" 
          />
          <hr className="article__line second" />
        </div>
      </div>
      <div className="row center-xs">
        <div className="col-xs-12">
          <h2 className="article__title second">HERE ARE SOME ARTICLES YOU MAY FIND INTERESTING</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12">
          <div className="little-card-section">
            {blogArray.map((item) => {
              return (
                <div key={item.id}>
                  <LittleCard 
                    title={item.title} 
                    clickHandler={() => readMoreHandler(item.id)} 
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="row center-xs">
        <div className="col-xs-12">
          <h2 className="article__title second">LET'S TALK ABOUT THIS ARTICLE</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12">
          {articleComments.map((item) => {
            return (
              <div key={item.id}>
                <CommentCard 
                  name={item.name} 
                  email={item.email} 
                  body={item.body} 
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
