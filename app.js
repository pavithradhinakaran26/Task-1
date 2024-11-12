    

async function validateForm(event) {
    event.preventDefault();
    
      
   
    let nameError = document.getElementById("userNameError");
    let passwordError = document.getElementById("passwordError");

    
    const userName = document.getElementById("userName").value;
    const password = document.getElementById("password").value;

    
    // const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

   
    let isValid = true; 

   
    if (userName === "") {
        nameError.style.display = "block";
        isValid = false;
    } else {
        nameError.style.display = "none";
    }

    
       if (password === "") {
        passwordError.style.display = "block";
        isValid = false;
    } else {
        passwordError.style.display = "none";
    }

    
    // if (isValid) {
    //     alert("Form submitted successfully!");
    // }
    
    // if (isValid) {
        
    //     localStorage.setItem("userName", userName);
    //     localStorage.setItem("password", password);

    //     alert("Form submitted successfully and data saved to local storage!");
    // }
    if (isValid) {
        const data = {
            userName: userName,
            password: password
        };
        try {
        
            const response = await fetch('  https://hastin-container.com/staging/app/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                const result = await response.json();
                console.log("User created successfully!:",result)
                alert("User created successfully!");
                 document.getElementById('registrationForm').reset(); 
            } else {
                throw new Error("User failed");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("There was an error in the form.");
        }
  }
}




    





