/*1*/
function scrollCarousel(direction) {
    const carousel = document.querySelector('.card-group-carousel');
    const cardWidth = document.querySelector('.card').offsetWidth;
    const cardsVisible = 4;
    const scrollAmount = cardWidth * cardsVisible + (15 * (cardsVisible - 1));

    carousel.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}
/*1*/

/*2*/
const modal = document.getElementById('myModal');
const btn = document.getElementById('del-list');
const closeBtn = document.querySelector('.close');
const confirmBtn = document.getElementById('confirmBtn');
const cancelBtn = document.getElementById('cancelBtn');

btn.onclick = function() {
    modal.style.display = 'block';
}

closeBtn.onclick = function() {
    modal.style.display = 'none';
}

confirmBtn.onclick = function() {
    window.location.href = "index.html"
}

cancelBtn.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}
/*2*/




/***********************************/



/***********************************/