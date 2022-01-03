'use strict'

let menuBtn = document.querySelectorAll('.header-menu-link');

for (let btn of menuBtn) {
    btn.addEventListener('click', function(){
        event.preventDefault();
        let link = btn.getAttribute('href');
        let block = document.querySelector(link);
        let height = block.offsetTop - 300;
        for(let item of menuBtn){
           if(item.classList.contains('active')){
                item.classList.remove('active');
            } 
        }
        
        window.scrollTo({top: height, behavior: 'smooth'});
        btn.classList.add('active');
    });
}

function moveToBlock(height,id) {
    window.scrollTo({top: height, behavior: 'smooth'});
}