window.onload = function () {
    document.querySelector('.size007').onmouseover = btnSizeCarouselon;
    document.querySelector('.size007').onmouseout = btnSizeCarouseloff;
    document.querySelector('#toBe').onmouseover = toBeQuote;
    document.querySelector('#toBe').onmouseout = toBeQuotegone;
}
function btnSizeCarouselon() {
    this.innerHTML = "Learn more about Shakespere";
}
function btnSizeCarouseloff(){
    this.innerHTML = "William Shakespere"
}
function toBeQuote(){
    this.innerHTML = "Prince Hamlet-Hamlet Act III, Scene I"
}
function toBeQuotegone(){
    this.innerHTML = "To be or not to be, that is the question"
}