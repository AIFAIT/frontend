// src/components/ContentManager/ContentManager.tsx

import React, { useState, useEffect } from 'react';
import ContentForm from './ContentForm';
import ContentList from './ContentList';
import { ContentEntry } from '../../types/ContentEntry';
import { formConfig } from '../../config/formConfig';
import { Typography, Divider } from '@mui/material';

const ContentManager: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [contentEntries, setContentEntries] = useState<ContentEntry[]>([]);

  useEffect(() => {
    const storedEntries = localStorage.getItem('contentEntries');
    if (storedEntries) {
      setContentEntries(JSON.parse(storedEntries));
    }
  }, []);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handleFormSubmit = (newEntry: ContentEntry) => {
    const newEntryWithId: ContentEntry = {
      ...newEntry,
      id: Date.now().toString(),
    };
    const updatedEntries = [...contentEntries, newEntryWithId];
    setContentEntries(updatedEntries);
    localStorage.setItem('contentEntries', JSON.stringify(updatedEntries));
  };

  return (
    <div style={{ padding: '20px' }}>
      {/* Update the page title */}
      <Typography variant="h4" component="h1" sx={{ mb: 4, color: 'secondary.main' }}>
        Manage Content
      </Typography>
      <ContentForm
        formConfig={formConfig}
        selectedCategory={selectedCategory}
        onSubmit={handleFormSubmit}
        onCategoryChange={handleCategoryChange}
      />
      {/* Add a separator between the form and the content list */}
      <Divider sx={{ my: 4 }} />
      <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
        Content List
      </Typography>
      <ContentList entries={contentEntries} />
    </div>
  );
};

export default ContentManager;