const btn = document.getElementById("btn");
const name = document.getElementById("name");
const age = document.getElementById("age");
const car = document.getElementById("car");
const desc = document.getElementById("description");
const tbody = document.getElementById("tbody");

function validate() {
  if (!name.value) {
    name.focus();
    name.style.outlineColor = "red";
    return false;
  }
  //   else {
  //     name.style.OutlineColor = "lightgray";
  //   }

  if (!age.value) {
    age.focus();
    age.style.outlineColor = "red";
    return false;
  }

  if (!age.value) {
    age.focus();
    age.style.outlineColor = "red";
    return false;
  }
  if (age.value <= 0 || age.value >= 150) {
    alert("Bunday yosh kiritish mumkin emas");
    age.focus();
    return false;
  }

  if (!Number(age.value)) {
    alert("Yosh raqamda kiritilishi kerak");
    age.focus();
    return false;
  } else {
    name.style.outlineColor = "lightgray";
  }
  if (!car.value) {
    age.focus();
    alert("Mashinani tanlang");
    return false;
  }
  if (!desc.value) {
    age.focus();
    alert("Izoh yozish majburiy");
    return false;
  } else {
    name.style.outlineColor = "lightgray";
  }

  return true;
}
function clear() {
  name.value = "";
  age.value = "";
  car.value = "";
  desc.value = "";
}

btn &&
  btn.addEventListener("click", function () {
    if (validate()) {
      const user = {
        id: Date.now(),
        name: name.value,
        age: age.value,
        car: car.value,
        desc: desc.value,
      };

      let dataLocalStorage = [];
      if (localStorage.getItem("users")) {
        dataLocalStorage = JSON.parse(localStorage.getItem("users"));
      }
      dataLocalStorage.push(user);
      localStorage.setItem("users", JSON.stringify(dataLocalStorage));

      const tr = createRow(user, dataLocalStorage.length);
      tbody.innerHTML += tr;
      clear();
    }
  });

function createRow(user, index) {
  return `
        <tr>
          <td>${index}</td>
          <td>${user.name}</td>
          <td>${user.age}</td>
          <td>${user.car}</td>
          <td>${user.desc}</td>
          <td>
          <span class="update">Update</span>
          <span data-id = 'item_${user.id}' class="delete">Delete</span>
          </td>
        </tr>
  `;
}

document.addEventListener("DOMContentLoaded", function () {
  let data = [];
  if (localStorage.getItem("users")) {
    data = JSON.parse(localStorage.getItem("users"));
  }
  if (data.length && tbody) {
    data.forEach((element, index) => {
      const tr = createRow(element, index + 1);
      tbody.innerHTML += tr;
    });
  }

  const deleteButtons = document.querySelectorAll("span.delete");

  if (deleteButtons.length) {
    deleteButtons.forEach((btn) => {
      btn.addEventListener("click", function () {
        const elId = this.getAttribute("data-id").slice(5);
        console.log(elId);
        if (elId) {
          let isDelete = confirm("Rosdan ham o'chirmoqchimisiz");
          if (isDelete) {
            data = data.filter((el) => {
              return el.id != elId;
            });
localStorage.setItem("users", JSON.stringify(data))
window.location.reload();
          }
        }
      });
    });
  }
});
