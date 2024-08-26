const htmls = document.querySelector('.main-content tbody')
console.log(htmls)
let count = 6;

const btn = document.querySelector("#departmentBtn")
const input = document.querySelector("#departmentName")
function getCurrentDateTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}
var value = ""
input.addEventListener('input', (event)=>{
    value = event.target.value;
    console.log("Updated value:", value); // Hiển thị giá trị mới trong console để kiểm tra
});
btn.addEventListener('click',(e)=>{
  e.preventDefault();
  count++
  const time =  getCurrentDateTime()
  htmls.innerHTML = `${htmls.innerHTML}` + `       
         <tr>
                <td>${count}</td>
                <td>${value}</td>
                <td>${time}</td>
                <td>
                  <button class="edit-btn">Edit</button>
                  <button class="delete-btn">Delete</button>
                </td>
          </tr>
              `
})