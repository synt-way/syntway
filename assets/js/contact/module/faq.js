export let faqHTML = `
<h2 class="m-3">Frequently ask questions</h2>
<div class="accordion" id="faqAccordion">
  <!-- FAQ 1 -->
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        1. What is Syntway?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
      <div class="accordion-body">
        Syntway is a leading provider of Education System Solutions and Web Design & Development services. We specialize in creating innovative and customized solutions to meet the unique needs of educational institutions and businesses.
      </div>
    </div>
  </div>

  <!-- FAQ 2 -->
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        2. What Education System Solutions do you offer?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
      <div class="accordion-body">
        We offer a comprehensive range of Education System Solutions, including Learning Management Systems (LMS), Student Information Systems (SIS), School Management Systems, Online Examination Platforms, Virtual Classrooms, and more.
      </div>
    </div>
  </div>

  <!-- FAQ 3 -->
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        3. Do you cater to different educational institutions?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
      <div class="accordion-body">
        Yes, we cater to a wide range of educational institutions, including schools, colleges, universities, online learning platforms, corporate training centers, and other e-learning initiatives.
      </div>
    </div>
  </div>
  
  <!-- FAQ 4 -->
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingFour">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
        4. Does Syntway offer custom web design and development services?
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
      <div class="accordion-body">
        Yes, Syntway specializes in creating custom websites tailored to the unique needs and preferences of each client. We develop responsive, user-friendly, and visually appealing websites.
      </div>
    </div>
  </div>
  
  <!-- FAQ 5 -->
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingFive">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
        5. What technologies does Syntway use for web development?
      </button>
    </h2>
    <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#faqAccordion">
      <div class="accordion-body">
        Syntway utilizes the latest web development technologies, including HTML5, CSS3, JavaScript, Bootstrap, React, Angular, and PHP, to build robust and modern websites.
      </div>
    </div>
  </div>
  
  <!-- FAQ 6 -->
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingSix">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
        6. Can Syntway redesign an existing website?
      </button>
    </h2>
    <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#faqAccordion">
      <div class="accordion-body">
        Yes, we offer website redesign services to refresh and modernize existing websites, incorporating new features and optimizing user experience.
      </div>
    </div>
  </div>
  
  <!-- FAQ 7-->
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingSeven">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
        7. Is Syntway experienced in e-commerce website development?
      </button>
    </h2>
    <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#faqAccordion">
      <div class="accordion-body">
        Absolutely! Syntway has extensive experience in developing secure and efficient e-commerce websites, including online stores, shopping carts, and payment gateway integration.
      </div>
    </div>
  </div>
  
  <!-- FAQ 8 -->
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingEight">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
        8. Does Syntway provide website maintenance services?
      </button>
    </h2>
    <div id="collapseEight" class="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#faqAccordion">
      <div class="accordion-body">
        Yes, we offer website maintenance plans to ensure that your website is regularly updated, secure, and functioning optimally.
      </div>
    </div>
  </div>
  
  <!-- FAQ 9 -->
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingNine">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
        9. How does Syntway handle client communication during projects?
      </button>
    </h2>
    <div id="collapseNine" class="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#faqAccordion">
      <div class="accordion-body">
        We maintain open and transparent communication with our clients throughout the project. Regular progress updates and discussions are conducted via email, calls, or virtual meetings.
      </div>
    </div>
  </div>
</div>
`;
export let faq = document.querySelector('.faq').innerHTML = faqHTML;