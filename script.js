const root = document.getElementById("root");
const firstPart = document.getElementById("firstPart");
const container = document.createElement("div");
const minusBtn = document.createElement("button");
const plusBtn = document.createElement("button");

firstPart.appendChild(minusBtn);
firstPart.appendChild(container);
firstPart.appendChild(plusBtn);

minusBtn.textContent = "-";
container.textContent = 0;
plusBtn.textContent = "+";

minusBtn.classList.add("minusBtn");
plusBtn.classList.add("plusBtn");
container.classList.add("container");

minusBtn.addEventListener("click", () => {
  if (container.textContent > 0) {
    container.textContent--;
  }
});
plusBtn.addEventListener("click", () => {
  container.textContent++;
});

async function dataTable() {
  const url = "http://localhost:3000/users";
  const res = await fetch(url);
  const data = await res.json();

  const secondPart = document.createElement("div");
  const usersDetails = document.createElement("div");
  const headerName = document.createElement("h2");
  headerName.textContent = "Users List";
  root.appendChild(secondPart);
  root.appendChild(usersDetails);
  secondPart.appendChild(headerName);

  usersDetails.classList.add("usersDetail");

  const firstName = document.createElement("h3");
  firstName.textContent = "First-Name";
  usersDetails.appendChild(firstName);

  const secondName = document.createElement("h3");
  secondName.textContent = "Second-Name";
  usersDetails.appendChild(secondName);

  const emailAdd = document.createElement("h3");
  emailAdd.textContent = "Email";
  usersDetails.appendChild(emailAdd);

  function createElement(element, container) {
    const newElement = document.createElement("p");
    newElement.textContent = element;
    container.appendChild(newElement);
  }

  data.forEach((element) => {
    createElement(element.firstName, firstName);
    createElement(element.secondName, secondName);
    createElement(element.email, emailAdd);
  });
}
dataTable();
