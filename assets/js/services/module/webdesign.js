export let servicesLinkHTML = `
<h2 class="text-center mb-4">Web design and Development</h2>
<div class="row">
  <!-- Web Application -->
  <div class="col-md-3 mb-4">
    <div class="card shadow text-center h-100">
      <div class="card-body">
        <i class="fas fa-laptop-code fa-2x mb-3"></i>
        <h5 class="card-title">Web Application</h5>
        <p class="card-text">Interactive online tools enhancing user experiences and productivity.</p>
      </div>
    </div>
  </div>
  <!-- E-Commerce -->
  <div class="col-md-3 mb-4">
    <div class="card shadow text-center h-100">
      <div class="card-body">
        <i class="fas fa-shopping-cart fa-2x mb-3"></i>
        <h5 class="card-title">E-Commerce</h5>
        <p class="card-text">Revolutionizing retail through digital commerce. </p>
      </div>
    </div>
  </div>
  <!-- CMS Development -->
  <div class="col-md-3 mb-4">
    <div class="card shadow text-center h-100">
      <div class="card-body">
        <i class="fas fa-database fa-2x mb-3"></i>
        <h5 class="card-title">CMS Development</h5>
        <p class="card-text">Empowering seamless content management with innovative CMS solutions.</p>
      </div>
    </div>
  </div>
  <!-- API Integration -->
  <div class="col-md-3 mb-4">
    <div class="card shadow text-center h-100">
      <div class="card-body">
        <i class="fas fa-link fa-2x mb-3"></i>
        <h5 class="card-title">API Integration</h5>
        <p class="card-text">Seamlessly connecting systems through powerful API integration.</p>
      </div>
    </div>
  </div>
</div>
<div class="row">
  <!-- GCP Management-->
  <div class="col-md-3 mb-4">
    <div class="card shadow text-center h-100">
      <div class="card-body">
        <i class="fab fa-google fa-2x mb-3"></i>
        <h5 class="card-title">GCP Management</h5>
        <p class="card-text">Efficiently managing GCP infrastructure for optimal performance. </p>
      </div>
    </div>
  </div>
  <!-- Firebase -->
  <div class="col-md-3 mb-4">
    <div class="card shadow text-center h-100">
      <div class="card-body">
        <i class="material-icons mb-3">whatshot</i>
        <h5 class="card-title">Firebase hosting</h5>
        <p class="card-text">Effortless web hosting with Firebase's scalable and secure platform. </p>
      </div>
    </div>
  </div>
  <!-- AWS -->
  <div class="col-md-3 mb-4">
    <div class="card shadow text-center h-100">
      <div class="card-body">
        <i class="fab fa-aws fa-2x mb-3"></i>
        <h5 class="card-title">AWS Management</h5>
        <p class="card-text">Powerful cloud services with AWS for scalable solutions.</p>
      </div>
    </div>
  </div>
  <!-- API Integration -->
  <div class="col-md-3 mb-4">
    <div class="card shadow text-center h-100">
      <div class="card-body">
        <i class="fab fa-github fa-2x mb-3"></i>
        <h5 class="card-title">GitHub</h5>
        <p class="card-text">Platform for hosting, sharing, and collaborating on code projects.</p>
      </div>
    </div>
  </div>
</div>
`;
export let servicesLink = document.querySelector('.services-link').innerHTML = servicesLinkHTML;