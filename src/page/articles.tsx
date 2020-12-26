import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { BlogArticle } from '../components/blogArticle/blogArticle';

const Article: FC = () => {
  const { id } = useParams<{ id: string }>();
  const articleNum: number = Number(id);

  const blog = useSelector((state: RootState) => {
    return state.articlesArray.articles;
  });

  const article = blog.find((item) => item.id === articleNum);

  return (
    <section>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12">
            <BlogArticle
              id={article?.id}
              title={article?.title}
              body={article?.body}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Article;
