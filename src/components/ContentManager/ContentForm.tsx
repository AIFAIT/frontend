import React, { useState } from 'react';
import styles from './ContentForm.module.css'; // Import the CSS module

interface FormData {
  id?: number;
  title: string;
  url: string;
  description: string;
  category: string;
  image?: string;
  author?: string;
  publishDate?: string;
}

const initialFormState: FormData = {
  title: '',
  url: '',
  description: '',
  category: 'tool',  // Default category
  image: '',
  author: '',
  publishDate: ''
};

function ContentForm() {
  const [formData, setFormData] = useState<FormData>(initialFormState);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Here you would typically send the data to your backend API
    // Since there's no backend, we'll update localStorage instead

    // Generate a new unique ID
    const newId = Date.now(); // For simplicity, using the current timestamp

    // Create a new entry object with the new ID and form data
    const newEntry = { ...formData, id: newId };

    // Get the current array of entries from localStorage, or initialize an empty array if it's not there
    const entries = JSON.parse(localStorage.getItem('contentList') || '[]');

    // Add the new entry to the array
    entries.push(newEntry);

    // Save the updated array back to localStorage
    localStorage.setItem('contentList', JSON.stringify(entries));

    // Clear the form
    setFormData(initialFormState);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <label className={styles.label}>
        Category:
        <select name="category" value={formData.category} onChange={handleInputChange} className={styles.select}>
          <option value="tool">Tool</option>
          <option value="article">Article</option>
          <option value="blog">Blog</option>
        </select>
      </label>
      <label className={styles.label}>
        Title:
        <input name="title" value={formData.title} onChange={handleInputChange} className={styles.input} />
      </label>
      {formData.category !== 'blog' && (
        <label className={styles.label}>
          URL:
          <input name="url" value={formData.url} onChange={handleInputChange} className={styles.input} />
        </label>
      )}
      <label className={styles.label}>
        Description:
        <textarea name="description" value={formData.description} onChange={handleInputChange} className={styles.textarea} />
      </label>
      {(formData.category === 'article' || formData.category === 'blog') && (
        <label className={styles.label}>
          Author:
          <input name="author" value={formData.author} onChange={handleInputChange} className={styles.input} />
        </label>
      )}
      {(formData.category === 'tool' || formData.category === 'article' || formData.category === 'blog') && (
        <label className={styles.label}>
          Image (optional):
          <input name="image" value={formData.image} onChange={handleInputChange} className={styles.input} />
        </label>
      )}
      {formData.category === 'blog' && (
        <label className={styles.label}>
          Publish Date:
          <input type="date" name="publishDate" value={formData.publishDate} onChange={handleInputChange} className={styles.input} />
        </label>
      )}
      <button type="submit" className={styles.button}>Submit</button>
    </form>
  );
}

export default ContentForm;
