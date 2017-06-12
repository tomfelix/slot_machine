var images = [ "http://pngimg.com/uploads/cherry/cherry_PNG635.png?i=774797863","http://www.pngmart.com/image/11285", "https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png", "https://www.google.pl/imgres?imgurl=http%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F2016%2F04%2FBanana-Free-Download-PNG.png&imgrefurl=http%3A%2F%2Fwww.pngall.com%2Fbanana-png&docid=_SiPnm_JLYEx_M&tbnid=P8fsVOF8lIenaM%3A&vet=10ahUKEwjnk52PxLjUAhXRbZoKHTGKADcQMwgpKAcwBw..i&w=512&h=512&bih=664&biw=1440&q=images%20png&ved=0ahUKEwjnk52PxLjUAhXRbZoKHTGKADcQMwgpKAcwBw&iact=mrc&uact=8", "https://s-media-cache-ak0.pinimg.com/originals/68/86/da/6886da9dd04a24959005f577e3940c06.png", "http://pspbyczyna.superhost.pl/site//images/PNG/Icons/HP-Network.png", "http://img04.deviantart.net/d0d5/i/2012/237/e/4/png_green_apple_by_paradise234-d5ccurx.png", "http://mail.rsgc.on.ca/~ldevir/ICS3U/Chapter4/Images/tux.png", "http://pngimg.com/uploads/ak47/ak47_PNG15462.png" ];




function getRandom() {
    var maxRange = images.length;
    var random = Math.floor((Math.random() * maxRange));

    return random;
}

var interval = 0;
var slot1 = 0;
var slot2 = 0;
var slot3 = 0;
var a = 0;
var b = 0;
var c = 0;
$("#stop").prop("disabled", true);

$("#play").click(function(){

    $("#result").text("");

    $(this).prop("disabled", true);
    $("#stop").prop("disabled", false);

    interval = setInterval(function(){

        slot1 = getRandom();
        slot2 = getRandom();
        slot3 = getRandom();


        $('#img1').attr("src", images[slot1]);
        $('#img2').attr("src", images[slot2]);
        $('#img3').attr("src", images[slot3]);
    }, 100);



    $("#stop").click(function(){

        $("#stop").prop("disabled", true);

        clearInterval(interval);

        if(slot1 == slot2 && slot1 == slot3) {
            $("#result").text("YOU WIN!");
            $("#result").css("color", "green");
        }
        else{
            $("#result").text("YOU LOSE!");
            $("#result").css("color", "red");
        }
        $("#play").prop("disabled", false);

    });
});
