// Sample course data (you should fetch this from a server in a real scenario)
const coursesData = [
  {
    id: 1,
    title: "Course 1",
    description: "This is the first course.",
  },
  {
    id: 2,
    title: "Course 2",
    description: "This is the second course.",
  },
  // Add more courses as needed
];

// Function to generate course HTML
function generateCourseHTML(course) {
  return `
    <div class="col-md-6">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${course.title}</h5>
          <p class="card-text">${course.description}</p>
          <button type="button" class="btn btn-primary enroll-btn" data-toggle="modal" data-target="#enrollModal" data-id="${course.id}">Enroll</button>
        </div>
      </div>
    </div>
  `;
}

// Function to load courses
function loadCourses() {
  const courseListElement = document.getElementById('course-list');
  let coursesHTML = '';

  coursesData.forEach(course => {
    coursesHTML += generateCourseHTML(course);
  });

  courseListElement.innerHTML = coursesHTML;

  // Add event listeners to enroll buttons
  const enrollButtons = document.getElementsByClassName('enroll-btn');
  Array.from(enrollButtons).forEach(button => {
    button.addEventListener('click', () => {
      const courseId = button.getAttribute('data-id');
      const selectedCourse = coursesData.find(course => course.id === parseInt(courseId));

      // Update modal content
      const modalTitleElement = document.getElementById('modalTitle');
      const modalBodyElement = document.getElementById('modalBody');

      modalTitleElement.textContent = selectedCourse.title;
      modalBodyElement.textContent = selectedCourse.description;
    });
  });
}

// Load courses when the page is ready
$(document).ready(() => {
  loadCourses();
});
