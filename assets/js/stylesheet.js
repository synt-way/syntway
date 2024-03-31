//  dynamically adding stylesheets
export default function css(url) {
   "use strict"
   const style = document.createElement('style'); 
   style.append(`@import '${url}';`);
   document.head.append(style);  
}

// window.addEventListener('load', () => css('./node_modules/animate.css/animate.min.css'));