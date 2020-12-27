import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './page/home';
import Login from './page/login';
import Articles from './page/articles';
import { Header } from './components/header/header';
import { getArticles } from './store/articlesReducer/articlesActions';
import { getComments } from './store/commentsReducer/commentsActions';

const App: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArticles());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getComments());
  }, [dispatch]);

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/articles/:id">
          <Articles />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
