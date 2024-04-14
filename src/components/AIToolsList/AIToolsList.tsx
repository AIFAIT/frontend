import React, { useState } from 'react';
import PageTitle from '../PageTitle/PageTitle';
import FilterBar from '../FilterBar/FilterBar';
import { Tool } from '../../types/Tool';
import { Grid, Card, CardContent, Typography } from '@mui/material';

interface AIToolsListProps {
  tools: Tool[];
}

const AIToolsList: React.FC<AIToolsListProps> = ({ tools }) => {
  const [filter, setFilter] = useState('');

  const filteredTools = tools.filter(
    (tool) => tool.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <PageTitle title="AI Tools" />
      <FilterBar onFilterChange={setFilter} />
      <Grid container spacing={2}>
        {filteredTools.map((tool) => (
          <Grid item xs={12} sm={6} md={4} key={tool.id}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="div" gutterBottom>
                  {tool.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {tool.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default AIToolsList;
