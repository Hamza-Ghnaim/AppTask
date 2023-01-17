
function matchUser() {
  let userEmail = document.getElementById("email").value;
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then(function (json) {
      let user = json.find((item) => item.email === userEmail);
      console.log(user);
      if(user !== undefined){
        localStorage.userinfo = JSON.stringify(user);
        window.location.href = "./discover.html";
      }
      else{
        throw new Error('Please enter a valid Email');

      }
    }).catch(err => alert(err));
}


