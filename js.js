var harrySpellArray = ["spell 1", "spell 2", "spell 3"];
var screen = $(".actionScreen");

$(".harry").click(harrySpells);


function harrySpells(){

var harrysChosenSpell = Math.floor(Math.random()*2);
var videoBigSpell = document.createElement("video");
var videoSmallSpell = document.createElement("video");
var videoFart = document.createElement("video");
var videoNuclear = document.createElement("video");

if (harrySpellArray[harrysChosenSpell]=="spell 2"){

screen.html("");
videoBigSpell.setAttribute("src", "harryBigSpell.mp4");
videoNuclear.setAttribute("src", "nuclear.mp4");
screen.append(videoBigSpell)
videoBigSpell.play();


setTimeout(function(){
    videoBigSpell.remove();
    screen.append(videoNuclear);
    videoNuclear.play()

    $(".harryAnnounce").text("Experlliumus Spell is Harrys strongest spell!")
},9000)

setTimeout(function(){
    videoNuclear.remove()

    $(".harryAnnounce").text("Experlliumus Spell is Harrys strongest spell!")
},18000)

}

else{
    screen.html("");
    videoSmallSpell.setAttribute("src", "harrySmallSpell.mp4");
    videoFart.setAttribute("src", "fart.mp4");
    screen.append(videoSmallSpell)
    videoSmallSpell.play();

    setTimeout(function(){
        videoSmallSpell.remove();
        screen.append(videoFart);
        videoFart.play()

        $(".harryAnnounce").text("Weak spell")
    },6000)

    setTimeout(function(){
        videoFart.remove()
    
        $(".harryAnnounce").text("Weak spell")
    },2000)



}

}
