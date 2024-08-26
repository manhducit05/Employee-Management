import { fetchAPI } from "./fetchAPI.js";
const patchMethod =async (id)=>{
  await fetchAPI(`http://localhost:3000/users/${id}`).then((data)=>{
    console.log(data)
    document.querySelector('.edit-modal-dialog #name').value = data.firstName
    document.querySelector('.edit-modal-dialog #age').value = data.age 
    document.querySelector('.edit-modal-dialog #gender').value = data.gender
    document.querySelector('.edit-modal-dialog #email').value = data.email
    document.querySelector('.edit-modal-dialog #address').value = data.address
    document.querySelector('.edit-modal-dialog #phone').value = data.phone
    document.querySelector('.edit-modal-dialog #department').value = data.department
    document.querySelector('.edit-modal-dialog #position').value = data.title

    document.querySelectorAll(".btn-success").forEach((item)=>{
      item.addEventListener('click',(event)=>{
        event.preventDefault();
        const newUser = {   
          firstName: document.querySelector('.edit-modal-dialog #name').value,
          age: document.querySelector('.edit-modal-dialog #age').value,
          gender: document.querySelector('.edit-modal-dialog #gender').value,
          email: document.querySelector('.edit-modal-dialog #email').value,
          address: document.querySelector('.edit-modal-dialog #address').value,
          phone: document.querySelector('.edit-modal-dialog #phone').value,
          department: document.querySelector('.edit-modal-dialog #department').value,
          position: document.querySelector('.edit-modal-dialog #position').value    
        }
        console.log(newUser)
        fetch(`http://localhost:3000/users/${id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newUser  )
        })
        .then(res => res.json())
        .then(console.log);
      }
    )
    })

  })
}
export const editUser = ()=>{
  document.querySelectorAll('.editBtn').forEach((btn) => {
   btn.addEventListener('click', function () {
     const userId = this.getAttribute('value');
     patchMethod(userId)
   });

 }
 )
}

