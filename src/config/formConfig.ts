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
        // ... other fields
      ]
    },
    article: {
      fields: [
        { name: 'title', label: 'Title', type: 'text', placeholder: 'Enter article title', displayInList: true },
        // ... other fields
      ]
    },
    blog: {
      fields: [
        { name: 'title', label: 'Title', type: 'text', placeholder: 'Enter blog title', displayInList: true },
        // ... other fields
      ]
    }
  };