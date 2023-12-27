$("#contact_send").click(function () {
  $(".error").hide();
  var hasError = false;
  var name = $("#name").val();
  var email = $("#email").val();
  var phone = $("#phone").val();
  var password = $("#password").val();

  if (name == "") {
    $("#name").after(
      '<span class="error" style="color:red;">Please enter name</span>'
    );
    hasError = true;
  }
  if (email == "") {
    $("#email").after(
      '<span class="error" style="color:red;">Please enter email</span>'
    );
    hasError = true;
  } else if (!isValidEmail(email)) {
    $("#email").after(
      '<span class="error" style="color:red;">Invalid email format</span>'
    );
    hasError = true;
  }
  if (phone == "") {
    $("#phone").after(
      '<span class="error" style="color:red;">Please enter phone-number</span>'
    );
    hasError = true;
  }
  if (password == "") {
    $("#password").after(
      '<span class="error" style="color:red;">Please enter password</span>'
    );
    hasError = true;
  } else if (!isStrongPassword(password)) {
    $("#password").after(
      '<span class="error" style="color:red;">please use uppercase,lowercase,number and special charaters</span>'
    );
    hasError = true;
  }

  // Remove error messages when user starts typing
  $(".form-control").on("input", function () {
    $(this).next(".error").hide();
  });

  if (!hasError) {
    alert("Hi " + name + "! Thanks for registering.");
  }
  // Function to validate email format
  function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  function isStrongPassword(password) {
    var passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    return passwordRegex.test(password);
  }
});
