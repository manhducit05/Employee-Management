import { fetchAPI } from './fetchAPI.js'
const drawUser = async () => {
  const apiUser = `http://localhost:3000/users`;
  await fetchAPI(apiUser).then((data) => {
    document.querySelector(".dashboard-tile-employee").innerHTML = `              
             <i class="material-icons" style="font-size: 48px;">group</i>
              ${data.length}<br>Total Employees
          `
  })
}
const drawTask = async () => {
  const apiTask = `http://localhost:3000/task`
  await fetchAPI(apiTask).then((data) => {
    document.querySelector(".dashboard-tile-task").innerHTML = `              
              <i class="material-icons" style="font-size: 48px;">assignment</i>
              ${data.length}<br>Inprogress Task

          `
  })
}
drawUser()
drawTask()