document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const successMessage = document.getElementById("successMessage");

  const fields = {
    name: document.getElementById("name"),
    email: document.getElementById("email"),
    subject: document.getElementById("subject"),
    message: document.getElementById("message")
  };

  const errors = {
    name: document.getElementById("error-name"),
    email: document.getElementById("error-email"),
    subject: document.getElementById("error-subject"),
    message: document.getElementById("error-message")
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let isValid = true;

    Object.values(errors).forEach(err => {
      err.textContent = "";
      err.style.visibility = "hidden";
    });

    successMessage.hidden = true;

    // Name 
    if (fields.name.value.trim() === "") {
      errors.name.textContent = "Please enter your full name.";
      errors.name.style.visibility = "visible";
      isValid = false;
    }

    // Email 
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (fields.email.value.trim() === "") {
      errors.email.textContent = "Email is required.";
      errors.email.style.visibility = "visible";
      isValid = false;
    } else if (!emailPattern.test(fields.email.value.trim())) {
      errors.email.textContent = "Please enter a valid email address.";
      errors.email.style.visibility = "visible";
      isValid = false;
    }

    // Subject 
    if (fields.subject.value.trim() === "") {
      errors.subject.textContent = "Please enter a subject.";
      errors.subject.style.visibility = "visible";
      isValid = false;
    }

    // Message 
    if (fields.message.value.trim().length < 10) {
      errors.message.textContent = "Message should be at least 10 characters.";
      errors.message.style.visibility = "visible";
      isValid = false;
    }

    // If valid
    if (isValid) {
      successMessage.hidden = false;
      form.reset();
    }
  });
});
