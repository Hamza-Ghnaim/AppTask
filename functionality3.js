const user = JSON.parse(localStorage.userinfo);
const postID = JSON.parse(localStorage.PostID);
document.addEventListener("DOMContentLoaded", () => {
  configureComments();
});

function configureComments() {
  const x = localStorage.getItem("postcontent");
  document.getElementById("post").innerHTML = x;
  document.getElementById("NAME").innerHTML = user.name;
  document.getElementById("USERNAME").innerHTML = "@" + user.username;
  showComments();
}

function showComments() {


fetch( ` https://jsonplaceholder.typicode.com/posts/${postID}/comments`)
.then((response) => response.json())
.then(function (json) {
let comments = json;
loadComments(comments)
});
}



function loadComments(comment) {
  for (let i = 0; i < comment.length; i++) {
    const newDiv = document.createElement("div");
    newDiv.className = "addedCOMMENTDIV";
    newDiv.innerHTML = `
    <div class="commenterINFO">
    <img class="photo" src="Ellipse.png" alt="img">
    <div class="commentorNAMES">
        <h3 class = "commenterName">${comment[i].name}</h3>
        <h5 class = "username">${comment[i].body}</h5>
    </div>
    </div>
    <hr class="hr2">


    `;
    const reference = document.getElementById("breaker");
    reference.insertAdjacentElement("afterBegin", newDiv);
  }
}
