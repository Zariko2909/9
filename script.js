document.addEventListener("DOMContentLoaded", () => {
    let cards = JSON.parse(localStorage.getItem("cards"));
    let container = document.querySelector(".container");
    let searchInput = document.querySelector(".input-group");
  
    container.classList.add(
      "container",
      "d-flex",
      "flex-wrap",
      "justify-content-between",
      "gap-3"
    );
  
    function displayCards(datas) {
      container.innerHTML = "";
      datas.forEach((user) => {
        let card = document.createElement("div");
        let name = document.createElement("h2");
        let userName = document.createElement("h3");
        let email = document.createElement("p");
        let city = document.createElement("h4");
        let company = document.createElement("h5");
        name.textContent = user.name;
        userName.textContent = user.username;
        email.textContent = user.email;
        city.textContent = user.address.city;
        company.textContent = user.company.name;
        card.append(name, userName, email, city, company);
        container.append(card);
        card.classList.add("card", "p-3", "bg-info");
        card.style.width = "300px";
        card.addEventListener("click", () => {
          window.location.replace(`user.html?${user.id}`);
        });
      });
    }

    displayCards(cards);
  

    searchInput.addEventListener("input", (e) => {
      let query = e.target.value.toLowerCase();
      let filtered = cards.filter((user) =>
        user.name.toLowerCase().includes(query)
      );
      displayCards(filtered);
    });
  });