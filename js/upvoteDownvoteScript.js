let $ = function(id) { return document.getElementById(id); };

window.onload = () => {
    $("upvote").addEventListener("click", addUpvote)
    $("downvote").addEventListener("click", addDownvote)
    updateCounters();
}

// Declare Variables
let totUp = 42;
let totDown = 10;


const addUpvote = () => {
    totUp++;
    updateCounters();
}

const addDownvote = () => {
    totDown++;
    updateCounters();
}

const updateCounters = () => {
    $("upvoteCounter").innerHTML = totUp;
    $("downvoteCounter").innerHTML = "-" + totDown;
    $("totalCounter").innerHTML = totUp - totDown;
}