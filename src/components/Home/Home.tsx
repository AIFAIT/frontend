// src/Home/Home.tsx

import React from 'react';
import { Container, Typography } from '@mui/material';
import styles from './Home.module.css';
// Import a carousel component of your choice (e.g., react-responsive-carousel)

const Home: React.FC = () => {
  return (
    <Container maxWidth="lg" className={styles.container}>
      {/* The main title of the home page */}
      <Typography variant="h4" component="h1" className={styles.title}>
        Welcome to AI Tools
      </Typography>

      {/* The carousel component will be implemented here */}
      <div className={styles.carousel}>
        {/* Implement the carousel component */}
      </div>

      {/* Additional content or sections can be added below the carousel */}
      <div className={styles.content}>
        <Typography variant="body1">
          Discover a wide range of AI tools, articles, and blog posts to enhance your projects and stay up-to-date with the latest advancements in artificial intelligence.
        </Typography>
      </div>
    </Container>
  );
};

export default Home;