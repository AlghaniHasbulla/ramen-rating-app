const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "images/shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "images/miso.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "images/tonkotsu.jpg" }
];

function displayRamens() {
    const menu = document.getElementById('ramen-menu');
    menu.innerHTML = '';
    ramens.forEach(ramen => {
        const img = document.createElement('img');
        img.src = ramen.image;
        img.className = 'ramen-img';
        img.alt = ramen.name;
        img.addEventListener('click', () => handleClick(ramen));
        menu.appendChild(img);
    });
}

function handleClick(ramen) {
    const detail = document.getElementById('ramen-detail');
    detail.querySelector('.detail-image').src = ramen.image;
    detail.querySelector('.name').textContent = ramen.name;
    detail.querySelector('.restaurant').textContent = ramen.restaurant;
    detail.querySelector('.rating').textContent = ramen.rating ? `Rating: ${ramen.rating}` : '';
    detail.querySelector('.comment').textContent = ramen.comment || '';
}

function addSubmitListener() {
    const form = document.getElementById('new-ramen');
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const newRamen = {
            id: ramens.length + 1,
            name: form.name.value,
            restaurant: form.restaurant.value,
            image: form.image.value,
            rating: parseInt(form.rating.value) || undefined,
            comment: form.comment.value || undefined
        };

        ramens.push(newRamen);
        displayRamens();
        form.reset();
    });
}

function main() {
    displayRamens();
    addSubmitListener();

}


document.addEventListener('DOMContentLoaded', main);