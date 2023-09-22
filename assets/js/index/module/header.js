// header 
export let headerHTML = `
<div id="dynamic-header" class="navbar navbar-expand-md navbar-light py-0">
  <!-- Start logo and name -->
  <a class="navbar-brand" href="./index.html">
    <img src="./assets/img/logo.png" alt="" width="40" height="40">
    <span>Syntway</span>
  </a>
  <!-- End logo and name -->
  <!-- Start navbar-toggler -->
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <i class="bi bi-list"></i>
  </button>
  <!-- End navbar-toggler -->
  <!-- Start navbar link -->
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <a class="nav-link" href="./index.html">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="./about.html">About Us</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="./services.html">Services</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="./contact.html">Contact Us</a>
      </li>
      <!-- End navbar link -->
      <!-- Start search form -->
      <li class="nav-item">
        <form class="d-flex align-items-center">
          <input class="form-control mr-2 my-2 my-lg-0 my-md-0" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-primary" type="submit">
            <i class="bi bi-search"></i>
          </button>
        </form>
      </li>
      <!-- End search form -->
    </ul>
  </div>
</div>
`;
export let header = document.querySelector('.header').innerHTML = headerHTML;
