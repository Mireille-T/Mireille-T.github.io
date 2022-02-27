var toTopButton;
var upArrow;
var downArrow;
var rotatingTextList = ["code!", "tinker!", "3D model!", "solve puzzles!", "learn!"];
var rotatingImageSrc = ["media/coder_illustration.svg", "media/construction_illustration.svg", "media/3dmodel_illustration.svg", "media/quiz_illustration.svg", "media/learn_illustration.svg"];
var rotatingImageAlt = ["Coder illustration", "Construction illustration", "3D modelling illustration", "Problem-solving illustration", "Studying illustration"];
var toggleAnimation;
var counter = 0;
var animationOn = true;

window.addEventListener('load', (event) => {
    toTopButton = document.getElementById("btn-back-to-top");
    upArrow = document.getElementById("rotating-up");
    downArrow = document.getElementById("rotating-down");
    toggleAnimation = document.getElementById("toggleAnimation");
    toTopButton.addEventListener("click", backToTop);
    upArrow.addEventListener("click", scrollPrevious);
    downArrow.addEventListener("click", scrollNext);
    toggleAnimation.addEventListener("click", toggleAnimate);
});

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    console.log("test");
}

function scrollNext(){
    counter++;
    if (counter >= 5) counter = 0;
    $("#rotating").fadeTo(200,0.30, function() {
        $("#rotating").text(rotatingTextList[counter]);
    }).fadeTo(500,1);
    $("#landingIllustration").fadeTo(200,0.30, function() {
        $("#landingIllustration").attr("src", rotatingImageSrc[counter]);
        $("#landingIllustration").attr("alt", rotatingImageAlt[counter]);
    }).fadeTo(200,1);
}

function scrollPrevious(){
    counter--;
    if (counter <= -1) counter = 4;
    $("#rotating").fadeTo(200,0.30, function() {
        $("#rotating").text(rotatingTextList[counter]);
    }).fadeTo(500,1);
    $("#landingIllustration").fadeTo(200,0.30, function() {
        $("#landingIllustration").attr("src", rotatingImageSrc[counter]);
        $("#landingIllustration").attr("alt", rotatingImageAlt[counter]);
    }).fadeTo(200,1);
}

function toggleAnimate(){
    if (animationOn == true){
        upArrow.style.animationIterationCount = 0;
        downArrow.style.animationIterationCount = 0;
        animationOn = false;
    }
    else {
        upArrow.style.animationIterationCount = "infinite";
        downArrow.style.animationIterationCount = "infinite";
        animationOn = true;
    }
}