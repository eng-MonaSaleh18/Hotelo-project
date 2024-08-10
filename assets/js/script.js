const media =document.querySelector('.nav-media');
const btn1 =document.querySelector('.btn1');
const btn2 =document.querySelector('.btn2')

btn1.addEventListener('click' ,() =>{
    media.style.display =(!(media.style.display=='block'))?'block':'none';
    btn2.style.display =(!(btn2.style.display=='block'))?'block':'none';
    btn1.style.display ='none';
})
btn2.addEventListener('click' ,() =>{
    media.style.display =(!(media.style.display=='block'))?'block':'none';
    btn1.style.display =(!(btn1.style.display=='block'))?'block':'none';
    btn2.style.display ='none';
})
