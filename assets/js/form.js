const userEl = document.getElementById(`user`);
const titleEl = document.getElementById(`title`);
const contentEl = document.getElementById(`content`);
const submitEl = document.getElementById(`submit-button`);

submitEl.addEventListener(`click`, function (event) {
  event.preventDefault();

  if (userEl.value.length == 0) {
    errorMessage();
    return;
  } else if (titleEl.value.length == 0) {
    errorMessage();
    return;
  } else if (contentEl.value.length == 0) {
    errorMessage();
    return;
  }

  const blogPost = {
    user: userEl.value,
    title: titleEl.value,
    content: contentEl.value.trim(),
  };

  localStorage.setItem(`blogPost`, JSON.stringify(blogPost));

  userEl.value = "";
  titleEl.value = "";
  contentEl.value = "";

  window.location.href = `./blog.html`
});

function errorMessage() {
  alert("Please complete all empty forms before submitting.");
  
};

// let userValue = localStorage.getItem(userText);
// let titleValue = localStorage.getItem(titleText);
// let contentValue = localStorage.getItem(contentText);
