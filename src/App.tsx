// src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, ThemeProvider, createTheme, IconButton, Menu, MenuItem, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';
import ContentManager from './components/ContentManager/ContentManager';
import AIToolsList from './components/AIToolsList/AIToolsList';
import ArticlesList from './components/ArticlesList/ArticlesList';
import BlogPage from './components/BlogPage/BlogPage';
import MenuIcon from '@mui/icons-material/Menu';

const theme = createTheme({
  // Customize your theme here
});

const App = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <AppBar position="static">
          <Toolbar>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit', flexGrow: 1 }}>
              <Typography variant="h6" component="div">
                AI Tools
              </Typography>
            </Link>
            {isMobile ? (
              <>
                <IconButton
                  edge="end"
                  color="inherit"
                  aria-label="menu"
                  onClick={handleMenuOpen}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                >
                  <MenuItem component={Link} to="/" onClick={handleMenuClose}>Tools</MenuItem>
                  <MenuItem component={Link} to="/articles" onClick={handleMenuClose}>Articles</MenuItem>
                  <MenuItem component={Link} to="/blog" onClick={handleMenuClose}>Blog</MenuItem>
                  <MenuItem component={Link} to="/manage-content" onClick={handleMenuClose}>Manage Content</MenuItem>
                  <MenuItem component={Link} to="https://github.com/AIFAIT/frontend/tree/main" target="_blank" rel="noopener noreferrer" onClick={handleMenuClose}>Documentation</MenuItem>
                </Menu>
              </>
            ) : (
              <div style={{ display: 'flex', gap: '1rem' }}>
                <Button color="inherit" component={Link} to="/">Tools</Button>
                <Button color="inherit" component={Link} to="/articles">Articles</Button>
                <Button color="inherit" component={Link} to="/blog">Blog</Button>
                <Button color="secondary" component={Link} to="/manage-content">Manage Content</Button>
                <Button color="secondary" component={Link} to="https://github.com/AIFAIT/frontend/tree/main" target="_blank" rel="noopener noreferrer">Documentation</Button>
              </div>
            )}
          </Toolbar>
        </AppBar>
        <Routes>
          <Route path="/" element={<AIToolsList />} />
          <Route path="/manage-content" element={<ContentManager />} />
          <Route path="/articles" element={<ArticlesList />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
};

export default App;