import { DrawUser } from "./drawUser.js";
import { params } from "./params.js";
import { sort } from "./sort.js";
import { searchUser } from "./search.js";
import { deleteUser } from "./delete.js";
import { editUser } from "./edit.js";
import { drawChart } from "./chart.js";
import { addUser } from "./add.js";
let API_User = `http://localhost:3000/users?q=${params.q}&_sort=${params.sort}&_order=asc`;

//tinh nang tim kiem
searchUser(API_User);
//tinh nang sap xep
sort(API_User);
//ve bieu do
drawChart();
//xoá

//start

const User = async () => {
  await DrawUser(API_User);
  deleteUser();
  editUser();
  addUser();
};
User();
