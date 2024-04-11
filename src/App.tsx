import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AIToolsList from './components/AIToolsList'; // Update the path if necessary
import BlogPage from './components/BlogPage'; // Update the path if necessary
import styles from './App.module.css'; // Assuming you've created App.module.css for CSS Modules

const App: React.FC = () => {
  return (
    <Router>
      <div className={styles.App}>
        <nav>
          <Link to="/">Home</Link> | <Link to="/blog">Blog</Link>
        </nav>
        <Routes>
          <Route path="/" element={<AIToolsList />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
