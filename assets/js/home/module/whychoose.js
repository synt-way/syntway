export let whychoseHTML = `
<h2 class="text-center mb-4">Why Choose Us</h2>
<div class="row">
  <div class="col-md-4">
    <div class="card mb-4 text-center">
      <div class="card-body">
        <i class="fas fa-users fa-2x mb-3"></i>
        <h5 class="card-title">Experience and Expertise</h5>
        <p class="card-text">With years of experience in the industry, we have the expertise to deliver
          exceptional solutions that meet your expectations.</p>
      </div>
    </div>
  </div>
  <div class="col-md-4">
    <div class="card mb-4 text-center">
      <div class="card-body">
        <i class="fas fa-heart fa-2x mb-3"></i>
        <h5 class="card-title">Customer-Centric Approach</h5>
        <p class="card-text">We believe in building strong relationships with our clients and providing
          customized solutions and outstanding customer service.</p>
      </div>
    </div>
  </div>
  <div class="col-md-4">
    <div class="card mb-4 text-center">
      <div class="card-body">
        <i class="fas fa-lightbulb fa-2x mb-3"></i>
        <h5 class="card-title">Innovation and Quality</h5>
        <p class="card-text">We stay up-to-date with the latest technologies to deliver innovative solutions
          that are at the forefront of the industry.</p>
      </div>
    </div>
  </div>
</div>
`;
export let whychoose = document.querySelector('.why-choose-us').innerHTML = whychoseHTML;