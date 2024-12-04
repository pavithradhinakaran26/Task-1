 async function validateForm(event) {
     event.preventDefault();

    let nameError = document.getElementById("userNameError");
    let passwordError = document.getElementById("passwordError");

    const userName = document.getElementById("userName").value;
    const password = document.getElementById("password").value;

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

    if (isValid) {
        const data = {
            userName: userName,
            password: password
        };

        try {
            const response = await fetch('https://hastin-container.com/staging/app/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'   
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                const result = await response.json();
                console.log("User created successfully:", result);
                alert("User created successfully!");


                localStorage.setItem('opaque', result.data.opaque);
                localStorage.setItem('accessCode', result.data.accessCode);
                localStorage.setItem('jwtToken', result.data.jwt);


                document.getElementById('registrationForm').reset();
                openOtpModal(); 

            } else {
                const errorData = await response.json();
                console.error("Error in response:", errorData);
                alert("User creation failed: " + errorData.message || "Unknown error");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("There was an error in the form submission: " + error.message);
        }
    }
      
    
}

function closeOtpModal() {
    document.getElementById('otpModal').style.display = 'none';
    clearInterval(timerInterval);
}



function openOtpModal() { 
  
    const opaque = localStorage.getItem('opaque');
    const accessCode = localStorage.getItem('accessCode');
    
    
    document.getElementById('otpPrefix').textContent = opaque; 
    document.getElementById('otpInput').value = accessCode; 

   
    document.getElementById('otpModal').style.display = 'block';
    startTimer();

    
    document.getElementById('resendOtp').onclick = function() {
       
        const payload = {
            opaque: opaque,
            accessCode: accessCode,
        };
        
        
        sendOtp(payload);
        startTimer();
    };
}
function togglePasswordVisibility() {
    var passwordField = document.getElementById('password');
    var icon = document.getElementById('togglePassword');
    
    if (passwordField.type === "password") {
        passwordField.type = "text"; 
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");  
    } else {
        passwordField.type = "password"; 
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");  
    }
}


let timerInterval;
function startTimer() {
    let timeRemaining = 60;  
    document.getElementById('timer').textContent = "01:00";

    clearInterval(timerInterval); 
    timerInterval = setInterval(() => {
        timeRemaining--;
        let minutes = Math.floor(timeRemaining / 60);
        let seconds = timeRemaining % 60;

        document.getElementById('timer').textContent = 
            `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
        }
    }, 1000); 
}

async function sendOtp(data) {
    try {
        const enteredOtp = document.getElementById('otpInput').value;
        const storedOtp = localStorage.getItem('accessCode');
  
        if (enteredOtp !== storedOtp) {
            alert("Invalid OTP. Please enter the correct OTP.");
            return; 
        }
        const jwtToken = localStorage.getItem('jwtToken'); 
        
        if (!jwtToken) {
            alert("Authorization token is missing.");
            return;
        }

       
        const response = await fetch('https://hastin-container.com/staging/app/auth/access-code/validate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `BslogiKey ${jwtToken}`, 
            },
            body: JSON.stringify(data), 
        });

        if (response.ok) {
            const result = await response.json();
            console.log("successfully verified.:", result);
            alert(" successfully verified.!");
            window.location="table.html"           
            document.getElementById('`registrationForm').reset();
            clearInterval(timerInterval);

            
        } else {
            throw new Error("Login failed");
        }
    } catch (error) {
        console.error("Error:", error);
    }
}








