const userEl = document.getElementById(`user`);
const titleEl = document.getElementById(`title`);
const contentEl = document.getElementById(`content`);
const submitEl = document.getElementById(`submit-button`)

submitEl.addEventListener(`click`, function (event) {
  event.preventDefault();

  const blogPost = {
    user: userEl.value,
    title: titleEl.value,
    content: contentEl.value.trim(),
  };

  localStorage.setItem(`blogPost`, JSON.stringify(blogPost));


// const newBlogPost = JSON.parse(localStorage.getItem('blogPost'));

  userEl.value = ("")
  titleEl.value = ("")
  contentEl.value = ("")


})





























// let userValue = localStorage.getItem(userText);
// let titleValue = localStorage.getItem(titleText);
// let contentValue = localStorage.getItem(contentText);


