$(document).ready(function () {    
    $('.forgot-pw').click(function () {
        alert("Too bad!");
    });
    //LOGIN AND CREATE LIST OF ALL USERS.
    $('#login-btn').click(function () {
        var users = JSON.parse(window.localStorage.users);
        var enteredUsername = $('.login-container .username').val();
        var enteredPassword = $('.login-container .password').val();
        var loggedInUser;
        
        $('.users-list').empty();
        for (var i = 0; i < users.length; i++) {
            var user = users[i];
            if (enteredUsername == user.username && enteredPassword == user.password) {
                loggedInUser = user;
            }
            $('.users-list').append("<li>" + user.username + "</li>");
        }
        if (loggedInUser) {
            $('.login-container').hide();

            $('.logged-in-container').show();
        } else {
            alert("Wrong username or password!");
        }
    });
    //REGISTER
    $('#register-btn').click(function () {
        $('.login-container').hide();
        $('.register-container').show();
        $('.username, .password').val("");       
    });
    //LOGOUT
    $('#logout').click(function () {
        $('.logged-in-container').hide();
        $('.login-container').show();
        $('.username, .password').val("");        
    });
    //SUBMIT NEW USER TO LOCALSTORAGE
    $('#submit-register-btn').click(function () {
        var username = $('.register-container .username').val();
        var password = $('.register-container .password').val();
        var users = JSON.parse(window.localStorage.getItem("users"));
        var user = { username: username, password: password };

        if (users) {
            users.push(user);
        } else {
            users = [user];
        }
        window.localStorage.setItem("users", JSON.stringify(users));
        $('.register-container').hide();
        $('.login-container').show();
    });
});