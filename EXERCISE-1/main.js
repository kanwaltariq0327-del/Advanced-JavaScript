let ul = document.querySelector(".images");

//using an event handler
ul.addEventListener('click', (e) => {

//to remove the selected img using it tagName value to specify it
    if(e.target.tagName === "IMG") {
        let removeIt = e.target.parentNode;
        removeIt.remove()
    }

})