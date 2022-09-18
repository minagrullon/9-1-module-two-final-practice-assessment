const option = document.querySelector("option");
const select = document.querySelector("select");
const info = document.querySelector("#info");
const form = document.querySelector("form");
const ul = document.querySelector("ul");
const shoutout = document.querySelector("#shoutout");
const main = document.querySelector("main");

const URL = "https://ghibliapi.herokuapp.com/people";
let peopleData;

fetch(URL)
  .then((data) => data.json())
  .then((data) => {
    peopleData = data;
    // console.log(peopleData);
    data.forEach((person) => {
      const options = document.createElement("option");
      options.value = person.name;
      options.innerText = person.name;
      select.append(options);
    });
  })
  .catch((err) => console.log(err));

// const fetchy = select.addEventListener("change", (e) => {
//   fetch(`${URL}/${select.value}`)
//     .then((data) => data.json())
//     .then((data) => {})
//     .catch((err) => console.log(err));
// });

select.addEventListener("change", (e) => {
  info.innerHTML = "";

  const fetchyData = peopleData.find((people) => people.name === select.value);

  const infoH4 = document.createElement("h4");
  infoH4.innerText = fetchyData.name;

  const pAge = document.createElement("p");
  pAge.innerHTML = `<b>Age:</b> ${fetchyData.age}`;

  const pEye = document.createElement("p");
  pEye.innerHTML = `<b>Eye Color:</b> ${fetchyData.eye_color}`;

  const pHair = document.createElement("p");
  pHair.innerHTML = `<b>Hair Color:</b> ${fetchyData.hair_color}`;

  info.append(infoH4, pAge, pEye, pHair);
});
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (select.value === "") {
    const err = document.createElement("p");
    err.innerHTML = ` Please Select a Person`;
    err.style.color = "red";
    err.style.fontSize = "13px";
    form.append(err);
    select.addEventListener("click", () => {
      err.innerHTML = "";
    });
  }
  if (shoutout.value === "") {
    const error = document.createElement("p");
    error.innerHTML = `Please add a shoutout for ${select.value}`;
    error.style.color = "red";
    error.style.fontSize = "13px";
    form.append(error);
    shoutout.addEventListener("click", () => {
      error.innerHTML = "";
    });
  }

  const li = document.createElement("li");
  li.innerHTML = `<strong>${select.value}:</strong> ${shoutout.value}`;
  ul.append(li);
  form.reset();
});

const button = document.createElement("button");
button.setAttribute("id", "reset-shoutouts");
button.innerHTML = "Remove Shoutouts";
button.backgroundColor = "white";
button.borderRadius = "9px";
main.append(button);
button.addEventListener("click", () => {
  ul.innerHTML = "";
});

//   fetch(`${URL}/${select.value}`)
//     .then((data) => data.json())
//     .then((data) => {
//       info.innerHTML = "";

//       const infoH4 = document.createElement("h4");
//       infoH4.innerText = data.name;

//       const pAge = document.createElement("p");
//       pAge.innerHTML = `<b>Age:</b> ${data.age}`;
//       console.log(pAge);

//       const pEye = document.createElement("p");
//       pEye.innerHTML = `<b>Eye Color:</b> ${data.eye_color}`;
//       console.log(pEye);

//       const pHair = document.createElement("p");
//       pHair.innerHTML = `<b>Hair Color:</b> ${data.hair_color}`;
//       console.log(pHair);

//       info.append(infoH4, pAge, pEye, pHair);

//       form.addEventListener("submit", (e) => {
//         e.preventDefault();

//         // shoutout.innerHTML = "";
//         const li = document.createElement("li");

//         const lis = document.getElementsByTagName("li");
//         console.log(lis);
//         for (let i = 0; i < lis.length; i++) {
//           // if(lis[i].innerText.includes(`${data.name}`))
//           if (lis[i].innerText.includes(`${data.name}`)) {
//             lis[i].reset();
//           }
//         }
//         li.innerHTML = `<strong>${data.name}:</strong> ${shoutout.value}`;

//         ul.append(li);
//         form.reset();
//       });
//     })
//     .catch((err) => console.log(err));
// });
