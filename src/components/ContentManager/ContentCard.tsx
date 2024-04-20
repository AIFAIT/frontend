import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { ContentEntry } from '../../types/ContentEntry';
import { formConfig, Field } from '../../config/formConfig'; // Update the import to include Field
import styles from './ContentCard.module.css';

interface ContentCardProps {
  entry: ContentEntry;
}

const ContentCard: React.FC<ContentCardProps> = ({ entry }) => {
  const { category, ...fields } = entry;

  // Filter the form fields based on the displayInCard flag
  const displayFields = formConfig[category as keyof typeof formConfig].fields.filter(
    (field: Field) => field.displayInCard
  );

  return (
    <Card className={styles.card}>
      <CardContent>
        {/* Display the title of the content entry */}
        <Typography variant="h6" component="h3" gutterBottom>
          {fields.title}
        </Typography>

        {/* Display the fields based on the displayInCard flag */}
        {displayFields.map((field: Field) => (
          <Typography key={field.name} variant="body1" gutterBottom>
            <strong>{field.label}:</strong> {fields[field.name]}
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
};

export default ContentCard;