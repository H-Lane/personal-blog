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


  userEl.value = ("")
  titleEl.value = ("")
  contentEl.value = ("")

  
//TODO: Add in a redirect to the blog.html page and find a way to automatically make the blogPost object populate into a created div on that new page
})





























// let userValue = localStorage.getItem(userText);
// let titleValue = localStorage.getItem(titleText);
// let contentValue = localStorage.getItem(contentText);


