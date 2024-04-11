import React, { useState } from 'react';
import styles from './AIToolsList.module.css';
import { Tool } from '../types/Tool';

const sampleTools: Tool[] = [
  { id: 1, name: "Tool A", category: "NLP" },
  { id: 2, name: "Tool B", category: "Vision" },
  { id: 3, name: "Tool C", category: "NLP" },
];

const AIToolsList: React.FC = () => {
  const [filter, setFilter] = useState<string>('');
  const filteredTools: Tool[] = sampleTools.filter((tool) => tool.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <>
      <input
        type="text"
        id="toolFilter"
        className={styles.filterInput}
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filter tools..."
      />
      <ul className={styles.toolsList}>
        {filteredTools.map((tool) => (
          <li key={tool.id}>{tool.name} - {tool.category}</li>
        ))}
      </ul>
    </>
  );
};

export default AIToolsList;