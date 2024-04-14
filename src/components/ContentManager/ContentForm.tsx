// src/components/ContentManager/ContentForm.tsx

import React, { useState } from 'react';
import { ContentEntry } from '../../types/ContentEntry';
import { FormConfig, Field } from '../../config/formConfig';

interface ContentFormProps {
  formConfig: FormConfig;
  selectedCategory: string;
  onSubmit: (newEntry: ContentEntry) => void;
}

const ContentForm: React.FC<ContentFormProps> = ({
  formConfig,
  selectedCategory,
  onSubmit,
}) => {
  const [formData, setFormData] = useState<ContentEntry>({
    id: '',
    title: '',
    description: '',
    category: selectedCategory,
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newEntry: ContentEntry = {
      ...formData,
      category: selectedCategory,
    };
    onSubmit(newEntry);
    setFormData({
      id: '',
      title: '',
      description: '',
      category: selectedCategory,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {selectedCategory &&
        formConfig[selectedCategory].fields.map((field: Field) => (
          <div key={field.name}>
            <label htmlFor={field.name}>{field.label}</label>
            {field.type === 'textarea' ? (
              <textarea
                id={field.name}
                name={field.name}
                value={formData[field.name] || ''}
                onChange={handleChange}
              />
            ) : (
              <input
                type={field.type}
                id={field.name}
                name={field.name}
                value={formData[field.name] || ''}
                onChange={handleChange}
              />
            )}
          </div>
        ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContentForm;