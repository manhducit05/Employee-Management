export const addUser = () => {
  const form = document.querySelector("#addUserForm");
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const userData = {};
    formData.forEach((value, key) => {
      userData[key] = value;
    });

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("User added:", data);
        // Optionally, refresh the user list or give feedback to the user
      })
      .catch((error) => console.error("Error:", error));
  });
};
