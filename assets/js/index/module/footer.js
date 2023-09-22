// Footer 
export let footerHTML = `
<div id="dynamic-footer">
  <div class="row">
    <!-- Syntway -->
    <div class="col-lg-3 col-md-3">
      <img src="./assets/img/logo.png" alt="Logo">
      <h5>Syntway</h5>
      <p>Syntway is an Indian IT Company focusing on Education System Solution and Web designing and development.</p>
    </div>
    <!-- Quick link -->
    <div class="col-lg-3 col-md-3">
      <h5>Quick Links</h5>
      <ul class="navbar-nav">
        <li class="nav-item"><a class="nav-link" href="./index.html">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="./about.html">About Us</a></li>
        <li class="nav-item"><a class="nav-link" href="./services.html">Services</a></li>
        <li class="nav-item"><a class="nav-link" href="./contact.html">Contact Us</a></li>
      </ul>
    </div>
    <!-- Contact us -->
    <div class="col-lg-3 col-md-3">
      <h5>Contact Us</h5>
      <p class="address">Khaga Fatehpur Uttar Pradesh India 212655</p>
      <div class="contact-link">
        <p><b>Email:</b> <a href="mailto:synt.way@gmail.com">synt.way@gmail.com</a></p>
        <p><b>Phone:</b> <a href="tel:+918948263861">+91-89482-63861 </a></p>
      </div>
    </div>
    <!-- Follow Us -->
    <div class="col-lg-3 col-md-3">
      <h5>Follow Us</h5>
      <div class="social-links">
        <a href="https://linkedin.com/in/syntway"><i class="bi bi-linkedin"></i></a>
        <a href="https://twitter.com/synt_way"><i class="bi bi-twitter"></i></a>
        <a href="https://github.com/synt-way"><i class="bi bi-github"></i></a>
        <a href="https://syntway.slack.com/"><i class="bi bi-slack"></i></a>
      </div>
    </div>
  </div>
    <!-- Copyright -->
    <div class="text-lg-center text-md-center pt-2">
    <p>&copy; 2023 Syntway. All rights reserved.</p>
  </div>
</div>
`;
export let footer = document.querySelector('.footer').innerHTML = footerHTML;