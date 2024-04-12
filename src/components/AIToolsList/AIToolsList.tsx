import React, { useState } from 'react'; // Import useState here
import styles from './AIToolsList.module.css'; // Ensure you have styling for this component

// Define the props interface
interface AIToolsListProps {
  tools: Tool[];
}

// Define the Tool type if it's not imported from another file
interface Tool {
  id: number;
  title: string;
  description: string;
  url: string;
  category: string;
  image?: string;
}

function AIToolsList({ tools }: AIToolsListProps) {
  const [filter, setFilter] = useState(''); // useState is now correctly imported

  // Filter tools based on the search filter
  const filteredTools = tools.filter(tool => tool.title.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div>
      <input
        type="text"
        placeholder="Filter tools..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className={styles.filterInput}
      />
      {filteredTools.map(tool => (
        <div key={tool.id} className={styles.toolItem}>
          <h3>{tool.title}</h3>
          <p>{tool.description}</p>
          <a href={tool.url} target="_blank" rel="noopener noreferrer">{tool.url}</a>
          {/* Display other fields as needed */}
        </div>
      ))}
    </div>
  );
}

export default AIToolsList;
