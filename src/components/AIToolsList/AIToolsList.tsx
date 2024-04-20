// src/components/AIToolsList/AIToolsList.tsx

import React, { useState, useEffect } from 'react';
import { Container, Grid } from '@mui/material';
import PageTitle from '../PageTitle/PageTitle';
import ContentCard from '../ContentManager/ContentCard';
import { ContentEntry } from '../../types/ContentEntry';
import styles from './AIToolsList.module.css';

const AIToolsList: React.FC = () => {
  const [tools, setTools] = useState<ContentEntry[]>([]);

  useEffect(() => {
    const fetchTools = () => {
      const storedEntries = localStorage.getItem('contentEntries');
      if (storedEntries) {
        const entries: ContentEntry[] = JSON.parse(storedEntries);
        const filteredTools = entries.filter(entry => entry.category === 'tool');
        setTools(filteredTools);
      }
    };

    fetchTools();
  }, []);

  return (
    <Container maxWidth="lg" className={styles.container}>
      <PageTitle title="Tools" />
      <Grid container spacing={3}>
        {tools.map(tool => (
          <Grid item xs={12} key={tool.id}>
            <ContentCard entry={tool} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AIToolsList;