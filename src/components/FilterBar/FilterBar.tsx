// FilterBar.tsx
import React from 'react';
import styles from './FilterBar.module.css';

interface FilterBarProps {
  onFilterChange: (value: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ onFilterChange }) => {
  return (
    <div className={styles.filterBar}>
      <input
        type="text"
        className={styles.filterInput}
        onChange={(e) => onFilterChange(e.target.value)}
        placeholder="Search..."
      />
    </div>
  );
};

export default FilterBar;
