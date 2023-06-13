const blogs = [
  {
    title: 'Creating Minecraft In Ursina',
    content: 'Intermediate, Ursina, Python, Game, Minecraft',
    imgSrc: 'Blogs/home-page-images/Minecraft-Ursina.webp',
    link: 'Blogs/Creating-Minecraft-In-Ursina',
  },
  {
    title: 'Using Sockets For Networking',
    content: 'Socket, Python, Intermediate',
    imgSrc: 'Blogs/home-page-images/Sockets.webp',
    link: 'Blogs/Using-Sockets-For-Networking',
  },
  {
    title: 'The History Of Python',
    content: 'History, Python',
    imgSrc: 'Blogs/home-page-images/time.webp',
    link: 'Blogs/The-History-Of-Python',
  },
  {
    title: 'Python Introduction',
    content: 'Beginner, Introduction, Python, Helpful',
    imgSrc: 'Blogs/home-page-images/Python-Introduction.webp',
    link: 'Blogs/Python-Introduction',
  },
  {
    title: 'Python Fundamentals',
    content: 'Fundamentals, Python, Helpful, Beginner',
    imgSrc: 'Blogs/home-page-images/Python-Fundamentals.webp',
    link: 'Blogs/Python-Fundamentals',
  },
  {
    title: 'Making A Chatbot With Python',
    content: 'Chatbot, AI, Python, Intermediate',
    imgSrc: 'Blogs/home-page-images/Making-Chatbot-With-Python.webp',
    link: 'Blogs/Making-A-Chatbot-With-Python',
  },
  {
    title: 'Machine Learning With Python',
    content: 'Machine Learning, Python, Advanced, AI',
    imgSrc: 'Blogs/home-page-images/Machine-Learning.webp',
    link: 'Blogs/Machine-Learning-With-Python',
  },
  {
    title: 'Introduction Into Ursina',
    content: 'Ursina, Introduction, Beginner, Python, Game Development',
    imgSrc: 'Blogs/home-page-images/Introduction-Into-Ursina.webp',
    link: 'Blogs/Introduction-Into-Ursina',
  },
  {
    title: 'Installing Python',
    content: 'Python, Beginner, Helpful',
    imgSrc: 'Blogs/Python-Introduction-Files/python_logo.webp',
    link: 'Blogs/Installing-Python',
  },
  {
    title: 'How To Use VS Code',
    content: 'Beginner, Visual Studio Code, How To, Helpful',
    imgSrc: 'Blogs/home-page-images/VS-Code.webp',
    link: 'Blogs/How-To-Use-VSCode',
  },
  {
    title: 'Desktop Applications With Tkinter',
    content: 'Desktop Apps, Tkinter, Python, Beginner',
    imgSrc: 'Blogs/home-page-images/Desktop-Tkinter.webp',
    link: 'Blogs/Desktop-Applications-With-Tkinter',
  },
  {
    title: 'Deeper Exploration of Tkinter',
    content: 'Beginner, Desktop Apps, Tkinter, Python',
    imgSrc: 'Blogs/home-page-images/Deeper-Exploration-Tkinter.webp',
    link: 'Blogs/Deeper-Exploration-of-Tkinter',
  },
  {
    title: 'Creating Simulations With Python',
    content: 'Python, Intermediate, Simulations',
    imgSrc: 'Blogs/home-page-images/Creating-Simulations.webp',
    link: 'Blogs/Creating-Simulations-With-Python',
  },
  {
    title: 'Creating A Website With Flask',
    content: 'Flask, Intermediate, Website, Python',
    imgSrc: 'Blogs/Flask-stuff/Flask.webp',
    link: 'Blogs/Creating-A-Website-With-Flask',
  },
  {
    title: 'Terminal Games With Python',
    content: 'Terminal, Beginner, Python',
    imgSrc: 'Blogs/home-page-images/Terminal-Games.webp',
    link: 'Blogs/Terminal-Games-With-Python',
  },
  {
    title: 'Types Of Modules And How To-Use Them',
    content: 'User-defined Modules, Built-in modules, Python',
    imgSrc: 'Blogs/home-page-images/Modules.webp',
    link: 'Blogs/Types-Of-Modules-And-How-To-Use-Them',
  },
  {
    title: 'Making Web Games With Taptapir',
    content: 'Beginner, Web Games, Taptapir, Python',
    imgSrc: 'Blogs/home-page-images/Web-Games-Taptapir.webp',
    link: 'Blogs/Making-Web-Games-With-Taptapir',
  },
];

const searchResultsContainer = document.getElementById('search-results');

function displaySearchResults(query) {
  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(query.toLowerCase())
  );

  searchResultsContainer.innerHTML = '';

  const searchResultsHeader = document.getElementById('egg');

  if (filteredBlogs.length === 0 && query !== '') {
    // Hide "Search Results" header and display a message when no results are found
    searchResultsHeader.classList.add('hidden');
    const noResultsMessage = document.createElement('p');
    noResultsMessage.textContent = 'No blogs found, please try a different search term.';
    searchResultsContainer.appendChild(noResultsMessage);
  } else {
    // Show "Search Results" header
    searchResultsHeader.classList.remove('hidden');
    filteredBlogs.forEach((blog) => {
      const result = document.createElement('div');
      const img = document.createElement('img');
      const title = document.createElement('h3');
      const content = document.createElement('p');
      const link = document.createElement('a');

      img.src = blog.imgSrc;
      img.style.width = '80%';
      img.style.maxWidth = '500px';
      link.href = blog.link;
      link.textContent = blog.title;
      title.appendChild(link);
      content.textContent = blog.content;

      result.appendChild(img);
      result.appendChild(title);
      result.appendChild(content);
      searchResultsContainer.appendChild(result);
    });
  }
}

function handleFormSubmit(e) {
  e.preventDefault();
  const query = e.target.querySelector("input[name='query']").value;
  displaySearchResults(query);


}
function toggleMobileSearch(e) {
  e.preventDefault();
  const query = e.target.querySelector("input[name='query']").value;
  mobileSearchForm.classList.toggle("active");
  document.body.classList.toggle('overflow-hidden');
  displaySearchResults(query);
}

const searchFormDesktop = document.querySelector(".search-bar");
searchFormDesktop.addEventListener("submit", handleFormSubmit);

const mobileSearchForm = document.querySelector("#search-menu");
mobileSearchForm.addEventListener("submit", toggleMobileSearch);
displaySearchResults('');

window.addEventListener('load', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const query = urlParams.get('query');
  if (query) {
    displaySearchResults(query);
  }
});