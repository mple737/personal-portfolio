
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        
        var form = this;
        var formData = new FormData(form);
        
        fetch(form.action, {
            method: 'POST',
            body: formData
        }).then(response => {
            if (response.ok) {
                document.getElementById('submitSuccessMessage').classList.remove('d-none');
                form.reset(); // Clear the form fields
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
