const data = [
  {
    id: 1,
    name: "Sity",
    img: "https://picsum.photos/id/238/200/300",
    description: "Here is a picture of the city",
  },

  {
    id: 2,
    name: "Railway",
    img: "https://picsum.photos/id/1/200/300",
    description: "Here is a picture of the railway",
  },

  {
    id: 3,
    name: "Road",
    img: "https://picsum.photos/id/17/200/300",
    description: "Here is a picture of the road",
  },

  {
    id: 4,
    name: "Book",
    img: "https://picsum.photos/id/24/200/300",
    description: "Here is a picture of the book",
  },

  {
    id: 5,
    name: "Mountain",
    img: "https://picsum.photos/id/29/200/300",
    description: "Here is a picture of snowy mountains",
  },

  {
    id: 6,
    name: "Nature",
    img: "https://picsum.photos/id/28/200/300",
    description: "Here is a picture of nature",
  },
];

const cardImg = document.querySelector("#img");
const cardTitle = document.getElementById("title");
const cardDescription = document.getElementById("comment");
const btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
  setTimeout(function () {
    const card = data[Math.trunc(Math.floor(Math.random(0, 1) * data.length))];
    cardImg.setAttribute("src", card["img"]);
    cardTitle.innerHTML = card.name;
    cardDescription.innerHTML = card.description;
  }, 500);
});
console.log(card);
