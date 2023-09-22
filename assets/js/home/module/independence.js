// Create the outermost container
const containerDiv = document.createElement("div");
containerDiv.classList.add("container-fluid");

// Create the image modal
const imageModalDiv = document.createElement("div");
imageModalDiv.id = "imageModal";
imageModalDiv.classList.add("modal", "fade");
imageModalDiv.tabIndex = "-1";
imageModalDiv.role = "dialog";
imageModalDiv.setAttribute("aria-labelledby", "imageModalLabel");
imageModalDiv.setAttribute("aria-hidden", "true");
imageModalDiv.setAttribute("data-backdrop", "static");

// Create the modal dialog
const modalDialogDiv = document.createElement("div");
modalDialogDiv.classList.add("modal-dialog");

// Create the modal content
const modalContentDiv = document.createElement("div");
modalContentDiv.classList.add("modal-content");

// Create the button and its icon
const closeButtonDiv = document.createElement("div");
closeButtonDiv.classList.add("text-right");

const closeButton = document.createElement("button");
closeButton.type = "button";
closeButton.classList.add("btn");
closeButton.id = "specificButton";

const closeIcon = document.createElement("i");
closeIcon.classList.add("bi", "bi-x-square");

closeButton.appendChild(closeIcon);
closeButtonDiv.appendChild(closeButton);

// Create the modal body
const modalBodyDiv = document.createElement("div");
modalBodyDiv.classList.add("modal-body");

// Create the embedded video
const embedDiv = document.createElement("div");
embedDiv.classList.add("embed-responsive", "embed-responsive-16by9");

const videoIframe = document.createElement("iframe");
videoIframe.classList.add("embed-responsive-item");
videoIframe.src = "https://www.youtube.com/embed/7cWMYFlNyP8?autoplay=1";
videoIframe.setAttribute("allowfullscreen", "");
videoIframe.setAttribute("muted", "");

embedDiv.appendChild(videoIframe);

// Append elements to build the structure
modalContentDiv.appendChild(closeButtonDiv);
modalBodyDiv.appendChild(embedDiv);
modalContentDiv.appendChild(modalBodyDiv);
modalDialogDiv.appendChild(modalContentDiv);
imageModalDiv.appendChild(modalDialogDiv);
containerDiv.appendChild(imageModalDiv);

// Add the container to the DOM
document.body.appendChild(containerDiv);

//function call 
 $(document).ready(function() {
    // Immediately show the modal when the page is ready
    $('#imageModal').modal('show');
  
    // Hide .body-container when modal is shown
    // NOTE: Make sure you have the .body-container element in your HTML
    $(".body-container").hide();
  
    // Show .body-container and hide the modal when the specific button is clicked
    $("#specificButton").click(function() {
        $(".body-container").show();
        $('#imageModal').modal('hide');
    });
  });