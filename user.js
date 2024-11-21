document.addEventListener("DOMContentLoaded", () => {
    let container = document.querySelector(".container");
    let gobackBtn = document.querySelector(".goback");
    
    gobackBtn.addEventListener("click", () => {
      location.replace("/index.html"); 
    });
  

    let userId = location.search.slice(1);
    let user = JSON.parse(localStorage.getItem("cards")).find(
      (val) => val.id == userId
    );
  
    if (user) {
      let name = document.createElement("h2");
      let username = document.createElement("h3");
      let email = document.createElement("p");
      let address = document.createElement("p");
      let phone = document.createElement("p");
      let website = document.createElement("p");
      let company = document.createElement("p");
  
      name.textContent = `Name: ${user.name}`;
      username.textContent = `Username: ${user.username}`;
      email.textContent = `Email: ${user.email}`;
      address.textContent =` Address: ${user.address.street}, ${user.address.city}`;
      phone.textContent = `Phone: ${user.phone}`;
      website.textContent =` Website: ${user.website}`;
      company.textContent = `Company: ${user.company.name} - ${user.company.catchPhrase}`;
  
      container.append(name, username, email, address, phone, website, company);
    } else {
      container.textContent = "User not found!";
    }
  });