import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

type ArticleType = {
  id: number;
  userId: number;
  title: string;
  body: string;
  name: string;
  comments: [];
};

const articles: ArticleType[] = [
  {
    userId: 1,
    id: 1,
    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body:
      'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto',
    comments: [],
    name: 'Leanne Graham',
  },
  {
    userId: 1,
    id: 2,
    title: 'qui est esse',
    body:
      'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla',
    comments: [],
    name: 'Ervin Howell',
  },
  {
    userId: 1,
    id: 4,
    title: 'eum et est occaecati',
    body:
      'ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit',
    comments: [],
    name: 'Clementine Bauch',
  },
];

const Article: FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <section>
      <div className="container-fluid">
        <div className="row center-xs">
          <div className="col-xs-12">
            <h3 className="article__heading">
              Article <span className="article__heading__number">#{articles[Number(id)].id}</span>
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
            <h1 className="article__title">{articles[Number(id)].title}</h1>
          </div>
          <img className="article__image" src="https://picsum.photos/800/300" alt="" />
        </div>
      </div>
      <div className="row center-xs">
        <div className="col-xs-10 col-md-6">
          <p className="article__text">{articles[Number(id)].body.repeat(8)}.</p>
        </div>
      </div>
      <hr className="article__line second" />
    </section>
  );
};

export default Article;
