function init(){
    $("#lblPhone").text("Phone: 123-456-7890");
    $("#lblEmail").text("Email: email@email.com");
    $("#show").click(showInfo);
    $("#hide").click(hideInfo);
}

function showInfo(){
    $(".classInfo").show();
}

function hideInfo(){
    $(".classInfo").hide();
}

window.onload = init;

