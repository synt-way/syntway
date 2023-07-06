$(document).ready(function() {
    $('#loginForm').validate({
      errorClass: 'error',
      errorPlacement: function(error, element) {
        error.insertAfter(element);
      },
      rules: {
        email: {
          required: true,
          email: true
        },
        password: {
          required: true,
          minlength: 6
        }
      },
      messages: {
        email: {
          required: 'Please enter your email address',
          email: 'Please enter a valid email address'
        },
        password: {
          required: 'Please enter your password',
          minlength: 'Your password must be at least 6 characters long'
        }
      },
      highlight: function(element) {
        $(element).addClass('error');
      },
      unhighlight: function(element) {
        $(element).removeClass('error');
      },
      submitHandler: function(form) {
        // Form submission code goes here
      }
    });
  });