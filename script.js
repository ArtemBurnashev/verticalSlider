const downBtn = document.querySelector('.down-button'),
      upBtn = document.querySelector('.up-button'),
      sideBar = document.querySelector('.sidebar'),
      mainSlide = document.querySelector('.main-slide'),
      container = document.querySelector('.container'),
      countSlides = mainSlide.querySelectorAll('div').length;
      slideItem =  sideBar.querySelectorAll('div');


sideBar.style.top = `-${(countSlides-1)*100}vh`; 

let activeIndex = 0;

upBtn.addEventListener('click', ()=>changeSlide('up'));
downBtn.addEventListener('click', ()=>changeSlide('down'));



function changeSlide(direction)
{   slideItem[slideItem.length-1-activeIndex].classList.remove('active');
    if(direction==='up'){
        
        activeIndex++;
        if(activeIndex===countSlides)
        {
            activeIndex = 0;
        }
       
       
    }
    else if(direction==='down'){
        activeIndex--;
        if(activeIndex<0)
        {
            activeIndex = countSlides-1;
        }
    }

    const height = container.clientHeight;
    mainSlide.style.transform = `translateY(-${activeIndex*height}px)`;
    sideBar.style.transform = `translateY(${activeIndex*height}px)`;
    slideItem[slideItem.length-1-activeIndex].classList.add('active');
    
    
    
   
    
   
    
}
