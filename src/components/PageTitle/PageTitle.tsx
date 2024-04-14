import React from 'react';
import { Typography } from '@mui/material';
import styles from './PageTitle.module.css';

interface PageTitleProps {
  title: string;
  color?: 'primary' | 'secondary';
}

const PageTitle: React.FC<PageTitleProps> = ({ title, color = 'primary' }) => {
  return (
    <Typography variant="h4" component="h1" className={styles.pageTitle} color={color}>
      {title}
    </Typography>
  );
};

export default PageTitle;