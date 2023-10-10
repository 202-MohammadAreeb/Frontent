let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

const sr = ScrollReveal ({
    distance : '65px',
    duration: 1000,
    delay: 400,
    reset: true
});


sr.reveal('.hero-text',{delay:200,origin:'top'});
sr.reveal('.hero-img',{delay:450,origin:'top'});

sr.reveal('.form-box', {
    origin: 'bottom',  
    easing: 'ease-in', 
    scale: 1,          
    opacity: 0,        
    distance: '20px'   
});
