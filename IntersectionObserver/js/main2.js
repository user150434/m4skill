const container = document.getElementById("container");
const loader = document.getElementById("loader");

let itemCount = 0;
const batchSize = 30;
let isLoading = false; 

function loadItems() {
    if (isLoading) return;
    
    isLoading = true;
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < batchSize; i++) {
        const item = document.createElement("div");
        item.className = "item";
        item.textContent = `Item ${++itemCount}`;
        fragment.appendChild(item);
    }

    container.appendChild(fragment);
    isLoading = false;
}

const observer = new IntersectionObserver((entries) => {
    const entry = entries[0];
    if (entry.isIntersecting && !isLoading) {
        observer.unobserve(loader);
        loadItems();
        observer.observe(loader);
    }
}, {
    rootMargin: "200px", 
    threshold: 0.1 
});


loadItems();
observer.observe(loader);