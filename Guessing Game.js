var numSquares = 6;
var color = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
pickedColor = pickcolor();
var display = document.querySelector(".bold");
display.textContent = pickedColor;
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector(".jumbotron");
var reset = document.querySelector("#reset");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");


easy.addEventListener("click", function(){     
        easy.classList.add("selected");
        hard.classList.remove("selected");
        numSquares = 3;
        color = generateRandomColors(numSquares);
        pickedColor = pickcolor;
        display.textContent = pickcolor();
        for(var i=0; i<squares.length; i++){
            if(color[i]){
                squares[i].style.backgroundColor = color[i];
            }
            else{
                squares[i].style.display = "none";
            }
        }
        resetBlocks();
    })
    
    hard.addEventListener("click", function(){        
        hard.classList.add("selected");
        easy.classList.remove("selected");
        numSquares = 6;
        color = generateRandomColors(numSquares);
        pickedColor = pickcolor;
        display.textContent = pickcolor();
        for(var i=0; i<squares.length; i++){
                squares[i].style.backgroundColor = color[i];
                squares[i].style.display = "block";
        }
        resetBlocks();
    })
    
    reset.addEventListener("click", function(){
        color = generateRandomColors(numSquares);
        pickedColor = pickcolor();
        display.textContent = pickedColor;
        this.textContent = "New Colors" 
        messageDisplay.textContent = "";
        for(var i=0; i<squares.length; i++){
            squares[i].style.backgroundColor = color[i];
        }
        h1.style.backgroundColor = "steelblue";
    })
    resetBlocks();


function resetBlocks(){
    color = generateRandomColors(numSquares);
    pickedColor = pickcolor();
    display.textContent = pickedColor;
    reset.textContent = "New Colors";
    messageDisplay.textContent = "";
    for(var i=0; i<squares.length; i++){
        if(color[i]){
            squares[i].style.display = "block";
            squares[i].style.background = color[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }
    h1.style.background = "steelblue";
}


for(var i=0;i<squares.length;i++){
    squares[i].style.backgroundColor = color[i];
    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct answer";
                     changeColor(clickedColor);
            h1.style.backgroundColor = pickedColor;
            reset.textContent = "Play Again!";
            
            }
        
        else{
            this.style.backgroundColor = "black";
            messageDisplay.textContent = "Try Again";
            
        }
    })
    }

    function changeColor(c) {
        for(var i=0;i<squares.length;i++){
            squares[i].style.backgroundColor = c;
        }
    }

    function pickcolor() {
        var random = Math.floor(Math.random()*color.length);
        return color[random];
    }

    function generateRandomColors(num){
        var arr = [];
        for(var i=0;i<num;i++){
            arr.push(randomColors());
        }
        return arr;
    }

    function randomColors(){
        var r = Math.floor(Math.random()*256);
        var g = Math.floor(Math.random()*256);
        var b = Math.floor(Math.random()*256);
        return "rgb(" + r + ", " +  g + ", " + b + ")";
    }
    



