const blogContainer = document.querySelector(`#container`);
const themeSwitcher = document.querySelector('#theme-switcher');
const bigContainer = document.querySelector('.big-container');
let mode = 'dark';
addBlogPost()

themeSwitcher.addEventListener('click', function () {

    if (mode === 'dark') {
      mode = 'light';
      bigContainer.setAttribute('class', 'light');
    }
    else {
      mode = 'dark';
      bigContainer.setAttribute('class', 'dark');
    }
  });



function addBlogPost() {
    const blogEl = document.createElement(`section`);

    const newBlogPost = JSON.parse(localStorage.getItem(`blogArray`));

    
    newBlogPost.forEach(function(element){

        let h3El = document.createElement(`h3`);
        h3El.textContent = element.title;
    
        let pEl = document.createElement(`p`);
        pEl.textContent = element.content;
    
        let h4El = document.createElement(`h4`);
        h4El.textContent = `Posted by: ` + element.user;
    
        blogEl.classList.add("post");
    
        blogEl.appendChild(h3El);
        blogEl.appendChild(pEl);
        blogEl.appendChild(h4El);
    
     
        blogContainer.appendChild(blogEl);
    });
}