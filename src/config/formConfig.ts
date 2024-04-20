// Define the structure of a form field
export type Field = {
    name: string; // The name of the field
    label: string; // The label to display for the field
    type: string; // The type of the field (e.g., text, textarea, date)
    placeholder: string; // The placeholder text for the field
    displayInForm: boolean; // Whether to display the field in the form
    displayInCard: boolean; // Whether to display the field in the content card
    displayInDetail: boolean; // Whether to display the field in the content detail page
    optional: boolean; // Whether the field is optional
  };
  
  // Define the form configuration object
  export const formConfig = {
    tool: {
      fields: [
        { name: 'title', label: 'Title', type: 'text', placeholder: 'Enter tool title', displayInForm: true, displayInCard: true, displayInDetail: true, optional: false },
        { name: 'description', label: 'Description', type: 'textarea', placeholder: 'Enter tool description', displayInForm: true, displayInCard: true, displayInDetail: true, optional: true },
        { name: 'url', label: 'URL', type: 'text', placeholder: 'Enter tool URL', displayInForm: true, displayInCard: true, displayInDetail: true, optional: false },
        { name: 'image', label: 'Image', type: 'text', placeholder: 'Enter image URL', displayInForm: true, displayInCard: false, displayInDetail: true, optional: true },
      ],
    },
    article: {
      fields: [
        { name: 'title', label: 'Title', type: 'text', placeholder: 'Enter article title', displayInForm: true, displayInCard: true, displayInDetail: true, optional: false },
        { name: 'description', label: 'Description', type: 'textarea', placeholder: 'Enter article description', displayInForm: true, displayInCard: true, displayInDetail: true, optional: true },
        { name: 'url', label: 'URL', type: 'text', placeholder: 'Enter article URL', displayInForm: true, displayInCard: true, displayInDetail: true, optional: false },
        { name: 'image', label: 'Image', type: 'text', placeholder: 'Enter image URL', displayInForm: true, displayInCard: false, displayInDetail: true, optional: true },
        { name: 'date', label: 'Date', type: 'date', placeholder: 'Select date', displayInForm: true, displayInCard: true, displayInDetail: true, optional: true },
      ],
    },
    blog: {
      fields: [
        { name: 'title', label: 'Title', type: 'text', placeholder: 'Enter blog title', displayInForm: true, displayInCard: true, displayInDetail: true, optional: false },
        { name: 'description', label: 'Description', type: 'textarea', placeholder: 'Enter blog description', displayInForm: true, displayInCard: true, displayInDetail: true, optional: false },
        { name: 'detail', label: 'Detail', type: 'textarea', placeholder: 'Enter blog detail', displayInForm: true, displayInCard: false, displayInDetail: true, optional: false },
        { name: 'image', label: 'Image', type: 'text', placeholder: 'Enter image URL', displayInForm: true, displayInCard: false, displayInDetail: true, optional: true },
        { name: 'date', label: 'Date', type: 'date', placeholder: 'Select date', displayInForm: true, displayInCard: true, displayInDetail: true, optional: false },
      ],
    },
  };