import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders AI Tools List', () => {
  render(<App />);
  const aiToolsListElement = screen.getByPlaceholderText(/Filter tools.../i);
  expect(aiToolsListElement).toBeInTheDocument();
});