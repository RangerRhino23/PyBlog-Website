  //new code
  function isMobileDevice() {
    const userAgent = navigator.userAgent.toLowerCase();
    const mobileKeywords = ['android', 'webos', 'iphone', 'ipad', 'ipod', 'blackberry', 'windows phone'];
  
    return mobileKeywords.some(keyword => userAgent.includes(keyword));
  }
  
  function checkScreenWidth() {
    const mobileView = window.matchMedia("(max-width: 768px)");
    const desktopView = window.matchMedia("(min-width: 769px)");
  
    if (mobileView.matches || isMobileDevice()) {
      loadMobileView();
    } else if (desktopView.matches) {
      loadDesktopView();
    }
  }
  
  function loadMobileView() {
    // Clear the existing elements
    if (document.querySelector("header")) {
      document.querySelector("header").remove();
    }
  
    const style = document.createElement('style');
    style.textContent = "@import url('HomeCSS/HomeMobile.css')";
    document.head.appendChild(style);

    var header = document.createElement("header");
    
    var sideMenu = document.createElement("div");
    sideMenu.id = "side-menu";
    sideMenu.innerHTML = `
        <div class="menu-item"><a href="">Home</a></div>
        <div class="menu-item"><a id="about-pyblog-button">About Pyblog</a></div>
        <div class="menu-item"><a id="fun-blogs-button">Fun Blogs</a></div>
        <div class="menu-item"><a id="helpful-blogs-button">Helpful Blogs</a></div>
        <div class="menu-item"><a href="Authors/">Authors</a></div>
    `;
    
    var menuToggle = document.createElement("div");
    menuToggle.id = "menu-toggle";
    menuToggle.style.fontSize = "x-large";
    menuToggle.innerHTML = "&#9776;";
    
    var script1 = document.createElement("script");
    script1.innerHTML = `
        var menuToggle = document.getElementById("menu-toggle");
        var sideMenu = document.getElementById("side-menu");
        
        menuToggle.addEventListener("click", function() {
        sideMenu.classList.toggle("active");
        document.body.classList.toggle('overflow-hidden');
        });
    `;
    
    var script2 = document.createElement("script");
    script2.innerHTML = `
        var AboutPyblogToggle = document.getElementById("about-pyblog-button");
        var sideMenu = document.getElementById("side-menu");
        
        AboutPyblogToggle.addEventListener("click", function() {
        sideMenu.classList.toggle("active");
        window.location.href = '#about-pyblog';
        document.body.classList.toggle('overflow-hidden');
        });
    `;
    
    var script3 = document.createElement("script");
    script3.innerHTML = `
        var FunBlogsToggle = document.getElementById("fun-blogs-button");
        var sideMenu = document.getElementById("side-menu");
        
        FunBlogsToggle.addEventListener("click", function() {
        sideMenu.classList.toggle("active");
        window.location.href = '#fun-blogs';
        document.body.classList.toggle('overflow-hidden');
        });
    `;
    
    var script4 = document.createElement("script");
    script4.innerHTML = `
        var HelpfulBlogsToggle = document.getElementById("helpful-blogs-button");
        var sideMenu = document.getElementById("side-menu");
        
        HelpfulBlogsToggle.addEventListener("click", function() {
        sideMenu.classList.toggle("active");
        window.location.href = '#helpful-blogs';
        document.body.classList.toggle('overflow-hidden');
        });
    `;
    
    var pyBlogLogo = document.createElement("a");
    pyBlogLogo.href = "";
    pyBlogLogo.innerHTML = `
        <img alt="PyBlog" style="float: center; margin-right: 16px; margin-top: 12px;width:180px;height:40px; border-radius:10px;object-fit: cover" src="HomeImages/icon.png">
    `;
    
    var searchMenu = document.createElement("div");
    searchMenu.id = "search-menu";
    searchMenu.innerHTML = `
        <div class="search-item">
        <form action="search-mobile.html" method="GET">
            <input type="text" name="query" placeholder="&#x1F50E;&#xFE0E; Search..." value="" required><br>
            <button type="submit">Search</button>
        </form>
        </div>
    `;
    
    var searchToggle = document.createElement("div");
    searchToggle.id = "search-toggle";
    searchToggle.style.fontSize = "x-large";
    searchToggle.innerHTML = "&#x1F50E;&#xFE0E;";
    
    var script5 = document.createElement("script");
    script5.innerHTML = `
        var searchToggle = document.getElementById("search-toggle");
        var searchMenu = document.getElementById("search-menu");
        
        searchToggle.addEventListener("click", function() {
        searchMenu.classList.toggle("active");
        document.body.classList.toggle('overflow-hidden');
        });
    `;
    
    header.appendChild(sideMenu);
    header.appendChild(menuToggle);
    header.appendChild(script1);
    header.appendChild(script2);
    header.appendChild(script3);
    header.appendChild(script4);
    header.appendChild(pyBlogLogo);
    header.appendChild(searchMenu);
    header.appendChild(searchToggle);
    header.appendChild(script5);
    
    document.body.prepend(header);
  }
  
  function loadDesktopView() {
    // Clear the existing elements
    if (document.querySelector("header")) {
      document.querySelector("header").remove();
    }
  
    const style = document.createElement('style');
    style.textContent = "@import url('HomeCSS/HomeDesktop.css')";
    document.head.appendChild(style);
  // Create header element
  var header = document.createElement("header");

  var menuList = document.createElement("ul");
  menuList.classList.add("menu");

  var menuItems = [
    '<li><img style="margin-left: 6px; margin-right: 6px; margin-top: 5px;width:40px;height:40px; border-radius:100px;object-fit: cover" src="HomeImages/icon.png" alt="Icon"></li>',
    '<li><a href="#" class="hover-underline-animation">Home</a></li>',
    '<li><a href="#about-pyblog" class="hover-underline-animation">About PyBlog</a></li>',
    '<li><a href="#fun-blogs" class="hover-underline-animation">Fun Blogs</a></li>',
    '<li><a href="#helpful-blogs" class="hover-underline-animation">Helpful Blogs</a></li>',
    '<li><a href="Authors/" class="hover-underline-animation">Authors</a></li>',
    `
    <li>
      <form action="search.html" method="GET" class="search-bar">
        <input type="text" name="query" placeholder="&#x1F50E;&#xFE0E; Search..." value="" required>
        <button type="submit">Search</button>
      </form>
    </li>
    `
  ];

  menuItems.forEach(function(item) {
    var menuItem = document.createElement("li");
    menuItem.innerHTML = item;
    menuList.appendChild(menuItem);
  });

  // Append menu elements to the header
  header.appendChild(menuList);

  // Append header to the document body
  document.body.prepend(header);
  };
  
  window.addEventListener("DOMContentLoaded", checkScreenWidth);
  
  const mediaQueryList = window.matchMedia("(max-width: 768px)");
  
  mediaQueryList.addEventListener("change", (e) => {
    if (e.matches) {
      loadMobileView();
    } else {
      loadDesktopView();
    }
  });