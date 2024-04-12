import React from 'react';
import ContentList from '../ContentManager/ContentList';

const BlogPage: React.FC = () => {
  return (
    <div>
      <h1>Blog Page</h1>
      {/* Render ContentList with 'blog' as the category filter */}
      <ContentList categoryFilter="blog" />
    </div>
  );
};

export default BlogPage;
