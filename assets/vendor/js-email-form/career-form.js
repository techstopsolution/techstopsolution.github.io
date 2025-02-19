$(document).ready(function() {

    // click to form open and close query
    $(document).on("click",".applyNow",function() {
        $("#position option").removeAttr("selected");
        var JobTitle =  $(this).closest(".icon-box").find(".job-title").text();
        $('#position option[value="'+JobTitle+'"]').attr("selected","");
        $(".careerFormModal").modal('show');
    });
    $(document).on("click",".closeModal",function() {
        $(".careerFormModal").modal('hide');
        $("#position option").removeAttr("selected");
        $(".career-form").trigger("reset");
    });
    
    // position onchange to other field show
    $(document).on("change","#position",function() {
        if($(this).val() == "Others") {
            $(".other-position-field").css('display', 'inline-block');
        } else {
            $(".other-position-field").css('display', 'none');
        }
    });

    // validate the comment form when it is submitted
    $(".career-form").validate({
        rules: {
            firstname:{
                required: true,
            },
            lastname:{
                required: true,
            },
            email:{
                required: true,
                email: true,
            },
            number:{
                required: true,
                number: true,
                minlength: 4,
                maxlength: 13,
            },
            country:{
                required: true,
            },
            currentlocation:{
                required: true,
            },
            SkypeId:{
                required: true,
            },
            technicalSkill:{
                required: true,
            },
            experience:{
                required: true,
            },
            workSeeking:{
                required: true,
            },
            position:{
                required: true,
            },
            otherPosition:{
                required: true,
            },
            note:{
                required: true,
            },
        },
        messages: {
            firstname:{
                required: "Please enter your first name",
            },
            lastname:{
                required: "Please enter your last name",
            },
            email: {
                required: "Please enter email address",
                email: "Please enter valid email address",
            },
            number: {
                required: "Please enter phone number",
                validnum: "Please enter phone number between length 4 to 13",
                minlength: "Mobile number must be atleast 4 digits.",
                maxlength: "Mobile number cannot be more than 13 digits.",
            },
            country:{
                required: "Please select your country",
            },
            currentlocation:{
                required: "Please enter your current location",
            },
            SkypeId:{
                required: "Please enter your Skype Id",
            },
            technicalSkill:{
                required: "Please enter your Technical Skill",
            },
            experience:{
                required: "Please enter your expreance",
            },
            workSeeking:{
                required: "Please select your Type of Work Seeking",
            },
            position:{
                required: "Please select your Position",
            },
            otherPosition:{
                required: "Please enter your Other Position",
            },
            note:{
                required: "Please enter discription",
            },
        }
    });


    
    $(".career-submit").click(function() {

        if($(".career-form").valid()) {
            $(".career-msg").find(".snippet").css("display", "block");

            // SMTP JS
            var firstname = $("#firstname").val();
            var lastname = $("#lastname").val();
            var email = $("#email").val();
            var number = $("#number").val();
            var country = $("#country").val();
            var currentlocation = $("#currentlocation").val();
            var SkypeId = $("#SkypeId").val();
            var technicalSkill = $("#technicalSkill").val();
            var experience = $("#experience").val();
            var workSeeking = $("#workSeeking").val();
            var position = $("#position").val();
            var otherPosition = $("#otherPosition").val();
            var note = $("#note").val();

            var careerBody = "<!DOCTYPE html>";
            careerBody += "<html lang='en-US'>";
            careerBody += "<head>";
            careerBody += "<meta content='text/html; charset=utf-8' http-equiv='Content-Type' />";
            careerBody += "<title>Techstop Solution - Career</title>";
            careerBody += "</head>";
            careerBody += "<style>a:hover {text-decoration: underline !important;}</style>";
            careerBody += "<body marginheight='0' topmargin='0' marginwidth='0' style='margin: 0px; background-color: #f2f3f8;' leftmargin='0'>";
            careerBody += "<table cellspacing='0' border='0' cellpadding='0' width='100%' bgcolor='#f2f3f8' style='@import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700); font-family: 'Open Sans', sans-serif;'>";
            careerBody += "<tr>";
            careerBody += "<td>";
            careerBody += "<table style='background-color: #f2f3f8; max-width:670px; margin:0 auto;' width='100%' border='0' align='center' cellpadding='0' cellspacing='0'>";
            careerBody += "<tr><td style='height:80px;'>&nbsp;</td></tr>";
            careerBody += "<tr>";
            careerBody += "<td style='text-align:center;'>";
            careerBody += "<a href='https://techstopsolution.com/' title='logo' target='_blank'>";
            careerBody += "<img width='200' src='https://techstopsolution.com/img/logo.webp' title='logo' alt='logo'>";
            careerBody += "</a>";
            careerBody += "</td>";
            careerBody += "</tr>";
            careerBody += "<tr><td style='height:20px;'>&nbsp;</td></tr>";
            careerBody += "<tr>";
            careerBody += "<td>";
            careerBody += "<table width='95%' border='0' align='center' cellpadding='0' cellspacing='0' style='max-width:670px; background:#fff; border-radius:3px;-webkit-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);-moz-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);box-shadow:0 6px 18px 0 rgba(0,0,0,.06);padding:0 40px;'>";
            careerBody += "<tr><td style='height:40px;'>&nbsp;</td></tr>";
            careerBody += "<tr>";
            careerBody += "<td style='padding:0 15px; text-align:center;'>";
            careerBody += "<h1 style='color:#1e1e2d; font-weight:500; margin:0;font-size:32px;font-family:'Rubik',sans-serif;'>Career Inquery</h1>";
            careerBody += "<span style='display:inline-block; vertical-align:middle; margin:29px 0 26px; border-bottom:1px solid #cecece; width:100px;'></span>";
            careerBody += "</td>";
            careerBody += "</tr>";
            careerBody += "<tr>";
            careerBody += "<td>";
            careerBody += "<table cellpadding='0' cellspacing='0' style='width: 100%; border: 1px solid #ededed'>";
            careerBody += "<tbody>";
            careerBody += "<tr>";
            careerBody += "<td style='padding: 10px; border-bottom: 1px solid #ededed; border-right: 1px solid #ededed; width: 35%; font-weight:500; color:rgba(0,0,0,.64)'>First Name:</td>";
            careerBody += "<td style='padding: 10px; border-bottom: 1px solid #ededed; color: #455056;'>"+firstname+"</td>";
            careerBody += "</tr>";
            careerBody += "<tr>";
            careerBody += "<td style='padding: 10px; border-bottom: 1px solid #ededed; border-right: 1px solid #ededed; width: 35%; font-weight:500; color:rgba(0,0,0,.64)'>Last Name:</td>";
            careerBody += "<td style='padding: 10px; border-bottom: 1px solid #ededed; color: #455056;'>"+lastname+"</td>";
            careerBody += "</tr>";
            careerBody += "<tr>";
            careerBody += "<td style='padding: 10px; border-bottom: 1px solid #ededed; border-right: 1px solid #ededed; width: 35%; font-weight:500; color:rgba(0,0,0,.64)'>Email:</td>";
            careerBody += "<td style='padding: 10px; border-bottom: 1px solid #ededed; color: #455056;'>"+email+"</td>";
            careerBody += "</tr>";
            careerBody += "<tr>";
            careerBody += "<td style='padding: 10px; border-bottom: 1px solid #ededed;border-right: 1px solid #ededed; width: 35%; font-weight:500; color:rgba(0,0,0,.64)'>Number:</td>";
            careerBody += "<td style='padding: 10px; border-bottom: 1px solid #ededed; color: #455056;'>"+number+"</td>";
            careerBody += "</tr>";
            careerBody += "<tr>";
            careerBody += "<td style='padding: 10px;  border-bottom: 1px solid #ededed; border-right: 1px solid #ededed; width: 35%;font-weight:500; color:rgba(0,0,0,.64)'>Country:</td>";
            careerBody += "<td style='padding: 10px; border-bottom: 1px solid #ededed; color: #455056;'>"+country+"</td>";
            careerBody += "</tr>";
            careerBody += "<tr>";
            careerBody += "<td style='padding: 10px; border-bottom: 1px solid #ededed; border-right: 1px solid #ededed; width: 35%;font-weight:500; color:rgba(0,0,0,.64)'>Current Location:</td>";
            careerBody += "<td style='padding: 10px; border-bottom: 1px solid #ededed; color: #455056;'>"+currentlocation+"</td>";
            careerBody += "</tr>";
            careerBody += "<tr>";
            careerBody += "<td style='padding: 10px; border-bottom: 1px solid #ededed; border-right: 1px solid #ededed; width: 35%;font-weight:500; color:rgba(0,0,0,.64)'>Skype Id:</td>";
            careerBody += "<td style='padding: 10px; border-bottom: 1px solid #ededed; color: #455056;'>"+SkypeId+"</td>";
            careerBody += "</tr>";
            careerBody += "<tr>";
            careerBody += "<td style='padding: 10px; border-bottom: 1px solid #ededed; border-right: 1px solid #ededed; width: 35%;font-weight:500; color:rgba(0,0,0,.64)'>Technical Skill:</td>";
            careerBody += "<td style='padding: 10px; border-bottom: 1px solid #ededed; color: #455056;'>"+technicalSkill+"</td>";
            careerBody += "</tr>";
            careerBody += "<tr>";
            careerBody += "<td style='padding: 10px; border-bottom: 1px solid #ededed; border-right: 1px solid #ededed; width: 35%;font-weight:500; color:rgba(0,0,0,.64)'>Experience:</td>";
            careerBody += "<td style='padding: 10px; border-bottom: 1px solid #ededed; color: #455056;'>"+experience+"</td>";
            careerBody += "</tr>";
            careerBody += "<tr>";
            careerBody += "<td style='padding: 10px; border-bottom: 1px solid #ededed; border-right: 1px solid #ededed; width: 35%;font-weight:500; color:rgba(0,0,0,.64)'>Type of Work Seeking:</td>";
            careerBody += "<td style='padding: 10px; border-bottom: 1px solid #ededed; color: #455056;'>"+workSeeking+"</td>";
            careerBody += "</tr>";
            careerBody += "<tr>";
            careerBody += "<td style='padding: 10px; border-bottom: 1px solid #ededed; border-right: 1px solid #ededed; width: 35%;font-weight:500; color:rgba(0,0,0,.64)'>Position:</td>";
            careerBody += "<td style='padding: 10px; border-bottom: 1px solid #ededed; color: #455056;'>"+position+"</td>";
            careerBody += "</tr>";
            careerBody += "<tr>";
            careerBody += "<td style='padding: 10px; border-bottom: 1px solid #ededed; border-right: 1px solid #ededed; width: 35%;font-weight:500; color:rgba(0,0,0,.64)'>Other Position:</td>";
            careerBody += "<td style='padding: 10px; border-bottom: 1px solid #ededed; color: #455056;'>"+otherPosition+"</td>";
            careerBody += "</tr>";
            careerBody += "<tr>";
            careerBody += "<td style='padding: 10px; border-right: 1px solid #ededed; width: 35%;font-weight:500; color:rgba(0,0,0,.64)'>Discription:</td>";
            careerBody += "<td style='padding: 10px; color: #455056;'>"+note+"</td>";
            careerBody += "</tr>";
            careerBody += "</tbody>";
            careerBody += "</table>";
            careerBody += "</td>";
            careerBody += "</tr>";
            careerBody += "<tr><td style='height:40px;'>&nbsp;</td></tr>";
            careerBody += "</table>";
            careerBody += "</td>";
            careerBody += "</tr>";
            careerBody += "<tr><td style='height:20px;'>&nbsp;</td></tr>";
            careerBody += "<tr>";
            careerBody += "<td style='text-align:center;'>";
            careerBody += "<a href='https://techstopsolution.com/' target='_blank' style='font-size:14px; color:#455056bd; line-height:18px; margin:10px 0 50px; display: block;'>";
            careerBody += "<strong>www.techstopsolution.com</strong>";
            careerBody += "</a>";
            careerBody += "</td>";
            careerBody += "</tr>";
            careerBody += "</table>";
            careerBody += "</td>";
            careerBody += "</tr>";
            careerBody += "</table>";
            careerBody += "</body>";
            careerBody += "</html>";


            // SMTP Send mail
            Email.send({
                SecureToken : "9bc6a945-2cb6-4da3-8050-56377dfade60",
                To : 'techstopsolution@gmail.com',
                From : "hostingwork.space@gmail.com",
                Subject : "New submit on career from "+firstname + lastname,
                Body : careerBody
            }).then(
                message =>{
                    if(message=='OK'){
                        $(".career-msg").find(".snippet").css("display", "none");
                        $(".career-msg").find(".career-result-text").css("color", "#4CAF50");
                        $(".career-msg").find(".career-result-text").text("Your message has been successfully sent!");
                        $(".career-form").trigger("reset");
                        
                    }
                    else{
                        $(".career-msg").find(".snippet").css("display", "none");
                        $(".career-msg").find(".career-result-text").css("color", "#f00");
                        $(".career-msg").find(".career-result-text").text("Sorry, cannot send the message");
                        console.error (message);
                        $(".career-form").trigger("reset");
                    }
                }
            );
        }

    });

});