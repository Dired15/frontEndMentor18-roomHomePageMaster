

let navMobileButton=document.querySelectorAll(".navMenuButton");
let navMobile=document.getElementById("navMobile");
let main=document.getElementById("main");

let menuOpen=false;
navMobileButton[0].addEventListener("click",displayMenu);
navMobileButton[1].addEventListener("click",displayMenu);

function displayMenu()
{
    if(!menuOpen)
    {
        menuOpen=true;
        main.style.overflow="hidden";
        navMobile.style.display="flex";
    }
    else
    {
        menuOpen=false;
        main.style.overflow="auto";
        navMobile.style.display="none";
    }
}

let slideLeftMobile=document.querySelector("#illustration .slideLeft");
let slideRightMobile=document.querySelector("#illustration .slideRight");
let slide=document.querySelectorAll(".slide");
let illustration=document.getElementById("illustration");
let illustrationImage;
let slideDisplayed=1;

console.log("slide");
console.log(slide);

slideLeftMobile.addEventListener("click",function()
{
    let value;
    value=slideDisplayed-1;
    changeSlide(-1,true);
})

slideRightMobile.addEventListener("click",function()
{
    let value;
    
    value=slideDisplayed+1;
    changeSlide(+1,true);
})



function changeSlide(position,mobile)
{


    let slideNew=slideDisplayed+position;
    let posSlide=slideDisplayed-1;
    slide[posSlide].style.display="none";
    

    if(slideNew>3)
    {
        slideDisplayed=1;
    }
    else if(slideNew<1)
    {
        slideDisplayed=3;
    }
    else
    {
        slideDisplayed=slideNew;
    }
   
    posSlide=slideDisplayed-1;
    slide[posSlide].style.display="flex";

    if(mobile)
    {
        illustrationImage="mobile-image-hero-"+slideDisplayed+".jpg";
    }
    
    illustration.style.backgroundImage="url(\"assets/images/"+illustrationImage+"\")";
}

