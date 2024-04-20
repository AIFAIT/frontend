// src/config/formConfig.ts

export type Field = {
    name: string;
    label: string;
    type: string;
    placeholder: string;
    displayInList: boolean;
  };
  
  export type FormConfig = {
    [key: string]: {
      fields: Field[];
    };
  };
  
  export const formConfig: FormConfig = {
    tool: {
      fields: [
        { name: 'title', label: 'Title', type: 'text', placeholder: 'Enter tool title', displayInList: true },
        { name: 'description', label: 'Description', type: 'textarea', placeholder: 'Enter tool description', displayInList: true },
        { name: 'url', label: 'URL', type: 'text', placeholder: 'Enter tool URL', displayInList: false },
        // Add more fields as needed
      ],
    },
    article: {
      fields: [
        { name: 'title', label: 'Title', type: 'text', placeholder: 'Enter article title', displayInList: true },
        { name: 'description', label: 'Description', type: 'textarea', placeholder: 'Enter article description', displayInList: true },
        { name: 'author', label: 'Author', type: 'text', placeholder: 'Enter author name', displayInList: true },
        // Add more fields as needed
      ],
    },
    blog: {
      fields: [
        { name: 'title', label: 'Title', type: 'text', placeholder: 'Enter blog title', displayInList: true },
        { name: 'content', label: 'Content', type: 'textarea', placeholder: 'Enter blog content', displayInList: false },
        { name: 'publishDate', label: 'Publish Date', type: 'date', placeholder: 'Select publish date', displayInList: true },
        // Add more fields as needed
      ],
    },
  };