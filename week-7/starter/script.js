"use strict";

const chefs = [
  { name: "Chef A", specialty: "Italian cuisine", location: "New York" },
  { name: "Chef B", specialty: "French cuisine", location: "Paris" },
  { name: "Chef C", specialty: "Japanese cuisine", location: "Tokyo" }
];

function retrieveChef(index, delay) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(chefs[index]), delay);
  });
}

Promise.allSettled([
  retrieveChef(0, 600),
  retrieveChef(1, 900),
  retrieveChef(2, 1200)
]).then(results => {
  results.forEach((result, index) => {
    const el = document.getElementById(`chef${index + 1}`);
    if (result.status === "fulfilled") {
      el.innerHTML = `<h2>${result.value.name}</h2>
                      <p>Specialty: ${result.value.specialty}</p>
                      <p>Location: ${result.value.location}</p>`;
    }
  });
});
