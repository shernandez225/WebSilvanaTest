import { ref, onValue } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-database.js";
import { db } from "./firebase.js";
import { addToUserCart } from "./carrito.js";

const grid = document.getElementById("gridProductos");
const status = document.getElementById("status");

function render(lista) {
  grid.innerHTML = "";
for (const p of lista) {
    const col = document.createElement("div");
    col.className = "col-12 col-md-4";

    col.innerHTML = `
      <article class="card h-100 shadow-sm">
        <a href="producto.html?id=${p.id}" class="product-link">
          <img src="${p.imagen}" class="card-img-top" alt="${p.nombre}">
        </a>

        <div class="card-body">
          <div class="d-flex justify-content-between align-items-start gap-2">
            <h3 class="h6 card-title mb-1">${p.nombre}</h3>
            <span class="badge text-bg-dark">${p.categoria}</span>
          </div>
          <p class="text-muted mb-0">$${p.precio}</p>
            <button class="btn btn-dark btn-add" data-id="${p.id}">
          Agregar
        </button>
        </div>
      </article>
    `;

    grid.appendChild(col);
  }
 

  grid.querySelectorAll(".btn-add").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const product = lista.find(p => p.id === btn.dataset.id);

      try {
        await addToUserCart(product);
        status.innerHTML = "Producto agregado";
      } catch (err) {
        status.innerHTML = err.message;
      }
    });
  });
}

onValue(ref(db, "store"), (snapshot) => {
  const data = snapshot.val();

  if (!data) return;

  const productos = Object.entries(data).map(([id, p]) => ({
    id,
    ...p
  }));

  render(productos);
});