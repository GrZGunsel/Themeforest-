let scrollProgress = document.getElementById("progress");
let scrollPercentage = () => {
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round(pos * 100 / calcHeight);

    console.log(scrollValue);

    scrollProgress.style.background = `conic-gradient(#005de0 ${scrollValue}%, #005de015 ${scrollValue}%)`;
}


// When the user scrolls down 20px from the top of the document, show the button


function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollProgress.classList.add("active");
        scrollPercentage();
    } else {
        scrollProgress.classList.remove("active");
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.onscroll = function () { scrollFunction() };