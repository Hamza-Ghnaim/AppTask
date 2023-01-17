const container = document.getElementsByClassName("createPost_container")[0];
const user = JSON.parse(localStorage.userinfo);
document.addEventListener("DOMContentLoaded", () => {
  showPosts();
});

function showPosts() {
  fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
    .then((response) => response.json())
    .then((json) => createPosts(json));
}

function createPosts(jsonobject) {
  jsonobject.forEach((element) => {
    const newDiv = document.createElement("div");
    newDiv.className = "posts_div";
    newDiv.innerHTML = `   
            <div class="userINFO">
                <img src="Ellipse.png" alt="img">
                <div class="userNAMES">
                    <h3 class = "name">${user.name}</h3>
                    <h5 class = "username">@${user.username}</h5>
                </div>
            </div>
            <p class = "post" id="${element.id}" onclick = "go_to_comments(this)">${element.body}</p>
            <hr id = "hr1" class="hr1">
            <div class="viewallCOMMENTS">
              See Comments
            </div>
            <div class = "comment-holder">
                <img src="Vector.png" alt="img" >
                <input id= "comment" class = "comment" type="text" placeholder="Add comment..." onkeydown = "postCOMMENT(this)">  
            </div>
            <hr class="hr2">
        `;
    // onkeydown
    const reference = document.getElementById("posts_container");
    reference.insertAdjacentElement("afterend", newDiv);
  });
}

function createPost() {
  container.style.display = "block";
  document.getElementById("new-post").value = "";
}

function cancelPost() {
  container.style.display = "none";

}

function uploadPost() {
  const content = document.getElementById("new-post").value;
  const newDiv = document.createElement("div");
  newDiv.className = "posts_div";
  newDiv.innerHTML = `
            <div class="userINFO">
                <img class="photo" src="Ellipse.png" alt="img">
                <div class="userNAMES">
                    <h3 class = "name">${user.name}</h3>
                    <h5 class = "username">@${user.username}</h5>
                </div>
            </div>
            <p class = "post" >${content}</p>
            <hr id = "hr1" class="hr1">
            <div class = "comment-holder">
                <img src="Vector.png" alt="img" >
                <input id= "comment" class = "comment" type="text" placeholder="Add comment..." onkeydown = "postCOMMENT(this)" >  
            </div>
            <hr class="hr2">
        `;

  const reference = document.getElementById("posts_container");
  reference.insertAdjacentElement("afterend", newDiv);
  container.style.display = "none";
}

function postCOMMENT(obj) {
  if (
    event.key === "Enter" &&
    obj.value.trim().length !== 0 &&
    obj.value !== null
  ) {
    const content = obj.value;
    const newDiv = document.createElement("div");
    newDiv.className = "addedCOMMENT";
    newDiv.innerHTML = `
    <div class="userINFO">
    <img class="photo" src="Ellipse.png" alt="img">
    <div class="userNAMES">
        <h3 class = "name">${user.name}</h3>
        <p class = "addedCOMMENT">${content}</p>
    </div>
    </div>
    
    `;
    const reference = obj.parentNode;
    console.log(obj.parentNode);
    reference.insertAdjacentElement("beforeBegin", newDiv);
    obj.value = " ";
  }
}

function go_to_comments(comm) {
  localStorage.setItem("postcontent", comm.innerHTML);
  localStorage.PostID = JSON.stringify(comm.id);
  window.location.href = "./comments.html";
}
