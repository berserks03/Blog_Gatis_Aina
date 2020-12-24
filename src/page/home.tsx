import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { BigCard } from '../components/bigCard/bigCard';
import { Search } from '../components/search/search';

type Article = {
  id: number;
  userId: number;
  title: string;
  body: string;
  name: string;
  comments: [];
};

const articles: Article[] = [
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

const Home: FC = () => {
  const history = useHistory();

  const readMoreHandler = (id: number) => {
    history.push(`articles/${String(id)}`);
  };

  return (
    <section>
      <div className="container">
        <div className="row end-xs margin-bottom--24">
          <div className="col-xs-12">
            <Search /> 
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <div className="card-section">
              {articles.map(({ id, title, body, name }) => {
                return (
                  <div key={id}>
                    <BigCard
                      title={title}
                      body={body}
                      author={name}
                      clickHandler={() => readMoreHandler(id)}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
