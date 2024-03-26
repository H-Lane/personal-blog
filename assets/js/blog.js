const blogContainer = document.querySelector(`#container`);

addBlogPost()
// add class of post to the div when done. Use h3 for title, p for content, and h4 for author

function addBlogPost() {
    const blogEl = document.createElement(`div`);

    const newBlogPost = JSON.parse(localStorage.getItem('blogPost'));

    let h3El = document.createElement(`h3`);
    h3El.textContent = newBlogPost.title;

    let pEl = document.createElement(`p`);
    pEl.textContent = newBlogPost.content;

    let h4El = document.createElement(`h4`);
    h4El.textContent = newBlogPost.user;

    blogEl.classList.add("post");

    blogEl.appendChild(h3El);
    blogEl.appendChild(pEl);
    blogEl.appendChild(h4El);

 
    blogContainer.appendChild(blogEl);

}