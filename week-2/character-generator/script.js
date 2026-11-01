/*
  Pragmatic JavaScript
  Chapter 1
  Programming Assignment

  Author: Pat M
  Date: 12/31/26
  Filename: script.js
*/

"use strict";

//Creates a character.
function createCharacter(name, gender, characterClass) {
  return {
    getName: function () {
      return name;
    },
    getGender: function () {
      return gender;
    },
    getClass: function () {
      return characterClass;
    }
  };
}

document.getElementById("generateHero").addEventListener("click", function(e) {
  e.preventDefault();

  // Get form values
  const form = document.getElementById("characterForm");
  const nameInput = document.getElementById("heroName");
  const genderSelect = document.getElementById("heroGender");
  const classSelect = document.getElementById("heroClass");
  const output = document.getElementById("characterOutput");

  if (!form.reportValidity()) {
    return;
  }

  const name = nameInput.value.trim();
  if (name === "") {
    output.textContent = "Please enter a name for your hero.";
    return;
  }

  // Use the values chosen in the lists
  const gender = genderSelect.value;
  const characterClass = classSelect.value;

  // Create character
  const hero = createCharacter(name, gender, characterClass);

  // Display character information
  output.textContent = "";

  const card = document.createElement("div");
  card.className = "heroCard";

  const nameLine = document.createElement("p");
  nameLine.className = "heroName";
  nameLine.innerHTML = '<span class="heroLabel">Name:</span> ';
  nameLine.append(hero.getName());

  const genderLine = document.createElement("p");
  genderLine.innerHTML = '<span class="heroLabel">Gender:</span> ';
  genderLine.append(hero.getGender());

  const classLine = document.createElement("p");
  classLine.innerHTML = '<span class="heroLabel">Class:</span> ';
  classLine.append(hero.getClass());

  card.append(nameLine, " ", genderLine, " ", classLine);
  output.append(card);
});