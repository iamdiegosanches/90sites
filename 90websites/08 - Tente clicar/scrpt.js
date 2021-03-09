let mouse = document.querySelector('#mouse')

enter = () => {
    mouse.style.top = (Math.random()*80)+'%';
    mouse.style.left = (Math.random()*80) + '%';
};