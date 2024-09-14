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

/**/
function createFilterTag(text) {
    const filterTag = document.createElement('div');
    filterTag.classList.add('filter-tag');

    const filterText = document.createElement('span');
    filterText.textContent = text;
    filterTag.appendChild(filterText);

    const removeButton = document.createElement('button');
    removeButton.textContent = 'X';
    removeButton.onclick = function() {
        filterTag.remove();
        updateRemoveAllButtonVisibility();
    };
    filterTag.appendChild(removeButton);

    document.getElementById('filter-tags-wrapper').appendChild(filterTag);

    updateRemoveAllButtonVisibility();
}

function updateRemoveAllButtonVisibility() {
    const filterTags = document.querySelectorAll('#filter-tags-wrapper .filter-tag');
    const removeAllButton = document.getElementById('remove-all-button');

    if (filterTags.length > 0) {
        removeAllButton.style.display = 'inline';
    } else {
        removeAllButton.style.display = 'none';
    }
}

document.getElementById('remove-all-button').addEventListener('click', function() {
    document.getElementById('filter-tags-wrapper').innerHTML = '';
    this.style.display = 'none';
});
/**/

/**/
document.querySelector('.submit-button').addEventListener('click', function() {
    let selectedRegion = document.querySelector('input[name="option"]:checked').nextSibling.textContent.trim();
    createFilterTag(selectedRegion);
});

document.querySelector('.submit-button-2').addEventListener('click', function() {
    let minPrice = document.getElementById('inp-min').value;
    let maxPrice = document.getElementById('inp-max').value;
    createFilterTag(`${minPrice}₾ - ${maxPrice}₾`);
});

document.querySelector('.submit-button-3').addEventListener('click', function() {
    let minSize = document.getElementById('inp-min-2').value;
    let maxSize = document.getElementById('inp-max-2').value;
    createFilterTag(`${minSize}მ² - ${maxSize}მ²`);
});

document.querySelector('.submit-button-4').addEventListener('click', function() {
    let bedrooms = document.getElementById('inp-min-3').value;
    createFilterTag(`${bedrooms} საძინებელი`);
});
/**/



/*//////////////////////////////////////*/
