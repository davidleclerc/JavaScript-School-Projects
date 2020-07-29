light = document.getElementById('light'); 
sloth1 = document.getElementById('sloth1');
sloth2 = document.getElementById("sloth2");
winner = document.getElementById("winner");
firework=document.getElementById("firework");
player1Position = 650;
player2Position = 650;
window.onload = displayImages();
winner.addEventListener('click',reset);
function reset(){
    winner.src="";
    firework.src="";
    light.src="lightRed.png";    
    sloth1.style.top ="650px";
    player1Position = 650;
    sloth2.style.top="650px";
    player2Position = 650;
}

function displayImages(){          
    light.src="lightRed.png";          
    sloth1.src="Sloth11.png";
    sloth1.style.position ="absolute" 
    sloth1.style.top =  player1Position+"px"  
    sloth1.style.left= "85px"    
    sloth2.src="Sloth22.png";
    sloth2.style.position ="absolute" 
    sloth2.style.top = player2Position+"px"  
    sloth2.style.left= "685px"
}
light.addEventListener('click',startRace);
function startRace(){
    light.src="lightGreen.png";
    timer = setInterval(movePlayers,50);
    function movePlayers(){
        var player1Move = (Math.random()*3);
        var player2Move = (Math.random()*3);
        player1Position -= player1Move;        
        sloth1.style.top = player1Position +"px";
        player2Position -= player2Move;
        sloth2.style.top = player2Position +"px";
        if (player1Position < 10)
        {
            clearInterval(timer);
            winner.src="winner1.png";
            firework.src="firework.gif";            
        }
        else if (player2Position < 10)
        {
            clearInterval(timer);
            winner.src="winner2.png"            
            firework.src="firework.gif";            
        }

    }
}



