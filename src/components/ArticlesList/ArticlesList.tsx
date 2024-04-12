import React from 'react';
import ContentList from '../ContentManager/ContentList';

const ArticlesList: React.FC = () => {
  return (
    <div>
      <h1>Articles Page</h1>
      {/* Render ContentList with 'article' as the category filter */}
      <ContentList categoryFilter="article" />
    </div>
  );
};

export default ArticlesList;
