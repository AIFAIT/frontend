export interface ContentEntry {
    id: string;
    title: string;
    description: string;
    category: string;
    url: string;
    image: string;
    date: string;
    detail: string;
    sortOrder: string;
    [key: string]: string;
  }