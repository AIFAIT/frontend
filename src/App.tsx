import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, ThemeProvider, createTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import ContentManager from './components/ContentManager/ContentManager';
import AIToolsList from './components/AIToolsList/AIToolsList';
import ArticlesList from './components/ArticlesList/ArticlesList';
import BlogPage from './components/BlogPage/BlogPage';
import { Tool } from './types/Tool'; // Ensure this is the correct path

const theme = createTheme({
  // Customize your theme here
});

const App = () => {
  const [tools, setTools] = useState<Tool[]>([]);

  useEffect(() => {
    const storedTools = localStorage.getItem('contentList');
    if (storedTools) {
      const filteredTools = JSON.parse(storedTools).filter((item: Tool) => item.category === 'tool');
      setTools(filteredTools);
    }
  }, []);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              AI Tools Website
            </Typography>
            <Button color="inherit" component={Link} to="/">AI Tools</Button>
            <Button color="inherit" component={Link} to="/articles">Articles</Button>
            <Button color="inherit" component={Link} to="/blog">Blog</Button>
            <Button color="secondary" component={Link} to="/manage-content">Manage Content</Button>
          </Toolbar>
        </AppBar>
        <Routes>
          <Route path="/" element={<WrappedAIToolsList tools={tools} />} />
          <Route path="/manage-content" element={<ContentManager />} />
          <Route path="/articles" element={<ArticlesList />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
};

function WrappedAIToolsList({ tools }: { tools: Tool[] }) {
  return <AIToolsList tools={tools} />;
}

export default App;
