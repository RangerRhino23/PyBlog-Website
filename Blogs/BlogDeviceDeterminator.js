function isMobileDevice() {
  const userAgent = navigator.userAgent.toLowerCase();
  const mobileKeywords = ['android', 'webos', 'iphone', 'ipad', 'ipod', 'blackberry', 'windows phone'];

  return mobileKeywords.some(keyword => userAgent.includes(keyword));
}

if (isMobileDevice()) {
  console.log("Is mobile")
  const stylesheet = document.createElement('link');
  stylesheet.rel = 'stylesheet';
  stylesheet.type = 'text/css';
  stylesheet.href = '../style-mobile.css';
  const style = document.createElement('style');
  style.textContent = "@import url('CSS/mobile.css')";
  const favHomeImages/icon = document.createElement('link');
  favHomeImages/icon.rel = 'HomeImages/icon';
  favHomeImages/icon.type = 'image/x-HomeImages/icon';
  favHomeImages/icon.href = '../HomeImages/icon.png';
  document.head.appendChild(stylesheet);
  document.head.appendChild(style);
  document.head.appendChild(favHomeImages/icon);
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
  a2.href = '../Authors/ItsbaileyX';
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
  a3.appendChild(img);

  // Get the header element and append the created elements to it
  var header = document.getElementsByTagName('header')[0];
  header.appendChild(div1);
  header.appendChild(div4);
  header.appendChild(script);
  header.appendChild(p);
  header.appendChild(a3);
} else {
  console.log("Is desktop")
  const stylesheet = document.createElement('link');
  stylesheet.rel = 'stylesheet';
  stylesheet.type = 'text/css';
  stylesheet.href = '../style.css';
  stylesheet.media = 'screen'
  const link = document.createElement('link');
  const style = document.createElement('style');
  style.textContent = `@import url('CSS/desktop.css');`;

  document.head.appendChild(style);

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

  document.head.appendChild(style);
  document.head.appendChild(stylesheet);
}
