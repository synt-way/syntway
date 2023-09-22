export function redirectEducation() {
  let card = document.querySelectorAll('.h-card');
  let title = document.querySelectorAll('.h-card .card-title');
    function redirect(url, target) {
      window.open(url, target);
    }
    for (let i = 0; i < card.length; i++) {
      card[i].onclick = () => {
        switch(title[i].innerHTML.toUpperCase()) {
          case "HTML":
            redirect('./markup.html', "_blank");
            break;
          case "CSS": 
            redirect('./cascade.html', "_blank");
            break;
          case "JAVASCRIPT": 
            redirect('./script.html', "_blank");
            break;
          case "BOOTSTRAP": 
            redirect('https://getbootstrap.com/docs/5.3/getting-started/introduction/', "_blank");
            break;
          default:
            //console.log('Condition not match');
            break;
        }
      }
    }
  }
redirectEducation();
