// src/components/ArticlesList/ArticlesList.tsx

import React, { useState, useEffect } from 'react';
import PageTitle from '../PageTitle/PageTitle';
import ContentList from '../ContentManager/ContentList';
import { ContentEntry } from '../../types/ContentEntry';

const ArticlesList: React.FC = () => {
  const [articles, setArticles] = useState<ContentEntry[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch('/api/articles');
      const data = await response.json();
      setArticles(data);
    };

    fetchArticles();
  }, []);

  return (
    <div>
      <PageTitle title="Articles" />
      <ContentList entries={articles} categoryFilter="article" />
    </div>
  );
};

export default ArticlesList;