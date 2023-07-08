  // Smooth scrolling to section on click
$(document).ready(function() {
  $('.nav-link').on('click', function(event) {
    event.preventDefault();
    var slideIndex = $(this).data('slide-to');
    $('.carousel-item').removeClass('active');
    $('.carousel-item').eq(slideIndex).addClass('active');
    $('.section').removeClass('active animate-section');
    $('.section').eq(slideIndex).addClass('active animate-section');
    $('.nav-link').removeClass('active-section');
    $(this).addClass('active-section');
    $('.btn-control .prev-slide').prop('disabled', false);
    $('.btn-control .next-slide').prop('disabled', false);

    if (slideIndex === 0) {
      $('.btn-control .prev-slide').prop('disabled', true);
    } else if (slideIndex === $('.carousel-item').length - 1) {
      $('.btn-control .next-slide').prop('disabled', true);
    }
  });

  // Show initial active section
  var initialSlide = $('.carousel-item.active').index();
  $('.section').eq(initialSlide).addClass('active animate-section');
  $('.nav-link').eq(initialSlide).addClass('active-section');
});

// Button controls
$('.btn-control .prev-slide').on('click', function() {
  var currentSlide = $('.carousel-item.active').index();
  if (currentSlide > 0) {
    $('.carousel-item').removeClass('active');
    $('.carousel-item').eq(currentSlide - 1).addClass('active');
    $('.section').removeClass('active animate-section');
    $('.section').eq(currentSlide - 1).addClass('active animate-section');
    $('.nav-link').removeClass('active-section');
    $('.nav-link').eq(currentSlide - 1).addClass('active-section');
    $('.btn-control .next-slide').prop('disabled', false);
    if (currentSlide - 1 === 0) {
      $('.btn-control .prev-slide').prop('disabled', true);
    }
  }
});

$('.btn-control .next-slide').on('click', function() {
  var currentSlide = $('.carousel-item.active').index();
  if (currentSlide < $('.carousel-item').length - 1) {
    $('.carousel-item').removeClass('active');
    $('.carousel-item').eq(currentSlide + 1).addClass('active');
    $('.section').removeClass('active animate-section');
    $('.section').eq(currentSlide + 1).addClass('active animate-section');
    $('.nav-link').removeClass('active-section');
    $('.nav-link').eq(currentSlide + 1).addClass('active-section');
    $('.btn-control .prev-slide').prop('disabled', false);
    if (currentSlide + 1 === $('.carousel-item').length - 1) {
      $('.btn-control .next-slide').prop('disabled', true);
    }
  }
});