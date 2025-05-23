const container = document.getElementById("container");
const loader = document.getElementById("loader");

let itemCount = 0;
const batchSize = 20;

function loadItems() {
    for (let i =0; i < batchSize; i++) {
        const item = document.createElement("div");
        item.className = "item";
        item.textContent = `Item  ${++itemCount}`;
        container.appendChild(item);
    }
}

const observer = new IntersectionObserver((entries) => {
  const entry = entries[0];
  if (entry.isIntersecting) {
    observer.unobserve(loader);

    setTimeout(() => {
      loadItems();
      observer.observe(loader); 
    }, 500); 
  }
}, {
  rootMargin: "100px",
  threshold: 0
});

loadItems();
observer.observe(loader);