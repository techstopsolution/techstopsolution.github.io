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
			$(".subject-error").text("Please enter your email address");
		}
        if ($("#message").val() == "") {
			$(".message-error").text("Please enter your email address");
		}
        else {
            // $(".contactusForm").submit();
        }
	});
});




// function isEmail(email) {
//     var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//     return regex.test(email);
// }

// $("#submit").click(function() {
//     var errorMessage = "";
//     var  fieldsMissing = "";

//     if ($("#name").val() == "") {
//         $("#name").css("background-color","#ffb3b3");
//         fieldsMissing += "Name, ";
//     }
//     if ($("#email").val() == "") {
//         $("#email").css("background-color","#ffb3b3");
//         fieldsMissing += "Email, ";
//     }
//     if ($("#number").val() == "") {
//         $("#number").css("background-color","#ffb3b3");
//         fieldsMissing += "Number, ";
//     }
//     if ($("#subject").val() == "") {
//         $("#subject").css("background-color","#ffb3b3");
//         fieldsMissing += "Subject, ";
//     }
//     if ($("#message").val() == "") {
//         $("#message").css("background-color","#ffb3b3");
//         fieldsMissing += "Message, ";
//     }
//     if (fieldsMissing != "") {
//         errorMessage +=  fieldsMissing + " field is Empty<br>";
//     }
//     if (isEmail($("#email").val()) == false) {
//         errorMessage += "email address, ";
//         $("#email").css("background-color","#ffb3b3");
//     }
//     if ($.isNumeric($("#number").val()) == false) {
//         errorMessage += "phone number, ";
//         $("#number").css("background-color","#ffb3b3");
//     }
//     if (errorMessage != "") {
//         $("#errorMessage").html("Your " + errorMessage + " is not valid");
//         $("#errorMessage").css("display","block");
//         $("#sentMessage").css("display","none");
//     }
//     else {
//         $("#errorMessage").css("display","none");
        
//             // SMTP JS
//             var name = $('#name').val();
//             var email = $('#email').val();
//             var number = $('#number').val();
//             var subject = $('#subject').val();
//             var message = $('#message').val();
//             var Body='Name: '+name+'<br>Email: '+email+'<br>Phone No.: '+number+'<br>Subject: '+subject+'<br>Message: '+message;
            
//             Email.send({
//                 SecureToken : "a2a97aea-b709-45a8-9f36-1f39ff351461",
//                 To : 'pratapsinhparmar.contact@gmail.com',
//                 From : "hostingwork.space@gmail.com",
//                 Subject : "New message on contact from "+name,
//                 Body : Body
//             }).then(
//                 message =>{
//                     if(message=='OK'){
//                         $(".php-email-form").trigger("reset");
//                         $(".sent-message").css("display", "block");
//                     }
//                     else{
//                         console.error (message);
//                         $(".php-email-form").trigger("reset");
//                         $(".error-message").css("display", "block");
//                     }
//                 }
//             );
        

//     }
// });