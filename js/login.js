document.getElementById('submit-login').addEventListener
    ('click', function () {
        // get user email
        const emailField = document.getElementById('user-email');
        const userEmail = emailField.value;
        // console.log(userEmail);
        // get user password
        const passField = document.getElementById('user-password');
        const userPassword = passField.value;
        // console.log(userPassword);
        // email & pass validation
        if (userEmail == 'abc@gmail.com' && userPassword == '123') {
            window.location.href = 'banking.html';
        }
    });

