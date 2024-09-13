document.getElementById('reg').addEventListener('click', function() {
    document.getElementById('custom-box').style.display = 'block';
});

document.getElementById('close-button').addEventListener('click', function() {
    document.getElementById('custom-box').style.display = 'none';
});


document.getElementById('reg').addEventListener('click', function() {
    document.getElementById('pri-ran').style.display = 'none';
});


document.getElementById('reg').addEventListener('click', function() {
    document.getElementById('siz-ran').style.display = 'none';
});

document.getElementById('reg').addEventListener('click', function() {
    document.getElementById('broom-ran').style.display = 'none';
});
/**/

/**/
document.getElementById('pri').addEventListener('click', function() {
    document.getElementById('pri-ran').style.display = 'block';
});

document.getElementById('close-button-2').addEventListener('click', function() {
    document.getElementById('pri-ran').style.display = 'none';
});


document.getElementById('pri').addEventListener('click', function() {
    document.getElementById('custom-box').style.display = 'none';
});


document.getElementById('pri').addEventListener('click', function() {
        document.getElementById('siz-ran').style.display = 'none';
});

document.getElementById('pri').addEventListener('click', function() {
    document.getElementById('broom-ran').style.display = 'none';
});
/**/

/**/
document.querySelectorAll('.min-price').forEach(item => {
    item.addEventListener('click', function() {
        const priceValue = this.getAttribute('data-value');
        
        document.getElementById('inp-min').value = priceValue;
    });
});

document.querySelectorAll(".max-price").forEach(item => {
    item.addEventListener("click", function () {
        const priceValue = this.getAttribute("data-value");

        document.getElementById("inp-max").value = priceValue;
    })
})
/**/

/**/
document.getElementById('siz').addEventListener('click', function() {
    document.getElementById('siz-ran').style.display = 'block';
});

document.getElementById('close-button-3').addEventListener('click', function() {
    document.getElementById('siz-ran').style.display = 'none';
});

document.getElementById('siz').addEventListener('click', function() {
    document.getElementById('custom-box').style.display = 'none';
});

document.getElementById('siz').addEventListener('click', function() {
    document.getElementById('pri-ran').style.display = 'none';

});

document.getElementById('siz').addEventListener('click', function() {
    document.getElementById('broom-ran').style.display = 'none';
});
/**/

/**/
document.querySelectorAll('.min-siz').forEach(item => {
    item.addEventListener('click', function() {
        const priceValue = this.getAttribute('data-value');
        
        document.getElementById('inp-min-2').value = priceValue;
    });
});

document.querySelectorAll(".max-siz").forEach(item => {
    item.addEventListener("click", function () {
        const priceValue = this.getAttribute("data-value");

        document.getElementById("inp-max-2").value = priceValue;
    })
})
/**/

/**/
document.getElementById('broom').addEventListener('click', function() {
    document.getElementById('broom-ran').style.display = 'block';
});

document.getElementById('close-button-4').addEventListener('click', function() {
    document.getElementById('broom-ran').style.display = 'none';
});

document.getElementById('broom').addEventListener('click', function() {
    document.getElementById('custom-box').style.display = 'none';
});

document.getElementById('broom').addEventListener('click', function() {
    document.getElementById('pri-ran').style.display = 'none';
});

document.getElementById('broom').addEventListener('click', function() {
    document.getElementById('siz-ran').style.display = 'none';
});
/**/


/*//////////////////////////////////////*/


