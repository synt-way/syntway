export let servicesHTML = `
<h2 class="text-center mb-4">Our Services</h2>
<div class="row card-deck">
  <div class="col-md-6 d-flex fill-flex">
    <div class="card mb-4">
      <img src="./assets/img/carousel/2.png" class="card-img-top" alt="Education Service">
      <div class="card-body">
        <h5 class="card-title">Education System Solutions</h5>
        <p class="card-text">We offer a range of education system solutions including learning management
          systems, e-learning platforms, and student information systems. Our solutions streamline administrative
          tasks and foster interactive learning experiences.</p>
      </div>
    </div>
  </div>
  <div class="col-md-6 d-flex fill-flex">
    <div class="card mb-4">
      <img src="./assets/img/carousel/3.png" class="card-img-top" alt="Web Development">
      <div class="card-body">
        <h5 class="card-title">Web Design and Development</h5>
        <p class="card-text">Our expert team of designers and developers create visually appealing and
          user-friendly websites tailored to your specific requirements. We leverage the latest web technologies
          to deliver high-quality, responsive, and scalable websites.</p>
      </div>
    </div>
  </div>
</div>
`;
export let services = document.querySelector('.services').innerHTML = servicesHTML;