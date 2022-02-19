
let openNav = document.querySelector("header nav .responsive-bars i.fa-bars")
let closeNav = document.querySelector("header nav ul i.fa-times")
let navBars = document.querySelector("header nav")
let slide = document.querySelector("header .banner-image .slider")
let slideButtonRight = document.querySelector("header .banner-image .slider-button .slider-button-right")
let slideButtonLeft = document.querySelector("header .banner-image .slider-button .slider-button-left")
let scroller = document.querySelector('.scroll-to-top')
let plusBtn = document.querySelectorAll("main .works .container .content .stick-plus img")
let moreInfoClose = document.querySelectorAll("main .works .container .more-info-description .close-info i")

/**Carrousel  */
let slideOfClick = 0

let startSlide = setInterval(()=>{
    let slideContainerWidth = document.querySelector("header .banner-image").clientWidth
    slideOfClick++
    if(slideOfClick == 3){
        slideOfClick = 0
    }
    slide.style = "transform: translateX("+(-(slideOfClick *slideContainerWidth))+"px)"

    slideButtonRight.addEventListener('click',()=>{
        slideOfClick++
        if(slideOfClick == 3){
            slideOfClick = 0
        }    
        slide.style = "transform: translateX("+(-(slideOfClick *slideContainerWidth))+"px)"
    })
    

    slideButtonLeft.addEventListener('click',()=>{
        slideOfClick--
        if(slideOfClick < 0){
            slideOfClick = 0
        }    
        slide.style = "transform: translateX("+(slideOfClick * slideContainerWidth)+"px)"
    })
    
},3000)

openNav.addEventListener('click',()=>{
    navBars.classList.add('open')
})

closeNav.addEventListener('click',()=>{
    navBars.classList.remove('open')
})

/**scroller */

window.addEventListener('scroll',()=>{
    
    if(window.scrollY >= 300){
    
        scroller.classList.add('scroll')
    }else{
        scroller.classList.remove('scroll')
    }
})

scroller.addEventListener('click',()=>{
    window.scrollTo({
        top:0
    })
})

/** More info show */

plusBtn.forEach((btn)=>{
    btn.addEventListener('click',()=>{
       btn.parentNode.parentNode.parentNode.querySelector('.more-info-description').classList.add('more')
    })
})

/** More info hidde */

moreInfoClose.forEach((close)=>{
    close.addEventListener('click',()=>{
        close.parentNode.parentNode.classList.remove('more')
    })
})