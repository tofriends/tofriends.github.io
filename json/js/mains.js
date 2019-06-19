var ourRequest = new XMLHttpRequest();
ourRequest.open(
  "GET",
  "https://jsonboy.github.io/update%20json%20file/json/package.json",
  true
);
ourRequest.onload = function() {
  var po = JSON.parse(ourRequest.responseText);
  var pops = po[1].sch;
  call(pops);
};
ourRequest.send();

function call(pops) {
  function hob(hob) {
    return `
    <h4> hobbies: ${hob}</h4>
  
    `;
  }

  function like(likes) {
    return `
    <h4> likes: ${likes}</h4>

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

  function pet(sch) {
    return `
  <div class="animal">
  <img class="pet-photo" src="${sch.photo}">
  <h2 class="pet-name">${sch.name}</h2>
  <p> <strong>Age:</strong> ${age(sch.dob)}</p>
   ${sch.likes ? like(sch.likes) : ""}
   ${sch.hob ? hob(sch.hob) : ""}
  </div>
  `;
  }

  document.getElementById("app").innerHTML = `
  <h1 class="app-title">My friends list (${pops.length})</h1>
  ${pops.map(pet).join("")}
  <p class="footer">There will be update soon...<span class="emog">&#x1F92A;</span></p>
  `;
}
