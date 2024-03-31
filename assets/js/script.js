import preloader from '../pages/preloader.js'; // preloader function 
import stylesheet from './stylesheet.js'; // stylesheet function for adding dynamically css
import hero from "../pages/hero.js"; // hero function 
import footer from '../pages/footer.js'; // footer function 
import signin from '../pages/signin.js'; // signin function 
import signup from '../pages/signup.js'; // signup function 
import contact from '../pages/contact.js'; // contact function 
import team from '../pages/team.js'; // team function 
import learning from '../pages/learning.js'; // learing function 
import services from '../pages/services.js'; // services function 
import whychoose from '../pages/whychoose.js'; // whychoose function 
import testimonial from '../pages/testimonial.js'; // testimonial function 

// animation aos 
function aos_init() {
   AOS.init({
     duration: 1000,
     easing: "ease-in-out",
     once: true,
     mirror: false, 
     disable: 'mobile'
   });
 }
 window.addEventListener('load', () => {
   aos_init();
 });
