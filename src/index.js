import createHeader from './js/header.js';
import createMain from './js/main.js';
import content from './js/content.js';
import keyCodes from './js/keyCodes.js';

window.onload = () => {
  let lang = 'en';
  if (localStorage.getItem('lang')) {
    lang = localStorage.getItem('lang');
  }

  document.body.classList.add('body');

  const header = createHeader(content.title[lang]);
  const main = createMain(content.description[lang], keyCodes);

  document.body.append(header);
  document.body.append(main);

  document.addEventListener('keydown', (event) => {
    if ((event.altKey) && (event.shiftKey)) {
      if (lang === 'en') { lang = 'ru'; } else { lang = 'en'; }
      localStorage.setItem('lang', lang);
      document.querySelector('.title').innerHTML = content.title[lang];
      document.querySelector('.description').innerHTML = content.description[lang];
    }
  });
};
