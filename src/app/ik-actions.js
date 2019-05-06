var menu = document.createElement('div');
menu.setAttribute('id', 'ik-menu');

for (let page in pages) {
  let appid = pages[page].id;
  let link = document.createElement('button');
  let text = document.createTextNode(page);
  link.appendChild(text);
  link.addEventListener('click', (e) => {
    e.preventDefault();
    reset(appid);
  });
  menu.appendChild(link);
}

var body = document.getElementsByTagName('body')[0];
body.insertBefore(menu, body.childNodes[0] || null);
