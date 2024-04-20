import React, { useState, useEffect } from 'react';
import { ContentEntry } from '../../types/ContentEntry';
import { Field } from '../../config/formConfig'; // Update the import to only include Field
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
  formConfig: Record<string, { fields: Field[] }>; // Update the type to use Record instead of FormConfig
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
  // State to hold the form data
  const [formData, setFormData] = useState<ContentEntry>({
    id: '',
    title: '',
    description: '',
    category: selectedCategory,
    url: '',
    image: '',
    date: '',
    detail: '',
    sortOrder: '0',
  });

  // Effect hook to update the form data when the selected category changes
  useEffect(() => {
    // Reset the form data when the category changes
    setFormData({
      id: '',
      title: '',
      description: '',
      category: selectedCategory,
      url: '',
      image: '',
      date: '',
      detail: '',
      sortOrder: '0',
    });
  }, [selectedCategory]);

  // Function to handle input changes in the form fields
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newEntry: ContentEntry = {
      ...formData,
      category: selectedCategory,
    };
    onSubmit(newEntry);
    // Reset the form data after submission
    setFormData({
      id: '',
      title: '',
      description: '',
      category: selectedCategory,
      url: '',
      image: '',
      date: '',
      detail: '',
      sortOrder: '0',
    });
  };

  // Render the form fields based on the selected category and displayInForm flag
  const renderFields = () => {
    if (!selectedCategory || !formConfig[selectedCategory]) {
      return null;
    }

    return formConfig[selectedCategory].fields
      .filter((field: Field) => field.displayInForm)
      .map((field: Field) => (
        <Box key={field.name} mb={2}>
          {field.type === 'textarea' ? (
            <TextField
              fullWidth
              variant="outlined"
              multiline
              rows={4}
              id={field.name}
              name={field.name}
              label={field.label}
              value={formData[field.name] || ''}
              onChange={handleChange}
              placeholder={field.placeholder}
              required={!field.optional}
            />
          ) : field.type === 'date' ? (
            <TextField
              fullWidth
              variant="outlined"
              type="date"
              id={field.name}
              name={field.name}
              label={field.label}
              value={formData[field.name] || ''}
              onChange={handleChange}
              placeholder={field.placeholder}
              InputLabelProps={{
                shrink: true,
              }}
              required={!field.optional}
            />
          ) : (
            <TextField
              fullWidth
              variant="outlined"
              id={field.name}
              name={field.name}
              label={field.label}
              value={formData[field.name] || ''}
              onChange={handleChange}
              placeholder={field.placeholder}
              required={!field.optional}
            />
          )}
        </Box>
      ));
  };

  return (
    <Box p={2}>
      {/* Category select dropdown */}
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

      {/* Form fields */}
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