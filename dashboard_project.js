const API_URL = "/api/items";

// making the items load
async function loadItems() {
  const container = document.getElementById("userContainer");
  container.innerHTML = "Loading...";

  try {
    const res = await fetch(API_URL);
    const data = await res.json();

    container.innerHTML = "";

    data.forEach(item => {
      const div = document.createElement("div");
      div.className = "card";
      div.textContent = item.text;
      container.appendChild(div);
    });

  } catch (err) {
    container.innerHTML = "Error loading data.";
  }
}

// adding items
async function addItem() {
  const input = document.getElementById("taskInput");
  const text = input.value;

  if (!text) return;

  await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ text })
  });

  input.value = "";
  loadItems();
}