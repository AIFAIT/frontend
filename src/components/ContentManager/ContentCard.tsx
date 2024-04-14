// src/components/ContentManager/ContentCard.tsx

import React from 'react';
import { ContentEntry } from '../../types/ContentEntry';
import { formConfig } from '../../config/formConfig';
import styles from './ContentCard.module.css';

interface ContentCardProps {
  entry: ContentEntry;
}

const ContentCard: React.FC<ContentCardProps> = ({ entry }) => {
  const { category, ...fields } = entry;
  const displayFields = formConfig[category as keyof typeof formConfig].fields.filter(field => field.displayInList);

  return (
    <div className={styles.card}>
      <h3>{entry.title}</h3>
      {displayFields.map(field => (
        <p key={field.name}>
          <strong>{field.label}:</strong> {fields[field.name]}
        </p>
      ))}
    </div>
  );
};

export default ContentCard;