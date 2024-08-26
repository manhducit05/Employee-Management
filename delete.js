
const deleteById = (id) => {
  fetch(`http://localhost:3000/users/${id}`, {
    method: 'DELETE',
  })
    .then(res => res.json())
    .then(console.log);
}
export const deleteUser = () => {
   document.querySelectorAll('.deleteBtn').forEach((btn) => {
    btn.addEventListener('click', function () {
      const userId = this.getAttribute('value');
      console.log('User ID:', userId);
      document.querySelectorAll(".btn-success").forEach((item)=>{
        item.addEventListener('click',()=>{
          deleteById(userId)
        })
      })
    });
  }
)

}

