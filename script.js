const loadButton = document.querySelector(".action-button");
const dataContainer = document.getElementById("data");

async function loadData() {
  if (loadButton.disabled) return;

  loadButton.disabled = true;
  dataContainer.textContent = "Loading...";

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const users = await response.json();

    dataContainer.innerHTML = "";

    const fragment = document.createDocumentFragment();

    users.forEach((user, index) => {
      const userElement = document.createElement("p");
      userElement.textContent = user.name;

      setTimeout(() => {
        dataContainer.appendChild(userElement);
      }, index * 300);
    });

  } catch (error) {
    dataContainer.textContent = "Failed to load data";
  } finally {
    setTimeout(() => {
      loadButton.disabled = false;
    }, 300);
  }
}

loadButton.addEventListener("click", loadData);