
var timer = 60;
var score = 0;
var hitRn = 0;



function increaseScore(){
    score += 10;
    document.querySelector("#scoreGo").textContent = score;
    
}

function getNewHit(){
    hitRn = Math.floor(Math.random()*10);
    document.querySelector("#hitGo").textContent = hitRn;
}

function runTimer(){
    var timeVar = setInterval(function(){
        if(timer > 0){
        timer--;
        document.querySelector("#timeGo").textContent = timer;
        } 
        else{
            clearInterval(timeVar);
            document.querySelector("#pbtm").innerHTML = `<h1> Game Over </h1>`;
        }
    },1000)

}

function makeBubble(){
    var clutter = "";

    for(i = 1; i <= 90; i++){
        var rn = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${rn}</div>`
    }
    
    document.querySelector("#pbtm").innerHTML = clutter
}

document.querySelector("#pbtm")
.addEventListener("click", function(dets){
    var clickedNum = Number(dets.target.textContent);
    if(clickedNum === hitRn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
})



makeBubble();
runTimer();
getNewHit();

