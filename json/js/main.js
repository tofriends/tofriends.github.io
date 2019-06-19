var ourRequest = new XMLHttpRequest();
ourRequest.open(
  "GET",
  "https://jsonboy.github.io/update%20json%20file/json/package.json",
  true
);
ourRequest.onload = function() {
  var po = JSON.parse(ourRequest.responseText);
  var pop = po[0].col;
  collage(pop);
};
ourRequest.send();

function collage(pop) {
  function hob(hob) {
    return `
    <h4> hobbies:${hob} </h4>
    `;
  }

  function like(likes) {
    return `
    <h4> likes:  ${likes}</h4>
    `;
  }

  function age(dob) {
    var cal = new Date().getFullYear() - dob;
    if (cal == 1) {
      return "1 year old";
    } else if (cal == 0) {
      return "Baby";
    } else {
      return `${cal} years old`;
    }
  }

  function pet(clg) {
    return `
  <div class="animal">
  <img class="pet-photo" src="${clg.photo}">
  <h2 class="pet-name">${clg.name}</h2>
  <p> <strong>Age:</strong> ${age(clg.dob)}</p>
   ${clg.likes ? like(clg.likes) : ""}
   ${clg.hob ? hob(clg.hob) : ""}
  </div>
  `;
  }

  document.getElementById("app").innerHTML = `
  <h1 class="app-title">My friends list (${pop.length})</h1>
  ${pop.map(pet).join("")}
  <p class="footer">There will be update soon...<span class="emog">&#x1F92A;</span></p>
  `;
}
