const p1 = document.querySelector("#p1");
const p2 = document.querySelector("#p2")
const reset = document.querySelector("#reset");
const score = document.querySelector("#score");
const games = document.querySelector("#games");

let p1s = 0;
let p2s = 0;

const p1display =  document.querySelector('#p1score');
const p2display =  document.querySelector('#p2score');

p1.addEventListener("click", function(e){
    p1s ++;
    p1display.textContent = p1s;
    if( p1s == games.value){
        p1display.style.color = 'green'
        p2display.style.color = 'red'
        disableButtons();
    }
});
p2.addEventListener("click", function(e){
    p2s ++;
    p2display.textContent = p2s;
    if( p2s == games.value){
        p2display.style.color = 'green'
        p1display.style.color = 'red'
        disableButtons();
    }
});
reset.addEventListener("click", function(e){
    p1s = 0;
    p2s = 0;
    p1display.style.color = 'black'
    p2display.style.color = 'black'
    p1display.textContent = p1s;
    p2display.textContent = p2s;
    p1.disabled = false;
    p2.disabled = false;
});

function disableButtons(){
    p1.disabled = true;
    p2.disabled = true;
}