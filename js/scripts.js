//JS file for the contact form submisson


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contactForm').addEventListener('submit', function(event) {

        // Prevent default form submission
        
        event.preventDefault(); 
        var form = this;
        var formData = new FormData(form);
        
        fetch(form.action, {
            method: 'POST',
            body: formData
        }).then(response => {
            if (response.ok) {
                document.getElementById('submitSuccessMessage').classList.remove('d-none');
                // Clear the form fields
                form.reset(); 
                setTimeout(() => {
                    document.getElementById('submitSuccessMessage').classList.add('d-none');
                }, 10000); // Hide success message after 5 seconds
            } else {
                document.getElementById('submitErrorMessage').classList.remove('d-none');
                setTimeout(() => {
                    document.getElementById('submitErrorMessage').classList.add('d-none');
                }, 10000); // Hide error message after 5 seconds
            }
        }).catch(error => {
            console.error('Form submission error:', error);
            document.getElementById('submitErrorMessage').classList.remove('d-none');
            setTimeout(() => {
                document.getElementById('submitErrorMessage').classList.add('d-none');
            }, 10000); // Hide error message after 5 seconds
        });
    });
});

// Reveal sections on scroll
document.addEventListener("DOMContentLoaded", function() {
  const reveals = document.querySelectorAll('.section-reveal');
  function revealOnScroll() {
    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      if (elementTop < windowHeight - 60) {
        reveals[i].classList.add('visible');
      }
    }
  }
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

