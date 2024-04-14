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
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit', flexGrow: 1 }}>
        <Typography
  variant="h6"
  component="div"
  sx={{
    fontWeight: 'bold',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    borderRadius: '4px',
    padding: '0.5rem 1rem',
    color: 'white',
    display: 'inline-block',
    fontFamily: 'Arial, sans-serif',
    fontSize: '1.5rem',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      cursor: 'pointer',
      transform: 'scale(1.05)',
    },
  }}
>
  AI Tools
</Typography>
  </Link>
  <div style={{ display: 'flex', gap: '1rem' }}>
    <Button color="inherit" component={Link} to="/">Tools</Button>
    <Button color="inherit" component={Link} to="/articles">Articles</Button>
    <Button color="inherit" component={Link} to="/blog">Blog</Button>
    <Button color="secondary" component={Link} to="/manage-content">Manage Content</Button>
  </div>
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
