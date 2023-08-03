function setLocalData(key, value) {
  localStorage.setItem(key, value);
}

function getLocalData(key) {
  return localStorage.getItem(key);
}

function deleteLocalData(key) {
  localStorage.removeItem(key);
}

function clearLocalStorage() {
  localStorage.clear();
}

var username = getLocalData("username");
console.log(username);
if (username != null) {
  var email = getLocalData("email");

  document.getElementById("txtUsername").value = username;
  document.getElementById("txtEmail").value = email;
}

document
  .querySelector('button[type="submit"]')
  .addEventListener("click", () => {
    if (document.getElementById("remember").checked) {
      setLocalData("username", document.getElementById("txtUsername").value);
      setLocalData("email", document.getElementById("txtEmail").value);
    } else {
      clearLocalStorage();
    }
  });
