import React from 'react';
import ContentForm from './ContentForm';
import ContentList from './ContentList';
import styles from './ContentManager.module.css';  // Assume you have or will create basic styling

function ContentManager() {
  return (
    <div>
      <div className={styles.header}>
        <h1>Manage Content</h1>
      </div>
      <div className={styles.section}>
        <h2>Create New Entry</h2>
        <ContentForm />
      </div>
      <div className={styles.section}>
        <h2>Existing Entries</h2>
        <ContentList />
      </div>
    </div>
  );
}

export default ContentManager;
