// function colorToggle() {
//     element = document.querySelector(".lower_right");
//     element.classList.toggle("colorToggle");
// }
//
// function colorToggle2() {
//     element = document.querySelector(".lower_left");
//     element.classList.toggle("colorToggle");
// }

// function colorToggle(banan) {
//     banan.classList.toggle("colorToggle");
// }

function toggleDislike(element) {
    var id = element.id;
    var test = id.substr(3, id.length)
    var likeId = "#" + test;
    var likeButton = document.querySelector(likeId);
    element.classList.add("colorToggle")
    likeButton.classList.remove("colorToggle")
}

function toggleLike(element) {
    var id = element.id;
    var dislikeId = "#dis" + id;
    var dislikeButton = document.querySelector(dislikeId);
    element.classList.add("colorToggle")
    dislikeButton.classList.remove("colorToggle")
}

// function reset(this){
//   elements = document.querySelectorAll(".red");
//   elements.forEach(function (element) {
//     element.classList.remove("red");
//   });
// }
