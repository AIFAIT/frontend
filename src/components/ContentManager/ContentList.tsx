import React, { useEffect, useState } from 'react';
import styles from './ContentList.module.css';  // Make sure the path is correct

interface ContentEntry {
  id: number;
  title: string;
  description: string;
  url: string;
  category: string;
  image?: string;
  author?: string;
  publishDate?: string;
}

// Update the interface to make categoryFilter optional
interface ContentListProps {
  categoryFilter?: string;
}

// Update the component to accept the new props, with categoryFilter being optional
function ContentList({ categoryFilter }: ContentListProps) {
  const [entries, setEntries] = useState<ContentEntry[]>([]);

  useEffect(() => {
    const storedEntries = localStorage.getItem('contentList');
    if (storedEntries) {
      let allEntries: ContentEntry[] = JSON.parse(storedEntries);
      // Only apply filter if categoryFilter is provided
      if (categoryFilter) {
        allEntries = allEntries.filter(entry => entry.category.toLowerCase() === categoryFilter.toLowerCase());
      }
      setEntries(allEntries);
    }
  }, [categoryFilter]); // categoryFilter is still a dependency but can be undefined

  return (
    <div>
      {entries.map(entry => (
        <div key={entry.id} className={styles.contentItem}>
          <h3 className={styles.contentTitle}>{entry.title}</h3>
          <p className={styles.contentDescription}>{entry.description}</p>
          {entry.url && <a href={entry.url} target="_blank" rel="noopener noreferrer" className={styles.contentLink}>Link</a>}
          {entry.author && <p className={styles.contentAuthor}>Author: {entry.author}</p>}
          {entry.publishDate && <p className={styles.contentDate}>Publish Date: {entry.publishDate}</p>}
          {/* You can add image display here if needed */}
        </div>
      ))}
    </div>
  );
}

export default ContentList;
