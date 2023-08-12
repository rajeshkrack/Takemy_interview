// contact js//


let contact = document.querySelector('.contactButton');
let firstPlatform = document.querySelector('.first');
let secondPlatform = document.querySelector('.second');
let thirdPlatform = document.querySelector('.third');
let fourthPlatform = document.querySelector('.fourth');
let contactIcon = document.querySelector('.contactIcon');
let closeIcon = document.querySelector('.closeIcon');

contact.addEventListener('click',()=>{
    if(Array.from(secondPlatform.classList).find(element => element == "show") == undefined){
        show();
    }else{
        hide();
    }
    console.log(contactIcon.classList);
    console.log(closeIcon.classList);
});
function show() {
    firstPlatform.classList.remove("hideFirst");
    secondPlatform.classList.remove("hide");
    thirdPlatform.classList.remove("hide");
    fourthPlatform.classList.remove("hide");
    contactIcon.classList.remove("showIcon");
    closeIcon.classList.remove("hideIcon");
    
    firstPlatform.classList.add("showFirst");
    secondPlatform.classList.add("show");
    thirdPlatform.classList.add("show");
    fourthPlatform.classList.add("show");
    contactIcon.classList.add("hideIcon");
    closeIcon.classList.add("showIcon");
}
function hide() {
    firstPlatform.classList.remove("showFirst");
    secondPlatform.classList.remove("show");
    thirdPlatform.classList.remove("show");
    fourthPlatform.classList.remove("show");
    closeIcon.classList.remove("showIcon");
    contactIcon.classList.remove("hideIcon");
    
    firstPlatform.classList.add("hideFirst");
    secondPlatform.classList.add("hide");
    thirdPlatform.classList.add("hide");
    fourthPlatform.classList.add("hide");
    closeIcon.classList.add("hideIcon");
    contactIcon.classList.add("showIcon");
}
firstPlatform.addEventListener('click',()=>{
    window.open("https://twitter.com/manvar_prit");
});
secondPlatform.addEventListener('click',()=>{
    window.open("mailto:pritmanvar1109@gmail.com");
});
thirdPlatform.addEventListener('click',()=>{
    window.open("https://github.com/pritmanvar");
});
fourthPlatform.addEventListener('click',()=>{
    window.open("https://www.linkedin.com/in/prit-manvar-36ab97204/");
});













// menu js //

let first = document.getElementById('hr1');
let second = document.getElementById('hr2');
let third = document.getElementById('hr3');
let menu = document.querySelector('.phoneMenu');
let count = 0;

document.querySelector('menu').addEventListener('click',()=>{
    if(count%2 === 0){
        showMenu();
    }else{
        hideMenu();
    }
    count++;
});
function showMenu() {
    disableScroll();
    first.classList.remove("revind1");
    second.classList.remove("revind2");
    third.classList.remove("revind3");
    first.classList.add("rotateDown");
    second.classList.add("remove");
    third.classList.add("rotateUp");

    menu.classList.remove("removePhoneMenu");
    menu.classList.add("showPhoneMenu");
}
function hideMenu() {
    first.classList.add("revind1");
    second.classList.add("revind2");
    third.classList.add("revind3");
    first.classList.remove("rotateDown");
    second.classList.remove("remove");
    third.classList.remove("rotateUp");

    menu.classList.remove("showPhoneMenu");
    menu.classList.add("removePhoneMenu");

    enableScroll();
}
function disableScroll() {
    document.body.classList.add("stop-scrolling");
}
  
function enableScroll() {
    document.body.classList.remove("stop-scrolling");
}

window.onresize = ()=>{
    if(window.innerWidth > 600){
        enableScroll();
    }else{
        if(Array.from(menu.classList).find(element => element == "showPhoneMenu") !== undefined){
            disableScroll();
        }
    }
}













// nav js //

let nav = document.querySelector('nav'); // select navigation bar
let before = 0; // value of scroll before scrolling.
let pos = 0; // possion of navigation bar.
const navHeight = -nav.clientHeight; // to get height of navigation bar.

window.addEventListener('scroll',function(e){
    let after = this.scrollY; // value of scroll after scrolling.

    // add box shadow if final scrolling is equal to 0
    if(after != 0){
        nav.style.boxShadow = "0px 5px 15px black";
    }else{
        nav.style.boxShadow = "0px 0 0px black";
    }

    if(before < after){ // to hide nav bar.
        if(pos > navHeight){ // if nav bar is not completely hidden.
            pos -= after - before; // update pos by change in scrolling.
            if(pos < navHeight){ // to handel some bugs.
                pos = navHeight;
            }
            nav.style.top = pos + "px"; // update position by new pos.
        }
    }else{ // to show nav bar
        if(pos < 0){ // if nav bar is not completely appear.
            pos += before - after;
            if(pos > 0){
                pos = 0;
            }
            nav.style.top = pos + "px";
        }
    }
    before = after;
});








// type write js //



const TypeWriter = function(txtElement, words, wait){
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait,10);
    this.type();
    this.isDeleting = false;
}

// Type Method
TypeWriter.prototype.type = function(){
    // Current Index of Word 
    const current = this.wordIndex % this.words.length;
    const fulltxt = this.words[current];
    
    // check if deleting
    if(this.isDeleting){
        // remove a char
        this.txt = fulltxt.substring(0,this.txt.length-1);
    }else{
        // add a char
        this.txt = fulltxt.substring(0,this.txt.length+1);
    }
    
    // Insert txt into element
    this.txtElement.innerHTML = '<span class = "txt">' + this.txt + '</span>';
    
    // Initial Type Speed
    let typeSpeed = 100;
    if(this.isDeleting){
        typeSpeed /= 2;
    }
    
    // If word is complete
    if(!this.isDeleting && this.txt === fulltxt){
        typeSpeed = this.wait; // to make a pause at end
        this.isDeleting = true;
    }else if(this.isDeleting && this.txt === ''){
        this.isDeleting = false;
        this.wordIndex++;
    }
    
    setTimeout(()=>this.type(),typeSpeed);
}

// init typeWriter
window.onload = function(){
    // TypeWriter fore roles.
    const txtElement = document.querySelector(".role");
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    // Init TypeWriter
    new TypeWriter(txtElement,words,wait);
    
    
    // TypeWriter fore Footer.
    const txtElementFooter = document.querySelector(".footer");
    const wordsFooter = JSON.parse(txtElementFooter.getAttribute('data-words'));
    const waitFooter = txtElementFooter.getAttribute('data-wait');
    // Init TypeWriter
    new TypeWriter(txtElementFooter,wordsFooter,waitFooter);
}