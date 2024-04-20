// src/components/ContentManager/ContentCard.tsx

import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';
import { ContentEntry } from '../../types/ContentEntry';
import { formConfig } from '../../config/formConfig';
import styles from './ContentCard.module.css';

interface ContentCardProps {
  entry: ContentEntry;
}

const ContentCard: React.FC<ContentCardProps> = ({ entry }) => {
  const { category, ...fields } = entry;
  const categoryConfig = formConfig[category as keyof typeof formConfig];
  const displayFields = categoryConfig?.fields.filter(field => field.displayInList) || [];

  return (
    <Card className={styles.card}>
      {fields.image && (
        <CardMedia component="img" height="140" image={fields.image} alt={fields.title} />
      )}
      <CardContent>
        <Typography variant="h6" component="h3" gutterBottom>
          {fields.title}
        </Typography>
        {displayFields.map(field => (
          <Typography key={field.name} variant="body1" gutterBottom>
            <strong>{field.label}:</strong> <span>{fields[field.name]}</span>
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
};

export default ContentCard;