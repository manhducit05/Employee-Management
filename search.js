import { params } from "./params.js";
import { DrawUser } from "./drawUser.js";
const search = (API_User) => {
  const searchInput = document.querySelector("#searchUser");
  searchInput.addEventListener('input', () => {
    console.log(searchInput.value);
  });
  params.q = searchInput.value;
  API_User = `http://localhost:3000/users?q=${params.q}&_sort=${params.sort}&_order=asc`;
  console.log(API_User)
  DrawUser(API_User);

}
export const searchUser = () => {
  const searchBtn = document.querySelector("#button-addon2")
  searchBtn.addEventListener('click', () => {
    search();
  }
  )
}