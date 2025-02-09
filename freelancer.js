const names = [
  "Kevin",
  "Alice",
  "Bob",
  "Carol",
  "Daniel",
  "Adrian",
  "John",
  "Matt",
  "Brian",
];

const occupations = ["Writer", "Teacher", "Programmer", "Gardener", "Driver"];
const maxFreelancers = 25;

//freelancer array
const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
];

//Random generator
function addFreelancers() {
  const name = names[Math.floor(Math.random() * names.length)];
  const price = 1 + Math.floor(Math.random() * 100);
  const occupation =
    occupations[Math.floor(Math.random() * occupations.length)];

  freelancers.push({ name, price, occupation });
}

//Average Price
function getAveragePrice() {
  const sum = freelancers.reduce((acc, current) => acc + current.price, 0);
  averagePrice = sum / freelancers.length;
}

const header = document.querySelector("header");
const table = document.querySelector("table");

// Render the initial freelancer data
function renderFreelancers() {
  const h1 = document.createElement("h1");
  h1.innerText = "Freelancer Forum";
  header.append(h1);

  const tableBody = document.createElement("tbody");
  table.append(tableBody);

  const mappedData = freelancers.map((freelancer) => {
    const tableRow = document.createElement("tr");
    const name = document.createElement("td");
    name.textContent = freelancer.name;
    const price = document.createElement("td");
    price.textContent = "$" + freelancer.price;
    const occupation = document.createElement("td");
    occupation.textContent = freelancer.occupation;

    tableRow.append(name, price, occupation);

    return tableRow;
  });

  tableBody.replaceChildren(...mappedData);
}

function renderInitialArray() {
  for (let i = 0; i < 8; i++) {
    const tableRow = document.createElement("tr");
    const name = document.createElement("td");
    name.textContent = element.name;
    const price = document.createElement("td");
    price.textContent = "$" + element.price;
    const occupation = document.createElement("td");
    occupation.textContent = element.occupation;

    tableRow.append(name, price, occupation);

    return tableRow;
  }
  tableBody.replaceChildren(tableRow);
}

function renderAverageText() {
  const h2 = document.createElement("h2");
  h2.innerText = `The average starting price is: `;
  header.append(h2);
}

lastRenderedIndex = freelancers.length;

// function renderAveragePrice() {
//   const h2 = document.createElement("h2");
//   h2.innerText = `The average starting price is: \$${averagePrice}`;
//   header.append(h2);
// }

function render() {
  renderFreelancers();
  renderAveragePrice();
}

// initial render
getAveragePrice();
render();

// Add a freelancer every second until max is reached
const freelancerInterval = setInterval(function () {
  addFreelancers();
  getAveragePrice();
  renderLast();

  if (freelancers.length >= maxFreelancers) {
    clearInterval(freelancerInterval);
  }
}, 1000);
