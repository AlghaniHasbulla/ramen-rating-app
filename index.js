const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "miso.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "tonkotsu.jpg" }
];

function displayRamens() {
    const ramenMenu = document.getElementById('ramen-menu');
    ramenMenu.innerHTML = ''; // Clear existing content
    
    ramens.forEach(ramen => {
        const img = document.createElement('img');
        img.src = ramen.image;
        img.className = 'ramen-img';
        img.alt = ramen.name;
        img.addEventListener('click', () => handleClick(ramen));
        ramenMenu.appendChild(img);
    });
}

function handleClick(ramen) {
    const detailDiv = document.getElementById('ramen-detail');
    detailDiv.querySelector('.detail-image').src = ramen.image || '';
    detailDiv.querySelector('.name').textContent = ramen.name || '';
    detailDiv.querySelector('.restaurant').textContent = ramen.restaurant || '';
    detailDiv.querySelector('.rating').textContent = ramen.rating ? `Rating: ${ramen.rating}` : '';
    detailDiv.querySelector('.comment').textContent = ramen.comment || '';
}

function addSubmitListener() {
    const form = document.getElementById('new-ramen');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
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
    // Optional: Display first ramen on load
    if (ramens.length > 0) {
        handleClick(ramens[0]);
    }
}

// Ensure DOM is loaded before running main
document.addEventListener('DOMContentLoaded', main);