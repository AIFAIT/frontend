// src/components/BlogPage/BlogPage.tsx

import React, { useState, useEffect } from 'react';
import { Container, Grid } from '@mui/material';
import PageTitle from '../PageTitle/PageTitle';
import ContentCard from '../ContentManager/ContentCard';
import { ContentEntry } from '../../types/ContentEntry';
import styles from './BlogPage.module.css';

const BlogPage: React.FC = () => {
  const [blogEntries, setBlogEntries] = useState<ContentEntry[]>([]);

  useEffect(() => {
    /**
     * Fetch the blog entries data from local storage
     * Filter the content entries to only include entries with the category "blog"
     */
    const fetchBlogEntries = () => {
      const storedEntries = localStorage.getItem('contentEntries');
      if (storedEntries) {
        const entries: ContentEntry[] = JSON.parse(storedEntries);
        const filteredBlogEntries = entries.filter(entry => entry.category === 'blog');
        setBlogEntries(filteredBlogEntries);
      }
    };

    fetchBlogEntries();
  }, []);

  return (
    <Container maxWidth="lg" className={styles.container}>
      <PageTitle title="Blog" />
      <Grid container spacing={3}>
        {blogEntries.map(blogEntry => (
          <Grid item xs={12} key={blogEntry.id}>
            <ContentCard entry={blogEntry} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default BlogPage;