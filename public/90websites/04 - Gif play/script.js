let gif = document.querySelector('#gif-hover')

function add() {
    gif.classList.toggle('hover');
    gif.onmouseover = function(){
        gif.classList.toggle('hover');
    }
    
}

function remove() {
    gif.classList.toggle('hover');
    gif.onmouseout = function(){
        gif.classList.toggle('hover');
    }
}
