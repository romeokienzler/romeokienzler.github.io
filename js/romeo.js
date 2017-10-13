function showContent(id) {
    if (id == 'about') {
        $("#mainblock").hide();
        $("#about").show();
        $("#contact").hide();
        $("#block1").hide();
        $("#block2").hide();
        $("#block3").hide();
    }
    if (id == 'contact') {
        $("#mainblock").hide();
        $("#about").hide();
        $("#contact").show();
        $("#block1").hide();
        $("#block2").hide();
        $("#block3").hide();
    }
    if (id == 1) {
        $("#mainblock").hide();
        $("#about").hide();
        $("#contact").hide();
        $("#block1").show();
        $("#block2").hide();
        $("#block3").hide();
    }
    if (id == 2) {
        $("#mainblock").hide();
        $("#about").hide();
        $("#contact").hide();
        $("#block1").hide();
        $("#block2").show();
        $("#block3").hide();

    }
    if (id == 3) {
        $("#mainblock").hide();
        $("#about").hide();
        $("#contact").hide();
        $("#block1").hide();
        $("#block2").hide();
        $("#block3").show();
    }
}

function sendEmail() {
    document.getElementById("contact_button").value="...sending...";
    document.getElementById("contact_button").disabled=true;
    from_name = document.getElementById("contact_name").value
    from_email = document.getElementById("contact_email").value
    from_text = document.getElementById("contact_text").value
    emailjs.send("gmail", "template_jK3Y5Pqk", {"reply_to":from_email,"message_html":from_text,"from_name":from_name,"to_name":"romeo"}).then(function(response) {
    $("#contactform").hide();
    $("#contactform_thanks").show();
}, function(err) {
    $("#contactform").hide();
    $("#contactform_failed").show();
});
   
}