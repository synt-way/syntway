    // Add dynamic spinner element
    (function () {
      // Create the main spinner container div
      const spinnerContainer = document.createElement('div');
      spinnerContainer.className = 'spinner-container';
      // Create the spinner-border div with text-primary class
      const spinnerBorder = document.createElement('div');
      spinnerBorder.className = 'spinner-border text-primary';
      spinnerBorder.setAttribute('role', 'status');
      // Create the span element with sr-only class and 'Loading...' text
      const spinnerText = document.createElement('span');
      spinnerText.className = 'sr-only';
      spinnerText.textContent = 'Loading...';
      // Append the span to the spinner-border div
      spinnerBorder.appendChild(spinnerText);
      // Append the spinner-border div to the main spinner container div
      spinnerContainer.appendChild(spinnerBorder);
      // Append the dynamic spinner container to the body of the HTML document
      document.body.appendChild(spinnerContainer);
    })();

    // Function to hide the spinner
    function hideSpinner() {
      const spinner = document.querySelector('.spinner-container');
      if (spinner) {
        spinner.classList.add('d-none');
      }
    }

    // Event listener for the window.onload event
    window.onload = () => {
      hideSpinner();
    };