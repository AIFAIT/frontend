// src/components/ContentManager/ContentManager.tsx

import React, { useState, useEffect } from 'react';
import ContentForm from './ContentForm';
import ContentList from './ContentList';
import { ContentEntry } from '../../types/ContentEntry';
import { formConfig } from '../../config/formConfig';

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
    const updatedEntries = [...contentEntries, newEntry];
    setContentEntries(updatedEntries);
    localStorage.setItem('contentEntries', JSON.stringify(updatedEntries));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ marginBottom: '20px' }}>Content Manager</h2>
      <ContentForm
        formConfig={formConfig}
        selectedCategory={selectedCategory}
        onSubmit={handleFormSubmit}
        onCategoryChange={handleCategoryChange}
      />
      <ContentList entries={contentEntries} />
    </div>
  );
};

export default ContentManager;