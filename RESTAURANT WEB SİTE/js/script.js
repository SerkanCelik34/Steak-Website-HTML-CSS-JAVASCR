console.log("hello world");
//! Buttons
const searchForm = document.querySelector(".search-form");
const searchBtn = document.querySelector("#search-btn");
const cartİtem = document.querySelector(".cart-items-container")
const cartBtn = document.querySelector("#cart-btn");
const navbar = document.querySelector(".navbar")
const menuBtn = document.querySelector("#menu-btn");

searchBtn.addEventListener("click",function(){
searchForm.classList.toggle("active");

document.addEventListener("click",function(e){
    if(
        !e.composedPath().includes(searchBtn) &&
        !e.composedPath().includes(searchForm)
        ){
        searchForm.classList.remove("active")
    }

})
})

cartBtn.addEventListener("click",function(){
    cartİtem.classList.toggle("active");
    
    document.addEventListener("click",function(e){
        if(
            !e.composedPath().includes(cartBtn) &&
            !e.composedPath().includes(cartİtem)
            ){
            cartİtem.classList.remove("active")
        }
    
    })
})

menuBtn.addEventListener("click",function(){
    navbar.classList.toggle("active");
    
    document.addEventListener("click",function(e){
        if(
            !e.composedPath().includes(menuBtn) &&
            !e.composedPath().includes(navbar)
            ){
            navbar.classList.remove("active")
        }
    
    })
})
