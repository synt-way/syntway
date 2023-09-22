export let contactHTML = `
<h2 class="text-center mb-4">Contact Us</h2>
<div class="row">
  <div class="col-lg-6 col-md-6">
    <form action="">
      <h3>Get in touch</h3>
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" class="form-control" id="name" placeholder="Enter your name">
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" class="form-control" id="email" placeholder="Enter your email">
      </div>
      <div class="form-group">
        <label for="message">Message:</label>
        <textarea class="form-control" id="message" rows="5" placeholder="Enter your message"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Send your query</button>
    </form>
  </div>
  <div class="col-lg-6 col-md-6">
    <div class="contact-details">
      <h3>Contact Details</h3>
      <p><i class="fas fa-map-marker-alt"></i> Khaga, Fatehpur, Uttar Pradesh, India</p>
      <p class="contact-icons"><i class="fas fa-phone"></i> <a href="tel:+918948263861"> +91 894-826-3861</a></p>
      <p class="contact-icons"><i class="fas fa-envelope"></i> <a href="mailto:synt.way@gmail.com"> synt.way@gmail.com</a></p>
    </div>
    <div class="social-link pb-3">
      <a href="https://github.com/synt-way" class="btn btn-outline-primary"><i class="fab fa-github"></i></a>
      <a href="https://twitter.com/synt_way" class="btn btn-outline-primary"><i class="fab fa-twitter"></i></a>
      <a href="https://www.linkedin.com/in/syntway" class="btn btn-outline-primary"><i class="fab fa-linkedin-in"></i></a>
      <a href="https://wa.me/+918948263861" class="btn btn-outline-primary"><i class="fab fa-whatsapp"></i></a>
    </div>
    <div class="embed-responsive embed-responsive-21by9">
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14377.789167243332!2d81.0839987!3d25.72271779999999!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399b41d970cdcb6d%3A0xe46bfcadc340ac82!2sSyntway!5e0!3m2!1sen!2sin!4v1688625790549!5m2!1sen!2sin" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>
</div>
`;
export let contact = document.querySelector('.contact-us').innerHTML = contactHTML;