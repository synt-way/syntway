export let carouselHTML = `
<div class="carousel-inner">
    <!-- Slides-->
  <div class="carousel-item active">
    <img src="./assets/img/carousel/1.png" alt="Image 1" class="carousel-img">
    <div class="carousel-caption position-absolute">
      <p class="m-0">Description for Image 1</p>
    </div>
  </div>
  
  <div class="carousel-item">
    <img src="./assets/img/carousel/2.png" alt="Image 1" class="carousel-img">
    <div class="carousel-caption position-absolute">
      <p class="m-0">Description for Image 2</p>
    </div>
  </div>
  
  <div class="carousel-item">
    <img src="./assets/img/carousel/3.png" alt="Image 1" class="carousel-img">
    <div class="carousel-caption position-absolute">
      <p class="m-0">Description for Image 3</p>
    </div>
  </div>
  <!-- Slides Controls -->
  <a class="carousel-control-prev" href="#myCarousel" data-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </a>
  <a class="carousel-control-next" href="#myCarousel" data-slide="next">
    <span class="carousel-control-next-icon"></span>
  </a>
</div>
`;
export let carousel = document.getElementById('myCarousel').innerHTML = carouselHTML;