// Preloader function 
export default function preloader() { 

   let preElement = document.createElement('div'); 
   preElement.id = 'preloader'; 
   document.body.appendChild(preElement); 

   let preloader = document.querySelector('#preloader');
   if (preloader) {
      window.addEventListener('load', () => {
         preloader.remove();
         console.log('preloader active'); 
      });
   }
}
preloader();
// End Preloader function 