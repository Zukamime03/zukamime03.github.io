document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Validate form fields (you can add more validation rules)
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;

    if (!fname || !lname || !email || !subject) {
      alert("Please fill in all fields.");
      return;
    }

    setTimeout(function () {
      // Display the modal
      document.getElementById("myModal").style.display = "block";
    }, 1000); // Change 1000 to the delay time in milliseconds
  });

// Close modal when close button or OK button is clicked
document
  .getElementsByClassName("close")[0]
  .addEventListener("click", function () {
    document.getElementById("myModal").style.display = "none";
  });

document.getElementById("okButton").addEventListener("click", function () {
  document.getElementById("myModal").style.display = "none";
});

document.getElementById("okButton").addEventListener("click", function () {
  // Hide the modal
  document.getElementById("myModal").style.display = "none";

  // Reset values of textboxes
  document.getElementById("fname").value = "";
  document.getElementById("lname").value = "";
  document.getElementById("email").value = "";
  document.getElementById("subject").value = "";

  // Redirect to home page
  window.location.href = "index.html"; // Replace "index.html" with the URL of your home page
});

document.getElementById('ContactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  var formData = new FormData(this);
  
  sendEmail(formData);
});

function sendEmail(formData) {
  var xhr = new XMLHttpRequest();
  
  xhr.open('POST', 'jackzukamime03@gmail.com');
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.send($,{formData});
}