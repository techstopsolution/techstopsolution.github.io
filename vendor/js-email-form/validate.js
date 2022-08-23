$(document).ready(function() {

    // validatetion the comment form when it is submitted
    function isEmail(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }

	$("#submit").click(function() {

        $(".error").text("");

		if ($("#name").val() == "") {
			$(".name-error").text("Please enter your name");
		}
        if ($("#email").val() == "") {
			$(".email-error").text("Please enter your email address");
		}
        else if($("#email").length > 0){
            if (isEmail($("#email").val()) == false) {
                $(".email-error").text("Please enter a valid mail id");
            }
        }
        if ($("#number").val() == "") {
			$(".number-error").text("Please enter your phone number");
		}
        else if($("#number").length > 0){
            if ($.isNumeric($("#number").val()) == false) {
                $(".number-error").text("Please enter a valid phone number");
            }
        }
        if ($("#subject").val() == "") {
			$(".subject-error").text("Please enter your subject");
		}
        if ($("#message").val() == "") {
			$(".message-error").text("Please enter your message");
		}

        else {
            // $(".contactusForm").submit();
            // SMTP JS
            var name = $('#name').val();
            var email = $('#email').val();
            var number = $('#number').val();
            var subject = $('#subject').val();
            var message = $('#message').val();
            var Body='Name: '+name+'<br>Email: '+email+'<br>Phone No.: '+number+'<br>Subject: '+subject+'<br>Message: '+message;

            // alert(Body);

            Email.send({
                SecureToken : "9bc6a945-2cb6-4da3-8050-56377dfade60",

                To : 'parmarpratapsinh123@gmail.com',
                From : "hostingwork.space@gmail.com",
                Subject : "New message on contact from "+name,
                Body : Body
            }).then(
                message =>{
                    if(message=='OK'){
                        $(".php-email-form").trigger("reset");
                        // $(".sent-message").css("display", "block");
                        alert("done");
                    }
                    else{
                        console.error (message);
                        $(".php-email-form").trigger("reset");
                        // $(".error-message").css("display", "block");
                        alert("cansal");
                    }
                }
            );
        }
	});
});
