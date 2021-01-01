import React, { FC, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ArticleType } from '../../store/articlesReducer/articlesTypes';
import { CommentType } from '../../store/commentsReducer/commentsTypes';
import { RootState } from '../../store';
import Button from '../button/button';
import { CommentCard } from '../commentCard/commentCard';
import { CommentInput } from '../commentInput/commentInput';
import { LittleCard } from '../littleCard/littleCard';
import { getRandomDate } from '../../helperFunctions/dateHelper';
import './blogArticle.scss';
import { DeleteArticles } from '../../store/articlesReducer/articlesActions';
import { DeleteComments } from '../../store/commentsReducer/commentsActions';

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

  const [successLogIn, setSuccesslogIn] = useState(false);

  const usersArray = useSelector((state: RootState) => {
    return state.loginReducer.users;
  });
 
  const activeUser = usersArray.find((item) => item.online === 'loggedIn');

  useEffect(() => {
    if (activeUser !== undefined) {
      setSuccesslogIn(true);
    }
  }, [activeUser]);

  const history = useHistory();

  const backButtonClickHandler = () => {
    history.push('/home');
  };

  const readMoreHandler = (ident: number) => {
    history.push(`/articles/${String(ident)}`);
  };

  const dispatch = useDispatch();

  const deletPostHandler = () => {
    if (id) {
      dispatch(DeleteArticles(id));
    }
    history.push('/home');
  };

  const deleteCommentHandler = (commentId: number) => {
    if (commentId) {
      dispatch(DeleteComments(commentId));
    }
  };


  const date = getRandomDate();

  return (
    <div className="BlogArticle">
      <div className="container">
        <div className="row center-xs">
          <div className="col-xs-12">
            <h3 className="article__heading">
              Article <span className="article__heading__number">#{id}</span>
            </h3>
            <hr className="article__line" />
            <p className="article__date">
              {date}
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
          {activeUser?.status === 'admin' ? (
            <Button 
              className="BigCard__button" 
              onClick={deletPostHandler} 
              text="Delete post" 
            />
          ) : ('')}
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
            {blogArray && blogArray.map((item) => {
              return (
                <div key={item?.id}>
                  <LittleCard 
                    title={item?.title} 
                    clickHandler={() => readMoreHandler(item?.id)} 
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
                  user={activeUser?.status}
                  clickHandler={() => deleteCommentHandler(item.id)}
                />
              </div>
            );
          })}
        </div>
      </div>
      {successLogIn ? (
        <div className="row center-xs">
          <div className="col-xs-12">
            <CommentInput
              postId={id}
              currentCommentArrayLength={articleComments.length}
            />
          </div>
        </div>
      ) : ('') }
      
    </div>
  );
};
