$(document).ready(function() {
    $("form").on("submit", function(event) {
        event.preventDefault();
        var formIsValid = false;

        var password = $("#password").val();
        var confirmPassword = $("#confirmPassword").val();

        console.log(password);
        console.log(confirmPassword)

        if (password !== confirmPassword) {
            $("#error-list").text("The passwords do not match.");
            $("#error-div").show();
            return false;
        }

        formIsValid = true;
        $("#error-message").text(""); // Efface le message d'erreur si la soumission est réussie
        $("error-div").hide(); // Cacher la div
        if (formIsValid) {
            // Hide the register section and show the success section
            $("#register-section").hide();
            $("#success-section").show();
        }
        return true;
    });

    $("#go-back").on("click", function() {
        // Hide the success section and show the register section
        $("#success-section").hide();
        $("#register-section").show();
        $("#error-div").hide();
        $("#error-message").text("");
    });
});
