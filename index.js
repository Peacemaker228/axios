// import "./js/api.js";
// import "./js/getData.js";

// import axiosInstance from "./js/api";

// import axios from "axios";

(async function init() {
  const container = document.querySelector(".main__container");

  const axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
  });

  try {
    const { data } = await axiosInstance.get("/posts");

    data.map((el, index) => {
      if (index < 10) {
        const item = document.createElement("div");
        item.classList.add("main__items");

        item.innerHTML = `
          <span class="id">${el.id}</span>
          <h2>${el.title}</h2>
          <p>${el.body}</p>
          <button class="btn">udalit'</button>
          `;

        container.appendChild(item);
      }
    });
  } catch (e) {
    console.log(e);
  }

  const btn = document.querySelectorAll(".btn");

  btn.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      try {
        // console.log(btn.parentElement.children[0]);
        const { data } = await axiosInstance.delete(`/posts/${id}`);
         let id = btn.parentElement.children[0];
         console.log(data);

      } catch (e) {
        console.log(e);
      }
    });
  });

  //   const api = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve("its ok");
  //     }, 300);
  //   });
  //   api()
  //     .then(() => {})
  //     .catch(() => {});
  //   try {
  //     const data = await api();
  //   } catch (er) {}
})();

//
//
// const service = () => {
//   return axiosInstance.get();
// };

// const getData = async () => {
//   try {
//     const res = await service();
//   } catch (e) {}
// };
