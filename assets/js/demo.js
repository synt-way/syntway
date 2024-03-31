(() => {
   function getCookie(name) {
       var cookieName = name + "=";
       var cookies = document.cookie.split(";");
       for (var i = 0; i < cookies.length; i++) {
           var cookie = cookies[i];
           while (cookie.charAt(0) === " ") {
               cookie = cookie.substring(1);
           }
           if (cookie.indexOf(cookieName) === 0) {
               return cookie.substring(cookieName.length, cookie.length);
           }
       }
       return "";
   }

   function setCookie(name, value, days) {
       var date = new Date();
       date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
       var expires = "expires=" + date.toUTCString();
       document.cookie = name + "=" + value + ";" + expires + ";path=/";
   }

   if (!getCookie("sitevisitor")) {
       let visitorData = {
           referer: document.referrer,
           request: location.pathname.substring(1),
           time: new Date().toLocaleString("de-DE", { timeZone: "Europe/Sofia" }),
       };
       setCookie("sitevisitor", btoa(JSON.stringify(visitorData)), 365);
   }

   document.addEventListener("DOMContentLoaded", () => {
       document.querySelectorAll(".preview-test").forEach(element => {
           element.addEventListener("click", function(event) {
               event.preventDefault();
               document.querySelector("cccc").classList.remove("preview-devices-active");
               this.classList.add("preview-devices-active");
               document.querySelector("#preview-frame").className = this.id.replace("-test", "");
           });
       });
   });
})();

