var menu = document.createElement('div');
menu.setAttribute('id', 'ik-menu');

for (let page in pages) {
  let file = pages[page].file;
  let link = document.createElement('button');
  let text = document.createTextNode('link');
  link.appendChild(text);
  link.addEventListener('click', (e) => {
    e.preventDefault();
    reset(file);
  });
  menu.appendChild(link);
}

var body = document.getElementsByTagName('body')[0];
body.insertBefore(menu, body.childNodes[0] || null);
