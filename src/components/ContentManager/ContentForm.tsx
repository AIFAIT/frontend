// src/components/ContentManager/ContentForm.tsx

import React, { useState, useEffect } from 'react';
import { ContentEntry } from '../../types/ContentEntry';
import { FormConfig, Field } from '../../config/formConfig';
import {
  Box,
  TextField,
  Button,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
} from '@mui/material';

interface ContentFormProps {
  formConfig: FormConfig;
  selectedCategory: string;
  onSubmit: (newEntry: ContentEntry) => void;
  onCategoryChange: (category: string) => void;
}

const ContentForm: React.FC<ContentFormProps> = ({
  formConfig,
  selectedCategory,
  onSubmit,
  onCategoryChange,
}) => {
  /**
   * State to hold the form data
   * @type {ContentEntry}
   */
  const [formData, setFormData] = useState<ContentEntry>({
    id: '',
    title: '',
    description: '',
    category: selectedCategory,
  });

  /**
   * Effect hook to update the form data when the selected category changes
   * Reset the form data when the category changes
   */
  useEffect(() => {
    setFormData({
      id: '',
      title: '',
      description: '',
      category: selectedCategory,
    });
  }, [selectedCategory]);

  /**
   * Function to handle input changes in the form fields
   * @param event - Change event from the input fields
   */
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  /**
   * Function to handle form submission
   * @param event - Form submit event
   */
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

  /**
   * Render the form fields based on the selected category
   * @returns {JSX.Element | null} - Rendered form fields or null if no category selected
   */
  const renderFields = () => {
    if (!selectedCategory || !formConfig[selectedCategory]) {
      return null;
    }

    return formConfig[selectedCategory].fields.map((field: Field) => (
      <Box key={field.name} mb={2}>
        <TextField
          fullWidth
          variant="outlined"
          id={field.name}
          name={field.name}
          label={field.label}
          multiline={field.type === 'textarea'}
          rows={field.type === 'textarea' ? 4 : undefined}
          value={formData[field.name] || ''}
          onChange={handleChange}
          placeholder={field.placeholder}
        />
      </Box>
    ));
  };

  return (
    <Box p={2}>
      <FormControl fullWidth variant="outlined" margin="normal">
        <InputLabel id="category-label">Category</InputLabel>
        <Select
          labelId="category-label"
          value={selectedCategory}
          onChange={(event) => onCategoryChange(event.target.value as string)}
          label="Category"
        >
          <MenuItem value="">Select a category</MenuItem>
          {Object.keys(formConfig).map((category) => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <form onSubmit={handleSubmit}>
        {renderFields()}
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default ContentForm;