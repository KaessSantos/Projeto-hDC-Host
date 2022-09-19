function scrollbtn(){
    window.scrollTo({
        top:0,
        left:0,
        behavior:'smooth'
    });
}

function simibtn(){
    if(window.scrollY === 0){
        document.querySelector('.fa-sharp').style.display = 'none'
    }else{
        document.querySelector('.fa-sharp').style.display = 'block';
    }
}

window.addEventListener('scroll', simibtn);