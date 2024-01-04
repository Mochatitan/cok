import {workers} from "./data.js";
let cookiesPerClick = 1;
let cookiesPerSecond = 0;

loadGame();

const cookieImage = document.querySelector("#cookie");
cookieImage.onclick = function(){
    addCookies(cookiesPerClick);
    updateText();
}

function loadGame(){
    if(localStorage.cookies){
        
    }else{
        localStorage.setItem("cookies",0);
    }
    updateText();
    console.log(workers[0].getCost());
}

function updateText(){
    document.getElementById("cookies").innerHTML = localStorage.cookies+" cookies\n<div id='cookiesPerSecond'>per second: "+cookiesPerSecond+"</div>";
			
}

function addCookies(addedCookies){
    localStorage.cookies = Number(localStorage.cookies)+addedCookies;
}

