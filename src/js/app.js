/*1*/
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
/*1*/

/*2*/
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
/*2*/

/*3*/
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
/*3*/

/*4*/
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
/*4*/

/*5*/
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
/*5*/

/*6*/
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
/*6*/

/*7*/
const filterOrder = ['region', 'price', 'size', 'bedrooms'];

function createOrUpdateFilterTag(type, text) {
    const filterTagsWrapper = document.getElementById('filter-tags-wrapper');

    if (type === 'region') {
        const selectedRegions = Array.from(document.querySelectorAll('input[name="option"]:checked')).map(input => input.nextSibling.textContent.trim());
        
        Array.from(filterTagsWrapper.children).forEach(tag => {
            if (tag.dataset.type === 'region' && !selectedRegions.includes(tag.querySelector('span').textContent)) {
                tag.remove();
            }
        });
        
        selectedRegions.forEach(region => {
            let existingTag = Array.from(filterTagsWrapper.children).find(tag => tag.dataset.type === 'region' && tag.querySelector('span').textContent === region);
            if (!existingTag) {
                const filterTag = document.createElement('div');
                filterTag.classList.add('filter-tag');
                filterTag.dataset.type = 'region';

                const filterText = document.createElement('span');
                filterText.textContent = region;
                filterTag.appendChild(filterText);

                const removeButton = document.createElement('button');
                removeButton.textContent = 'X';
                removeButton.onclick = function() {
                    filterTag.remove();
                    updateRemoveAllButtonVisibility();
                };
                filterTag.appendChild(removeButton);

                filterTagsWrapper.appendChild(filterTag);
            }
        });
    } else {
        let existingTag = Array.from(filterTagsWrapper.children).find(tag => tag.dataset.type === type);

        if (existingTag) {
            existingTag.querySelector('span').textContent = text;
        } else {
            const filterTag = document.createElement('div');
            filterTag.classList.add('filter-tag');
            filterTag.dataset.type = type;

            const filterText = document.createElement('span');
            filterText.textContent = text;
            filterTag.appendChild(filterText);

            const removeButton = document.createElement('button');
            removeButton.textContent = 'X';
            removeButton.onclick = function() {  
                filterTag.remove();

                if (filterTag.dataset.type === "price") {
                    document.querySelector(".card-group").style.display = "grid";
                    document.getElementById("notFound").style.display = "none"
                }

                updateRemoveAllButtonVisibility();
            };
            filterTag.appendChild(removeButton);

            filterTagsWrapper.appendChild(filterTag);
        }
    }

    reorderFilterTags();
    updateRemoveAllButtonVisibility();
}
/*7*/

/*8*/
function reorderFilterTags() {
    const filterTagsWrapper = document.getElementById('filter-tags-wrapper');
    const tags = Array.from(filterTagsWrapper.children);

    tags.sort((a, b) => {
        return filterOrder.indexOf(a.dataset.type) - filterOrder.indexOf(b.dataset.type);
    });

    filterTagsWrapper.innerHTML = '';
    tags.forEach(tag => filterTagsWrapper.appendChild(tag));
}
/*8*/

/*9*/
function updateRemoveAllButtonVisibility() {
    const filterTags = document.querySelectorAll('#filter-tags-wrapper .filter-tag');
    const removeAllButton = document.getElementById('remove-all-button');

    if (filterTags.length > 0) {
        removeAllButton.style.display = 'inline';
    } else {
        removeAllButton.style.display = 'none';
    }
}
/*9*/

/*10*/
document.getElementById('remove-all-button').addEventListener('click', function() {
    document.getElementById('filter-tags-wrapper').innerHTML = '';
    this.style.display = 'none';

    document.querySelector(".card-group").style.display = "grid";
    document.getElementById("notFound").style.display = "none"
});
/*10*/

/*11*/
document.querySelector('.submit-button').addEventListener('click', function() {
    createOrUpdateFilterTag('region');
});

document.querySelector('.submit-button-2').addEventListener('click', function() {
    let minPrice = document.getElementById('inp-min').value;
    let maxPrice = document.getElementById('inp-max').value;
    
    minPrice = parseFloat(minPrice) || 0;

    maxPrice = parseFloat(maxPrice) || 0;

    const filterTagsWrapper = document.getElementById('filter-tags-wrapper');
    const removeAllButton = document.getElementById('remove-all-button');

        if (minPrice <= 80000) {
            document.querySelector(".card-group").style.display = "grid";
            document.getElementById("notFound").style.display = "none"

            createOrUpdateFilterTag('price', `${minPrice}₾ - ${maxPrice}₾`);
        }
        
        else {
            document.querySelector(".card-group").style.display = "none";
            createOrUpdateFilterTag('price', `${minPrice}₾ - ${maxPrice}₾`);

            document.getElementById("notFound").style.display = "inline"
        }
})

document.querySelector('.submit-button-3').addEventListener('click', function() {
    let minSize = document.getElementById('inp-min-2').value;
    let maxSize = document.getElementById('inp-max-2').value;
    createOrUpdateFilterTag('size', `${minSize}მ² - ${maxSize}მ²`);
});

document.querySelector('.submit-button-4').addEventListener('click', function() {
    let bedrooms = document.getElementById('inp-min-3').value;
    createOrUpdateFilterTag('bedrooms', `${bedrooms} საძინებელი`);
});
/*11*/

/*12*/
const modal = document.getElementById('myModal');
const btn = document.getElementById('btn-1');
const closeBtn = document.querySelector('.close');
const confirmBtn = document.getElementById('confirmBtn');
const cancelBtn = document.getElementById('cancelBtn');

function openModal() {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = '';
}

btn.onclick = openModal;

closeBtn.onclick = closeModal;

confirmBtn.onclick = function() {
    window.location.href = "index.html";
};

cancelBtn.onclick = closeModal;
/*12*/

/*13*/
document.getElementById('uploadButton').addEventListener('click', function() {
    document.getElementById('fileInput').click();
  });

  document.getElementById('fileUploadContainer').addEventListener('dragover', function(event) {
    event.preventDefault();
    event.stopPropagation();
    this.style.borderColor = '#333';
});

document.getElementById('fileUploadContainer').addEventListener('drop', function(event) {
    event.preventDefault();
    event.stopPropagation();
    this.style.borderColor = '';

    const files = event.dataTransfer.files;
    for (let i = 0; i < files.length; i++) {
        if (files[i].type.startsWith('image/')) {
            console.log('Image file:', files[i].name);
        } else {
            alert('Only image files are allowed.');
        }
    }
});
/*13*/





/*///////////////////////////////////*/



/*///////////////////////////////////*/