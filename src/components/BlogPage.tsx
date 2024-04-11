import React from 'react';
import styles from './BlogPage.module.css'; // Ensure the path is correct based on your file structure

const BlogPage: React.FC = () => {
  return (
    <div className={styles.blogContainer}>
      <h1 className={styles.blogTitle}>Blog Page</h1>
      <p className={styles.blogIntro}>Welcome to the AI Tools Blog!</p>
    </div>
  );
};

export default BlogPage;
