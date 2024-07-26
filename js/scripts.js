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
