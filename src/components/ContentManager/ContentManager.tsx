// src/components/ContentManager/ContentManager.tsx

import React, { useState } from 'react';
import ContentForm from './ContentForm';
import ContentList from './ContentList';
import { ContentEntry } from '../../types/ContentEntry';
import { formConfig } from '../../config/formConfig';

const ContentManager: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [contentEntries, setContentEntries] = useState<ContentEntry[]>([]);

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };

  const handleFormSubmit = (newEntry: ContentEntry) => {
    setContentEntries([...contentEntries, newEntry]);
  };

  return (
    <div>
      <h2>Content Manager</h2>
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="">Select a category</option>
        {Object.keys(formConfig).map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <ContentForm
        formConfig={formConfig}
        selectedCategory={selectedCategory}
        onSubmit={handleFormSubmit}
      />
      <ContentList entries={contentEntries} />
    </div>
  );
};

export default ContentManager;