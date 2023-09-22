// Import itemsData from the 'your-file-path' file
import { itemsData } from './module/markup.js';

// Import other components and functions
import {
  updateTitleContent,
  activeTitleContent,
  initializeBtnControls,
  adjustContentHeight,
  addAccordionAttributes,
  appendAppropriateContent,
  AccordionItem,
  createAccordionItems//, 
//  prettyprint
} from '../index.js';  // Replace 'your-file-path' with the actual file path

// Call the functions
updateTitleContent();
activeTitleContent();
initializeBtnControls();
adjustContentHeight();
addAccordionAttributes();
appendAppropriateContent();
createAccordionItems(itemsData); // Pass the itemsData to createAccordionItems function

// Call prettyprint after content is loaded
//document.addEventListener('DOMContentLoaded', prettyprint);
