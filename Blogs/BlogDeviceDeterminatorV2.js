  function checkScreenWidth() {
    const mobileView = window.matchMedia("(max-width: 1200px)");
    const desktopView = window.matchMedia("(min-width: 1201px)");
  
    if (mobileView.matches) {
      loadMobileView();
    } else if (desktopView.matches) {
      loadDesktopView();
    }
  }
  
  function loadMobileView() {
    // Clear the existing elements
    const egg = document.querySelector("header");
    if (egg) {
      egg.innerHTML = '';
    }
    const favicon = document.createElement('link');
    favicon.rel = 'icon';
    favicon.type = 'image/x-icon';
    favicon.href = '../HomeImages/icon.png';
    document.head.appendChild(favicon);
    var div1 = document.createElement('div');
    div1.id = 'side-menu';
    div1.style.height = '120px';
  
    var div2 = document.createElement('div');
    div2.className = 'menu-item';
    var a1 = document.createElement('a');
    a1.href = '../Home';
    a1.textContent = 'Home';
    div2.appendChild(a1);
    div1.appendChild(div2);
  
    var div3 = document.createElement('div');
    div3.className = 'menu-item';
    var a2 = document.createElement('a');
    a2.href = '../Authors/';
    a2.textContent = 'Author';
    div3.appendChild(a2);
    div1.appendChild(div3);
  
    var div4 = document.createElement('div');
    div4.id = 'menu-toggle';
    div4.style.fontSize = 'x-large';
    div4.textContent = '☰';
    
    var script = document.createElement('script');
    script.textContent = `
      var menuToggle = document.getElementById("menu-toggle");
      var sideMenu = document.getElementById("side-menu");
  
      menuToggle.addEventListener("click", function() {
        sideMenu.classList.toggle("active");
        document.body.classList.toggle('overflow-hidden');
      });
    `;
  
    var p = document.createElement('p');
    p.style.float = 'center';
    p.style.display = 'inline';
    p.textContent = 'PyBlog';
  
    var a3 = document.createElement('a');
    a3.href = '';
    var img = document.createElement('img');
    img.style.float = 'right';
    img.style.marginRight = '16px';
    img.style.marginTop = '12px';
    img.style.width = '40px';
    img.style.height = '40px';
    img.style.borderRadius = '100px';
    img.style.objectFit = 'cover';
    img.src = '../HomeImages/icon.png';
    img.alt = 'An image';
    a3.appendChild(img);
  
    // Get the header element and append the created elements to it
    var header = document.getElementsByTagName('header')[0];
    header.appendChild(div1);
    header.appendChild(div4);
    header.appendChild(script);
    header.appendChild(p);
    header.appendChild(a3);
  }
  
  function loadDesktopView() {
    // Clear the existing elements
    const egg = document.querySelector("header");
    if (egg) {
      egg.innerHTML = '';
    }
    const favicon = document.createElement('link');
    favicon.rel = 'icon';
    favicon.type = 'image/x-icon';
    favicon.href = '../HomeImages/icon.png';
    
    var ul = document.createElement('ul');
    ul.className = 'menu';
  
    var li1 = document.createElement('li');
    var img = document.createElement('img');
    img.style.marginLeft = '6px';
    img.style.marginRight = '6px';
    img.style.marginTop = '5px';
    img.style.width = '40px';
    img.style.height = '40px';
    img.style.borderRadius = '100px';
    img.style.objectFit = 'cover';
    img.src = '../HomeImages/icon.png';
    img.alt = 'An image'
    li1.appendChild(img);
    ul.appendChild(li1);
  
    var li2 = document.createElement('li');
    var a = document.createElement('a');
    a.href = '../Home';
    a.className = 'hover-underline-animation';
    a.textContent = 'Home';
    li2.appendChild(a);
    ul.appendChild(li2);
  
    var li3 = document.createElement('li');
    var form = document.createElement('form');
    form.action = '../search.html';
    form.method = 'GET';
    form.className = 'search-bar';
  
    var input = document.createElement('input');
    input.type = 'text';
    input.name = 'query';
    input.placeholder = '\u{1F50E}\u{FE0E} Search...';
    input.value = '';
    input.required = true;
    form.appendChild(input);
  
    var button = document.createElement('button');
    button.type = 'submit';
    button.textContent = 'Search';
    form.appendChild(button);
  
    li3.appendChild(form);
    ul.appendChild(li3);
  
    // Get the header element and append the created ul element to it
    var header = document.getElementsByTagName('header')[0];
    header.appendChild(ul);
    document.head.appendChild(favicon);
  }
  
  window.addEventListener("DOMContentLoaded", checkScreenWidth);
  
  const mediaQueryList = window.matchMedia("(max-width: 768px)");
  
  
    mediaQueryList.addEventListener("change", () => {
      checkScreenWidth();
    });