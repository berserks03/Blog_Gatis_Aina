import React, { FC, useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { EditPost } from '../store/articlesReducer/articlesActions';
import Button from '../components/button/button';

const EditArticle: FC = () => {
  const { id } = useParams<{ id: string }>();

  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const blog = useSelector((state: RootState) => {
    return state.articlesArray.articles;
  });

  const articleNum: number = Number(id);

  const article = blog.find((item) => item.id === articleNum);

  const articleTitle = article?.title;
  const articleBody = article?.body;

  const [editTitle, setEditTitle] = useState(articleTitle);
  const [editBody, setEditBody] = useState(articleBody);
  const [successEdit, setSuccessEdit] = useState(false);

  const backEditHandler = () => {
    history.push(`/articles/${articleNum}`);
  };

  const saveEditHandler = () => {

    const ident = articleNum;
    const title = editTitle;
    const body = editBody;
    
    dispatch(EditPost(ident, title, body));
    setSuccessEdit(true);
  };

  return (
    <section>
      <div className="container">
        <div className="row center-xs">
          <div className="col-xs-12">
            <h2>You can edit Article No {id}</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <h3>Change article title:</h3>
            <input
              type="text"
              value={editTitle}
              onChange={(ev: React.ChangeEvent<HTMLInputElement>): void =>
                setEditTitle(ev.target.value)}
            />
            <h3>Change article body:</h3>
            <input
              type="text"
              value={editBody}
              onChange={(ev: React.ChangeEvent<HTMLInputElement>): void =>
                setEditBody(ev.target.value)}
            />
            <div>
              <Button className="BigCard__button" onClick={backEditHandler} text="Cancel" />
              <Button className="BigCard__button" onClick={saveEditHandler} text="Save" />
            </div>
            {successEdit ? (
              <div>
                <h2>You have edited article No {articleNum}</h2>
                <Button className="BigCard__button" onClick={backEditHandler} text="Go back to the article" />
              </div>
            ) : ('')}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditArticle;
