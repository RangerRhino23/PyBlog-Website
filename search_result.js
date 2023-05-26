// Sample blog post data (replace with your actual data)
const blogPosts = [
    { title: `<img src="Blogs/home-page-images/Sockets.webp" width=400px><br>Using Sockets For Networking`, content: `Socket, Python, Intermediate`, link: `Blogs/Using-Sockets-For-Networking`},
    { title: `<img src="Blogs/home-page-images/time.webp" width=400px><br>The History Of Python`, content: `History, Python`, link: `Blogs/The-History-Of-Python`},
    { title: `<img src="Blogs/home-page-images/Python-Introduction.webp" width=400px><br>Python Introduction`, content: `Beginner, Introduction, Python, Helpful`, link: `Blogs/Python-Introduction`},
    { title: `<img src="Blogs/home-page-images/Python-Fundamentals.webp" width=400px><br>Python Fundamentals`, content: `Fundamentals, Python, Helpful, Beginner`, link: `Blogs/Python-Fundamentals`},
    { title: `<img src="Blogs/home-page-images/Making-Chatbot-With-Python.webp" width=400px><br>Making A Chatbot With Python`, content: `Chatbot, AI, Python, Intermediate`, link: `Blogs/Making-A-Chatbot-With-Python`},
    { title: `<img src="Blogs/home-page-images/Machine-Learning.webp" width=400px><br>Machine Learning With Python`, content: `Machine Learning, Python, Advanced, AI`, link: `Blogs/Machine-Learning-With-Python`},
    { title: `<img src="Blogs/home-page-images/Introduction-Into-Ursina.webp" width=400px><br>Introduction Into Ursina`, content: `Ursina, Introduction, Beginner, Python, Game Development`, link: `Blogs/Introduction-Into-Ursina`},
    { title: `<img src="Blogs/Python-Introduction-Files/python_logo.webp" width=400px><br>Installing Python`, content: `Python, Beginner, Helpful`, link: `Blogs/Installing-Python`},
    { title: `<img src="Blogs/home-page-images/VS-Code.webp" width=400px><br>How To Use VS Code`, content: `Beginner, Visual Studio Code, How To, Helpful`, link: `Blogs/How-To-Use-VSCode`},
    { title: `<img src="Blogs/home-page-images/Desktop-Tkinter.webp" width=400px><br>Desktop Applications With Tkinter`, content: `Desktop Apps, Tkinter, Python, Beginner`, link: `Blogs/Desktop-Applications-With-Tkinter`},
    { title: `<img src="Blogs/home-page-images/Deeper-Exploration-Tkinter.webp" width=400px><br>Deeper Exploration of Tkinter`, content: `Beginner, Desktop Apps, Tkinter, Python`, link: `Blogs/Deeper-Exploration-of-Tkinter`},
    { title: `<img src="Blogs/home-page-images/Creating-Simulations.webp" width=400px><br>Creating Simulations With Python`, content: `Python, Intermediate, Simulations`, link: `Blogs/Creating-Simulations-With-Python`},
    { title: `<img src="Blogs/Flask-stuff/Flask.webp" width=400px style="background-color:white;"><br>Creating A Website With Flask`, content: `Flask, Intermediate, Website, Python`, link: `Blogs/Creating-A-Website-With-Flask`},
    { title: `<img src="Blogs/home-page-images/Terminal-Games.webp" width=400px style="background-color:white;"><br>Terminal Games With Python`, content: `Terminal, Beginner, Python`, link: `Blogs/Terminal-Games-With-Python`},
    { title: `<img src="Blogs/home-page-images/Modules.webp" width=400px style="background-color:white;"><br>Types Of Modules And How To-Use Them`, content: `Cheesy, Modules, Python`, link: `Blogs/Types-Of-Modules-And-How-To-Use-Them`},
  ];
  
  const searchResults = document.getElementById('searchResults');
  
  // Retrieve the search query from the URL parameters
  const params = new URLSearchParams(window.location.search);
  const query = params.get('query') || '';
  
  performSearch(query);
  
  function performSearch(query) {
    const matchingPosts = blogPosts.filter(post =>
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.content.toLowerCase().includes(query.toLowerCase())
    );
  
    displaySearchResults(matchingPosts);
  }
  
  function displaySearchResults(posts) {
    if (posts.length === 0) {
      searchResults.innerHTML = 'No blogs found with that search. Try using different words.';
      return;
    }
  
    posts.forEach(post => {
      const postElement = document.createElement('div');
      const titleElement = document.createElement('h3');
      const contentElement = document.createElement('div');
  
      const linkElement = document.createElement('a');
      linkElement.href = post.link;
      linkElement.innerHTML = post.title; // Use innerHTML for title
  
      titleElement.appendChild(linkElement);
      contentElement.innerHTML = post.content;
  
      postElement.appendChild(titleElement);
      postElement.appendChild(contentElement);
      searchResults.appendChild(postElement);
    });
  }
  