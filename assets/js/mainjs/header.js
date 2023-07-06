// header navbar coding start
let header = document.querySelector('header');
header.innerHTML = `
<!-- Syntway Sticky Header -->
    <a class="navbar-brand" href="https://www.syntway.org/">
      <img src="./assets/images/logo.png" alt="" width="40" height="40">
      Syntway
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      <!-- <i class="bi bi-list"></i> -->
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" href="./home.html">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="./about.html">About Us</a>
        </li>
       <!-- <li class="nav-item">
          <a class="nav-link" href="#">Team</a>
        </li>-->
        <li class="nav-item">
          <a class="nav-link" href="./service.html">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="./contact.html">Contact Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="./signin.html">Sign In</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="./signup.html">Sign Up</a>
        </li>
        <li class="nav-item">
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">
                <i class="bi bi-search"></i>
            </button>
          </form>
        </li>
      </ul>
    </div>
 `;
 // header navbar coding ending
