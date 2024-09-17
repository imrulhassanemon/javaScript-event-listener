console.log("Hello javaScript")

// option 1 
function makePinkee(){
    document.body.style.backgroundColor = 'pink'
}

// Option 2 

const makeYellow = document.getElementById("make-yellow");

makeYellow.onclick = Yellow;

function Yellow(){
    document.body.style.backgroundColor = 'lightyellow'
}



function makeRed(){
    document.body.style.backgroundColor = "	#B8B8B8"
}

// option 3 
const purpleColor = document.getElementById("purple");
        purpleColor.onclick = function makePurple(){
            document.body.style.backgroundColor = "#baaccf"
        }
        
// option 4 

const makeGreen = document.getElementById("green");
        makeGreen.addEventListener("click", makepink);

        function makepink(){
            document.body.style.backgroundColor = '#baf6c6'
        }
// another option 4 
const makeRedd = document.getElementById("reds");
    makeRedd.addEventListener("click", function makeRedd(){
        document.body.style.backgroundColor = '#f5aab1'
    })