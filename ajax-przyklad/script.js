$(document).ready(function() {
    $('#loginform').submit(function(e){
        e.preventDefault()
        var user = $("#username").val()
        var password = $("#password").val()
        if  (user.length ==0 || password.length ==0){
            return false;
        }
        else {
    $.ajax({
        type: "POST",
        url: 'login.php',
        data: {
            username: user,
            password: password
        },
        success: function(feedback)
        {
            if (feedback === 'Brawo') {
                window.location.replace('user.php');
            }
            else {
                alert('Błąd');
            }
        }
    })
}
})
})