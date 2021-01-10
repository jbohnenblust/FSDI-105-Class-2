function init() {
    console.log("Test page");

    // js find/select and ele
    let e = document.getElementById("txtTest");
    console.log(e);

    //jq selectors
    e = $("#txtTest"); //id selector
    console.log(e);
    let b = $("button"); //tag selector
    console.log(b);
    let c = $(".red"); //class selector
    console.log(c)
    
    //complex selectors

    let r = $(".second hr");
    console.log(r);

    // js set text
    document.getElementById("txtTest").value = "Hello there!";

    $("#txtTest").val("Hello from jQuery!");

    //jq read text
    $("#txtTest").val();

    //js
    //document.getElementById("btnTwo").onclick=magic;

    //jq
    $("#btnTwo").click(magic);

    $("#txtTest").hover(normal);
}

function magic(){
    console.log("Here is the magic");

    $("div").hide();
    

    $("h1").addClass("dance");
}

function normal(){
    $("div").show();
    $("h1").removeClass("dance");
}



window.onload = init;