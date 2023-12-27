const data = [
  {
    id: 1,
    name: "Sity",
    img: "https://picsum.photos/id/238/200/300",
    description: "Lorem ipsum dolor sit amet consectetur.",
  },

  {
    id: 2,
    name: "Railway",
    img: "https://picsum.photos/id/1/200/300",
    description: "Lorem ipsum dolor sit amet consectetur.",
  },

  {
    id: 3,
    name: "Road",
    img: "https://picsum.photos/id/17/200/300",
    description: "Lorem ipsum dolor sit amet consectetur.",
  },

  {
    id: 4,
    name: "Book",
    img: "https://picsum.photos/id/24/200/300",
    description: "Lorem ipsum dolor sit amet consectetur.",
  },

  {
    id: 5,
    name: "Mountain",
    img: "https://picsum.photos/id/29/200/300",
    description: "Lorem ipsum dolor sit amet consectetur.",
  },

  {
    id: 6,
    name: "Nature",
    img: "https://picsum.photos/id/28/200/300",
    description: "Lorem ipsum dolor sit amet consectetur.",
  },
];

const button = document.querySelector("#btn");

button.addEventListener("click", function () {
  document.getElementsByClassName("card[2]").innerHTML = data;
});
