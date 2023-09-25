export let educationLinkHTML = `
<h2 class="text-center mb-4">Education System Solutions</h2>
<div class="row">
  <!-- HTML -->
  <div class="col-md-3 mb-4">
    <div class="card shadow text-center h-100">
      <div class="card-body h-card">
        <i class="fab fa-html5 fa-2x mb-3"></i>
        <a href="./markup.html"><h5 class="card-title">HTML</h5></a>
        <p class="card-text">Building web pages with HTML's structured markup language.</p>
      </div>
    </div>
  </div>
  <!-- CSS -->
  <div class="col-md-3 mb-4">
    <div class="card shadow text-center h-100">
      <div class="card-body h-card">
        <i class="fab fa-css3-alt fa-2x mb-3"></i>
        <h5 class="card-title">CSS</h5>
        <p class="card-text">Cascading Style Sheets - Beautifying web pages with creative designs.  </p>
      </div>
    </div>
  </div>
  <!-- javascript -->
  <div class="col-md-3 mb-4">
    <div class="card shadow text-center h-100">
      <div class="card-body h-card">
        <i class="fab fa-js fa-2x mb-3"></i>
        <h5 class="card-title">JavaScript</h5>
        <p class="card-text">Versatile scripting language powering interactive web pages.</p>
      </div>
    </div>
  </div>
  <!-- bootstrap -->
  <div class="col-md-3 mb-4">
    <div class="card shadow text-center h-100">
      <div class="card-body h-card">
        <i class="fab fa-bootstrap fa-2x mb-3"></i>
        <h5 class="card-title">Bootstrap</h5>
        <p class="card-text">Responsive front-end framework for modern web development.</p>
      </div>
    </div>
  </div>
</div>
`;
export let educationLink = document.querySelector('.education-link').innerHTML = educationLinkHTML;
