
var password = document.getElementById("password");
var cpassword = document.getElementById("cpassword");
var submit = document.getElementById("signup");

 if (password.value !== cpassword.value) {
    alert("Confirm password not matching");
}