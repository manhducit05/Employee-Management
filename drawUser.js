import {fetchAPI} from './fetchAPI.js'
export const DrawUser = async (API_User) => {
  let API = `${API_User}`
  await fetchAPI(API).then((data) => {
    console.log(API_User)
    let htmls = "";
    data.forEach((user) => {
      htmls += `
                    <tr>
                      <th><span class="custom-checkbox">
                          <input type="checkbox" id="checkbox1" name="option[]" value="1">
                          <label for="checkbox1"></label></th>
                      <th>${user.firstName}</th>
                      <th>${user.age}</th>
                      <th>${user.gender}</th>
                      <th>${user.email}</th>
                      <th>${user.address}</th>
                      <th>${user.phone}</th>
                      <th>${user.department}</th>
                      <th>${user.title}</th>
                      <th>
                        <a href="#editEmployeeModal" class="edit" data-toggle="modal">
                          <i class="material-icons editBtn" data-toggle="tooltip" title="Edit" value=${user.id}>&#xE254;</i>
                        </a>
                        <a href="#deleteEmployeeModal" class="delete" data-toggle="modal" >
                          <i class="material-icons deleteBtn" data-toggle="tooltip" title="Delete" value=${user.id}>&#xE872;</i>
                        </a>
                      </th>
                  </tr>
               `;
    });
    const dataUsers = document.querySelector("#dataUsers"); 
    dataUsers.innerHTML = htmls;
  }
  )
}

