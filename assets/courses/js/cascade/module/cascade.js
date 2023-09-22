// accordion item creation 
export const itemsData = [
  // section no. 1 
  { 
    id: 1, 
    btnClass: 'na', 
    expanded: 'true', 
    headerText: 'Section no. 1', 
    collapse: 'show', 
    active: 'active', 
    navItems: [
      'Section no. 1.1', 
      'Section no. 1.2',
      'Section no. 1.3'
    ], 
    content: [
      'Section no. 1.1', 
      'Section no. 1.2',
      'Section no. 1.3'
    ]
  },
  // section no. 2 
  { 
    id: 2, 
    btnClass: 'collapsed', 
    expanded: 'false', 
    headerText: 'Section no. 2', 
    collapse: 'na', 
    active: 'na', 
    navItems: [
      'Section no. 2.1', 
      'Section no. 2.2'
    ], 
    content: [
      './mark/section2/2.1.txt', 
      './mark/section2/2.2.txt'
    ]
  },
  // section no. 3 
  { 
    id: 3, 
    btnClass: 'collapsed', 
    expanded: 'false', 
    headerText: 'Section no. 3', 
    collapse: 'na', 
    active: 'na', 
    navItems: [
      'Section no. 3.1', 
      'Section no. 3.2'
    ], 
    content: [
      './mark/section3/3.1.txt', 
      './mark/section3/3.2.txt'
    ]
  }
];
