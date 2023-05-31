const userTable = document.getElementById('user-table');
const form = document.getElementById("form");
const btn = document.getElementById("submit-btn")

btn.addEventListener("click", (e)=>{
  e.preventDefault();
  userTable.innerHTML +=`
    <tr>
    <td>${form["first-name"].value}</td>
    <td>${form["last-name"].value}</td>
    <td>${form["gender"].value}</td>
    <td>${form["course-name"].value}</td>
    <td>${form["mobile-number"].value}</td>
    <td>${form["email"].value}</td>
    <td>${form["password"].value}</td>
    </tr>
  `;
  form.reset();
})
