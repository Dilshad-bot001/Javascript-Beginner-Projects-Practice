// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn){
    btn.addEventListener("click", function(e){
        const className = e.currentTarget.classList;
        if(className.contains("decrease")){
            count--;
        }
        else if(className.contains("increase")){
            count++;
        }
        else if(className.contains("reset")){
            count = 0;
        }
        value.textContent = count;
    })
})