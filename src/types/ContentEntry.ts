// src/types/ContentEntry.ts

export interface ContentEntry {
    id: string;
    title: string;
    description: string;
    category: string;
    [key: string]: string;
  }