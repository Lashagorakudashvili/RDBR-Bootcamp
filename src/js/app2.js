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
const modal1 = document.getElementById('myModal-1');
const btn1 = document.getElementById('del-list');
const closeBtn1 = document.querySelector('.close-1');
const confirmBtn1 = document.getElementById('confirmBtn-1');
const cancelBtn1 = document.getElementById('cancelBtn-1');


function openModal1() {
    modal1.style.display = 'block';
    document.body.style.overflow = 'hidden';
    myModal1.style.overflow = 'hidden';
}

function closeModal1() {
    modal1.style.display = 'none';
    document.body.style.overflow = '';
}

btn1.onclick = openModal1;

closeBtn1.onclick = closeModal1;

confirmBtn1.onclick = function() {
    window.location.href = "index.html";
};

cancelBtn1.onclick = closeModal1;


window.onclick = function(event) {
    if (event.target === modal1) {
        modal1.style.display = 'none';
        document.body.style.overflow = '';
    }
}
/*2*/