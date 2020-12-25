import { ArticleType, ADD_ARTICLES, AllActions } from './articlesTypes';

const articles: ArticleType[] = [
  {
    userId: 1,
    id: 1,
    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body:
      'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto',
  },
  {
    userId: 1,
    id: 2,
    title: 'qui est esse',
    body:
      'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla',
  },
  {
    userId: 1,
    id: 3,
    title: 'eum et est occaecati',
    body:
      'ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit',
  },
];

const initialState: ArticleType[] = articles;

export const articlesArray = (state = initialState, action: AllActions) => {
  switch (action.type) {
    case ADD_ARTICLES: {
      const newArticles = action.articles;
      return {
        ...state,
        articles: newArticles,
      };
    }
    default:
      return state;
  }
};
