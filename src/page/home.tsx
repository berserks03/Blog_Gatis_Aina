import React, { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootState } from '../store';
import { BigCard } from '../components/bigCard/bigCard';
import { Search } from '../components/search/search';
import { ArticleType } from '../store/articlesReducer/articlesTypes';

const Home: FC = () => {
  const blog = useSelector((state: RootState) => {
    return state.articlesArray.articles;
  });

  const [blogArray, setBlogArray] = useState<ArticleType[]>();
  const [searchWord, setSearchWord] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    setBlogArray([...blog]);
  }, [blog]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const history = useHistory();

  const readMoreHandler = (id: number) => {
    history.push(`articles/${String(id)}`);
  };

  const convert = (input: string) => {
    return input.split('').map(item => item.toLocaleLowerCase()).join('');
  };

  const searchClickHandler = () => {
    let filteredBlogArticles: ArticleType[] = [...blog];
    filteredBlogArticles = filteredBlogArticles.filter((item) => {
      return item.title.includes(searchWord) || item.body.includes(searchWord);
    });
    setBlogArray(filteredBlogArticles);
  };

  return (
    <section>
      <div className="container">
        <div className="row center-xs margin-bottom--24">
          <div className="col-xs-12">
            <Search
              type="search"
              placeholder="Search for articles..."
              value={searchWord}
              onChange={(ev: React.ChangeEvent<HTMLInputElement>): void =>
                setSearchWord(convert(ev.target.value))}
              onClick={searchClickHandler}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <div className="card-section">
              {blogArray && blogArray.length > 0 ? (
                blogArray?.map(({ id, title, body }) => {
                  return (
                    <div key={id}>
                      <BigCard
                        title={title}
                        body={body}
                        clickHandler={() => readMoreHandler(id)}
                      />
                    </div>
                  );
                })
              ) : (
                <div>
                  {loading ? (
                    <div>
                      <h1 className="article-not-found">Loading...</h1>
                    </div>
                  ) : (
                    <div>
                      <h1>
                        Sorry, article with word:
                        <span className="wrong-search-word"> {searchWord}</span> not found
                      </h1>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
