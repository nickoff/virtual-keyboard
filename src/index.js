import createHeader from './js/header.js';
import createMain from './js/main.js';
import content from './js/content.js';
import keyCodes from './js/keyCodes.js';

window.onload = () => {
  document.body.classList.add('body');

  let lang = 'en';

  const header = createHeader(content.title[lang]);
  const main = createMain(content.description[lang], keyCodes);

  document.body.append(header);
  document.body.append(main);

  document.addEventListener('keydown', (event) => {
    if ((event.altKey) && (event.shiftKey)) {
      if (lang === 'en') { lang = 'ru'; } else { lang = 'en'; }
      document.querySelector('.title').innerHTML = content.title[lang];
      document.querySelector('.description').innerHTML = content.description[lang];
    }
  });
};
