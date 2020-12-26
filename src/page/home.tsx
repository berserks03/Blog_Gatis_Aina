import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootState } from '../store';
import { BigCard } from '../components/bigCard/bigCard';
import { Search } from '../components/search/search';

const Home: FC = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blog = useSelector((state: RootState) => {
    return state.articlesArray.articles;
  });

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
              {blog &&
                blog?.map(({ id, title, body }) => {
                  return (
                    <div key={id}>
                      <BigCard
                        title={title}
                        body={body}
                        // author={name}
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
