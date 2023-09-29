// Import itemsData from the 'your-file-path' file
import { itemsData } from './module/script.js';

// Import other components and functions
import {
  updateTitleContent,
  activeTitleContent,
  initializeBtnControls,
  adjustContentHeight,
  addAccordionAttributes,
  appendAppropriateContent,
  AccordionItem,
  createAccordionItems
} from '../index.js';  // Replace 'your-file-path' with the actual file path

// Call the functions
updateTitleContent();
activeTitleContent();
initializeBtnControls();
adjustContentHeight();
addAccordionAttributes();
appendAppropriateContent();
createAccordionItems(itemsData); 
// Pass the itemsData to createAccordionItems function
