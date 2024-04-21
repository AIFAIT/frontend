// src/components/PageTitle/PageTitle.tsx

import React from 'react';
import { Typography, TypographyProps } from '@mui/material';
import styles from './PageTitle.module.css';

interface PageTitleProps extends TypographyProps {
  title: string;
  color?: 'primary' | 'secondary';
}

const PageTitle: React.FC<PageTitleProps> = ({ title, color = 'primary', sx, ...rest }) => {
  return (
    <Typography variant="h4" component="h1" className={styles.pageTitle} color={color} sx={{ ...sx }} {...rest}>
      {title}
    </Typography>
  );
};

export default PageTitle;