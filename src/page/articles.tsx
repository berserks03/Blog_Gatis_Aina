import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { BlogArticle } from '../components/blogArticle/blogArticle';

const Article: FC = () => {
  
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const articleNum: number = Number(id);

  const blog = useSelector((state: RootState) => {
    return state.articlesArray.articles;
  });

  const article = blog.find((item) => item.id === articleNum);

  const moreBlogArray = [];

  for (let i = 1; i <= 3; i++) {
    const randomNumber = Math.floor(Math.random() * 99);
    moreBlogArray.push(blog[randomNumber]);
  }

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <BlogArticle
              id={article?.id}
              title={article?.title}
              body={article?.body}
              blogArray={moreBlogArray}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Article;
