$(document).ready(function () {
    // Form submission handler
    $('#registration-form').submit(function (event) {
        event.preventDefault();

        // Validate form fields
        let name = $('#name').val();
        let email = $('#email').val();
        let phone = $('#phone').val();

        if (name === "" || email === "" || phone === "") {
            alert("All fields are required!");
            return;
        }

        // Send form data to the server using AJAX
        $.ajax({
            type: "POST",
            url: "process.php",
            data: {
                name: name,
                email: email,
                phone: phone
            },
            success: function (response) {
                // Display the response from the server
                $('#output').html(response).show();
                $('#registration-form')[0].reset(); // Reset form
            },
            error: function () {
                alert("An error occurred while submitting the form.");
            }
        });
    });
});
