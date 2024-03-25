let user = document.querySelector(`#user`);
let title = document.querySelector(`#title`);
let content = document.querySelector(`#content`);

let userValue = localStorage.getItem(userText);
let titleValue = localStorage.getItem(titleText);
let contentValue = localStorage.getItem(contentText);

if (userValue == null) {
  let userText;

  userText = document.createTextNode("Input your username here");
} else {
  userText = document.createTextNode(userValue);
}

user.appendChild(userText);
