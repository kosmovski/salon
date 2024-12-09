// Дані для прикладу
const orders = [
    { id: 1, client: "Олена", service: "Манікюр", time: "10:00" },
    { id: 2, client: "Марія", service: "Стрижка", time: "12:00" },
  ];
  
  const app = document.getElementById("app");
  const ordersContainer = document.getElementById("orders");
  const orderDetails = document.getElementById("order-details");
  const detailsContent = document.getElementById("details-content");
  const backButton = document.getElementById("back-button");
  const photoInput = document.getElementById("photo-input");
  const addPhotoButton = document.getElementById("add-photo");
  const sendDataButton = document.getElementById("send-data");
  
  // Відображення списку замовлень
  function loadOrders() {
    ordersContainer.innerHTML = "";
    orders.forEach(order => {
      const orderCard = document.createElement("div");
      orderCard.classList.add("order-card");
      orderCard.innerHTML = `
        <strong>${order.client}</strong> — ${order.service}<br>
        Час: ${order.time}
      `;
      orderCard.onclick = () => showOrderDetails(order);
      ordersContainer.appendChild(orderCard);
    });
  }
  
  // Відображення деталей замовлення
  function showOrderDetails(order) {
    ordersContainer.classList.add("hidden");
    orderDetails.classList.remove("hidden");
    detailsContent.innerHTML = `
      <h2>${order.client}</h2>
      <p>Послуга: ${order.service}</p>
      <p>Час: ${order.time}</p>
      <div id="photo-list"></div>
    `;
  }
  
  // Додавання фото
  addPhotoButton.onclick = () => {
    photoInput.click();
  };
  
  photoInput.onchange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const photoList = document.getElementById("photo-list");
      const img = document.createElement("img");
      img.src = URL.createObjectURL(file);
      img.style.maxWidth = "100px";
      img.style.margin = "10px";
      photoList.appendChild(img);
    }
  };
  
  // Повернення до списку замовлень
  backButton.onclick = () => {
    ordersContainer.classList.remove("hidden");
    orderDetails.classList.add("hidden");
  };
  
  // Завантаження списку замовлень при старті
  loadOrders();
  