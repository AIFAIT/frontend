import React from 'react';
import { ContentEntry } from '../../types/ContentEntry';
import ContentCard from './ContentCard';

interface ContentListProps {
  entries: ContentEntry[];
  categoryFilter?: string;
}

const ContentList: React.FC<ContentListProps> = ({ entries, categoryFilter }) => {
  const filteredEntries = categoryFilter
    ? entries.filter(entry => entry.category === categoryFilter)
    : entries;

  return (
    <div>
      {filteredEntries.map(entry => (
        <ContentCard key={entry.id} entry={entry} />
      ))}
    </div>
  );
};

export default ContentList;