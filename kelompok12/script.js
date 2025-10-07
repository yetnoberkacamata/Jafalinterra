// ====== Data Produk ======
const products = [
    { 
      id: "8991389307380", 
      name: "Jafalinterra  Hoodie", 
      price: 21, 
      image: "hoodie.jpeg", 
      detail: "Hoodie premium berbahan fleece tebal dengan potongan oversized khas Fear of God Essentials. Nyaman dipakai sehari-hari maupun untuk gaya streetwear."
    },
    { 
      id: "102", 
      name: "sweatpants.jpeg", 
      price: 12, 
      image: "sweatpants.jpeg", 
      detail: "Sweatpants berbahan katun lembut dengan karet elastis dan logo Essentials. Memberikan kenyamanan maksimal untuk bersantai ataupun olahraga ringan."
    },
    { 
      id: "103", 
      name: "Jafalinterra  T-Shirt", 
      price: 9, 
      image: "t shirt.jpeg", 
      detail: "Kaos katun premium dengan tekstur lembut, potongan relaxed fit, serta logo minimalis Essentials. Ideal dipadukan dengan berbagai outfit kasual."
    },
    { 
      id: "104", 
      name: "Jafalinterra  Jacket", 
      price: 25, 
      image: "jacket.jpeg", 
      detail: "Jaket ringan berbahan tahan angin dengan desain modern. Memberikan tampilan stylish sekaligus fungsional di segala suasana."
    },
    { 
      id: "105", 
      name: "Jafalinterra  Shorts", 
      price: 8, 
      image: "short pants.jpeg", 
      detail: "Shorts berbahan katun ringan dengan potongan relaxed fit. Ideal untuk musim panas atau aktivitas santai."
    },
    { 
      id: "106", 
      name: "Jafalinterra  Cap", 
      price: 7, 
      image: "cap.jpeg", 
      detail: "Topi dengan desain minimalis Essentials. Material ringan dan breathable, cocok melengkapi gaya kasual harian."
    }
  ];
  
  const productsContainer = document.getElementById("products");
  const searchInput = document.getElementById("search");
  const modal = document.getElementById("modal");
  const modalBody = document.getElementById("modal-body");
  
  // ====== Render Produk di Home ======
  function renderProducts(list){
    if(!productsContainer) return; // biar aman kalau bukan di home
    productsContainer.innerHTML = "";
    list.forEach(p => {
      const div = document.createElement("div");
      div.className = "product";
      div.innerHTML = `
        <img src="${p.image}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>$${p.price}</p>
        <svg id="barcode-${p.id}"></svg>
      `;
      div.onclick = () => openModal(p);
      productsContainer.appendChild(div);
  
      // Barcode lebih kecil di halaman home
      JsBarcode(`#barcode-${p.id}`, p.id, {
        format: "CODE128",
        displayValue: true,
        fontSize: 10,
        width: 1,
        height: 35,
        lineColor: "#111"
      });
    });
  }
  
  // ====== Modal Produk ======
  function openModal(p){
    if(!modal) return;
    modal.style.display = "flex";
    modal.classList.add("show");
    modalBody.innerHTML = `
      <span class="close" onclick="closeModal()">&times;</span>
      <h2>${p.name}</h2>
      <img src="${p.image}" style="display: block; margin: 0 auto; width: 12vw; border-radius: 10px;">
      <p><strong>Price:</strong> $${p.price}</p>
      <p><strong>Detail:</strong> ${p.detail}</p>
      <svg id="barcode-modal-${p.id}"></svg>
    `;
  
// Barcode lebih kecil di halaman home
JsBarcode(`#barcode-${p.id}`, p.id, {
    format: "CODE128",
    displayValue: true,
    fontSize: 8,   // lebih kecil
    width: 0.8,    // tipis
    height: 25,    // lebih pendek
    lineColor: "#111"
  });
  
  }
  
  function closeModal(){
    modal.classList.remove("show");
    setTimeout(() => { modal.style.display = "none"; }, 300);
  }
  
  // ====== Pencarian Produk (hanya di home) ======
  if(searchInput){
    searchInput.addEventListener("input", e => {
      const val = e.target.value.toLowerCase();
      const filtered = products.filter(p => 
        p.name.toLowerCase().includes(val) || p.id.includes(val)
      );
      renderProducts(filtered);
    });
  }
  
  // ====== Render Awal (hanya di home) ======
  if(productsContainer){
    renderProducts(products);
  }
  function openContact(){
    const modal = document.getElementById("contact-modal");
    modal.style.display = "flex";
    modal.classList.add("show");
  }
  
  function closeContact(){
    const modal = document.getElementById("contact-modal");
    modal.classList.remove("show");
    setTimeout(() => { modal.style.display = "none"; }, 300);
  }
  
  