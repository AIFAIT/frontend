// src/components/ArticlesList/ArticlesList.tsx

import React, { useState, useEffect } from 'react';
import { Container, Grid } from '@mui/material';
import PageTitle from '../PageTitle/PageTitle';
import ContentCard from '../ContentManager/ContentCard';
import { ContentEntry } from '../../types/ContentEntry';
import styles from './ArticlesList.module.css';

const ArticlesList: React.FC = () => {
  const [articles, setArticles] = useState<ContentEntry[]>([]);

  useEffect(() => {
    /**
     * Fetch the articles data from local storage
     * Filter the content entries to only include entries with the category "article"
     */
    const fetchArticles = () => {
      const storedEntries = localStorage.getItem('contentEntries');
      if (storedEntries) {
        const entries: ContentEntry[] = JSON.parse(storedEntries);
        const filteredArticles = entries.filter(entry => entry.category === 'article');
        setArticles(filteredArticles);
      }
    };

    fetchArticles();
  }, []);

  return (
    <Container maxWidth="lg" className={styles.container}>
      <PageTitle title="Articles" />
      <Grid container spacing={3}>
        {articles.map(article => (
          <Grid item xs={12} key={article.id}>
            <ContentCard entry={article} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ArticlesList;