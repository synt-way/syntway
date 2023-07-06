 $(document).ready(function() {
    // Initialize form validation
    $('#signupForm').validate({
        errorClass: 'text-danger', // Set the error text color to red
        errorElement: 'div', // Use 'div' element for error messages
        errorPlacement: function(error, element) {
            error.appendTo(element.parent()); // Place error messages next to invalid elements
        },
        highlight: function(element) {
            $(element).addClass('is-invalid'); // Apply red border to invalid elements
        },
        unhighlight: function(element) {
            $(element).removeClass('is-invalid'); // Remove red border from valid elements
        },
        rules: {
            // Define validation rules for each form field
            firstName: {
                required: true
            },
            lastName: {
                required: true
            },
            dob: {
                required: true
            },
            gender: {
                required: true
            },
            userIdType: {
                required: true
            },
            phoneNumber: {
                required: true,
                phoneUS: true // Assuming US phone number validation, you can use other phone validation rules based on your requirement
            },
            email: {
                required: true,
                email: true
            },
            address: {
                required: true
            },
            password: {
                required: true,
                passwordStrength: true // Assuming you have a custom validation rule for password strength, you can replace it with your own logic
            },
            privacyTerms: {
                required: true
            }
        },
        messages: {
            // Define error messages for each form field
            firstName: {
                required: 'Please provide a first name.'
            },
            lastName: {
                required: 'Please provide a last name.'
            },
            dob: {
                required: 'Please provide a date of birth.'
            },
            gender: {
                required: 'Please select a gender.'
            },
            userIdType: {
                required: 'Please select a user ID type.'
            },
            phoneNumber: {
                required: 'Please provide a valid phone number.'
            },
            email: {
                required: 'Please provide a valid email address.',
                email: 'Please enter a valid email address.'
            },
            address: {
                required: 'Please provide an address.'
            },
            password: {
                required: 'Please provide a password.'
            },
            privacyTerms: {
                required: 'You must agree to the privacy policy and terms of service.'
            }
        }
    });
  });