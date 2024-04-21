// src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, ThemeProvider, createTheme, IconButton, Menu, MenuItem, useMediaQuery, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import ContentManager from './components/ContentManager/ContentManager';
import AIToolsList from './components/AIToolsList/AIToolsList';
import ArticlesList from './components/ArticlesList/ArticlesList';
import BlogPage from './components/BlogPage/BlogPage';
import Home from './components/Home/Home';
import MenuIcon from '@mui/icons-material/Menu';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

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
                  <MenuItem component={Link} to="/tools" onClick={handleMenuClose}>Tools</MenuItem>
                  <MenuItem component={Link} to="/articles" onClick={handleMenuClose}>Articles</MenuItem>
                  <MenuItem component={Link} to="/blog" onClick={handleMenuClose}>Blog</MenuItem>
                  <Divider />
                  <MenuItem component={Link} to="/manage-content" onClick={handleMenuClose}>Manage Content</MenuItem>
                  {/* Add an icon next to the "Documentation" link */}
                  <MenuItem component={Link} to="https://github.com/AIFAIT/frontend/tree/main" target="_blank" rel="noopener noreferrer" onClick={handleMenuClose}>
                    Documentation
                    <OpenInNewIcon fontSize="small" sx={{ ml: 1 }} />
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <div style={{ display: 'flex', gap: '1rem' }}>
                <Button color="inherit" component={Link} to="/tools">Tools</Button>
                <Button color="inherit" component={Link} to="/articles">Articles</Button>
                <Button color="inherit" component={Link} to="/blog">Blog</Button>
                <Button color="secondary" component={Link} to="/manage-content">Manage Content</Button>
                {/* Add an icon next to the "Documentation" link */}
                <Button color="secondary" component={Link} to="https://github.com/AIFAIT/frontend/tree/main?tab=readme-ov-file#ai-tools-website" target="_blank" rel="noopener noreferrer">
                  Documentation
                  <OpenInNewIcon fontSize="small" sx={{ ml: 1 }} />
                </Button>
              </div>
            )}
          </Toolbar>
        </AppBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tools" element={<AIToolsList />} />
          <Route path="/manage-content" element={<ContentManager />} />
          <Route path="/articles" element={<ArticlesList />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
};

export default App;