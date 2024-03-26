const blogContainer = document.querySelector(`#container`);

addBlogPost()


function addBlogPost() {
    const blogEl = document.createElement(`div`);

    const newBlogPost = JSON.parse(localStorage.getItem('blogPost'));

    let h3El = document.createElement(`h3`);
    h3El.textContent = newBlogPost.title;

    let pEl = document.createElement(`p`);
    pEl.textContent = newBlogPost.content;

    let h4El = document.createElement(`h4`);
    h4El.textContent = `Posted by: ` + newBlogPost.user;

    blogEl.classList.add("post");

    blogEl.appendChild(h3El);
    blogEl.appendChild(pEl);
    blogEl.appendChild(h4El);

 
    blogContainer.appendChild(blogEl);

    localStorage.clear();

}