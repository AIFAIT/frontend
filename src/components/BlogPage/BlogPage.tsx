// src/components/BlogPage/BlogPage.tsx

import React, { useState, useEffect } from 'react';
import PageTitle from '../PageTitle/PageTitle';
import ContentList from '../ContentManager/ContentList';
import { ContentEntry } from '../../types/ContentEntry';

const BlogPage: React.FC = () => {
  const [blogEntries, setBlogEntries] = useState<ContentEntry[]>([]);

  useEffect(() => {
    const fetchBlogEntries = async () => {
      const response = await fetch('/api/blogs');
      const data = await response.json();
      setBlogEntries(data);
    };

    fetchBlogEntries();
  }, []);

  return (
    <div>
      <PageTitle title="Blog" />
      <ContentList entries={blogEntries} categoryFilter="blog" />
    </div>
  );
};

export default BlogPage;