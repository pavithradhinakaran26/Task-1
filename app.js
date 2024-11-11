

function validateForm() {
    
    let nameError = document.getElementById("userNameError");
    let emailError = document.getElementById("emailError");

    
    const userName = document.getElementById("userName").value;
    const email = document.getElementById("email").value;

    
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

   
    let isValid = true; 

   
    if (userName === "") {
        nameError.style.display = "block";
        isValid = false;
    } else {
        nameError.style.display = "none";
    }

    
    if (!emailPattern.test(email)) {
        emailError.style.display = "block";
        isValid = false;
    } else {
        emailError.style.display = "none";
    }

    
    if (isValid) {
        alert("Form submitted successfully!");
    }
    
    if (isValid) {
        
        localStorage.setItem("userName", userName);
        localStorage.setItem("email", email);

        alert("Form submitted successfully and data saved to local storage!");
    }
     
}





