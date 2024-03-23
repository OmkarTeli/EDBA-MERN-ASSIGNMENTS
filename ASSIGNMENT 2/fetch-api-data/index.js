const ENDPOINT = "https://reqres.in/api/users";
const spinner = document.querySelector(".spinner");
const tableBody = document.querySelector(".table");

setTimeout(() => {
  spinner.style.display = "none";
  document.querySelector(".table").style.display = "block";
  document.querySelector("body").style.backgroundColor="#128c7e"
}, 2000);

const getUserData = async () => {
  let userData = [];
  try {
    const response = await fetch(ENDPOINT);
    if (response.status === 200) {
      const data = await response.json();
      userData = data.data;
    } else {
      throw new Error("Something went wrong");
    }
  } catch (error) {
    console.error(error);
  }
  return userData;
};

const mapUsersData = async () => {
  const users = await getUserData();
  console.log(users);
  const userDataBody = document.getElementById("user-data-body");
  for (let user of users) {
    const row = document.createElement("tr");

    //ID
    const id = document.createElement("td");
    id.textContent = user.id;
    row.appendChild(id);

    //PROFILE
    const profileContainer = document.createElement("td");
    const profile = document.createElement("img");
    profile.src = user.avatar;
    profileContainer.appendChild(profile);
    row.appendChild(profileContainer);

    //FIRST NAME
    const firstName = document.createElement("td");
    firstName.textContent = user.first_name;
    row.appendChild(firstName);

    //LAST NAME
    const lastName = document.createElement("td");
    lastName.textContent = user.last_name;
    row.appendChild(lastName);

    //EMAIL
    const email = document.createElement("td");
    email.textContent = user.email;
    row.appendChild(email);

    userDataBody.appendChild(row);
  }
};

mapUsersData();
