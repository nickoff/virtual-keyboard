import createHeader from './js/header.js';
import createMain from './js/main.js';
import content from './js/content.js';
import keyCodes from './js/keyCodes.js';
import createKeyboard from './js/keyboard.js';

const switchLang = (lang) => {
  document.querySelector('.title').innerHTML = content.title[lang];
  document.querySelector('.description').innerHTML = content.description[lang];
  document.querySelector('.keyboard').innerHTML = createKeyboard(keyCodes, lang).innerHTML;
};

const lightKeyOn = (code) => {
  if (Object.keys(keyCodes).includes(code)) {
    const downKey = document.getElementById(code);
    if (code !== 'CapsLock') { downKey.classList.add('key_activ'); } else { downKey.classList.toggle('key_activ'); }
  }
};

const lightKeyOff = (code) => {
  if (Object.keys(keyCodes).includes(code)) {
    const downKey = document.getElementById(code);
    if (code !== 'CapsLock') { downKey.classList.remove('key_activ'); }
  }
};

const enterChar = (code, lang) => {
  if (Object.keys(keyCodes).includes(code)) {
    const textareaContent = document.querySelector('.textarea');
    if (keyCodes[code].cssClass.length === 1
    || keyCodes[code].cssClass.length === 3) {
      textareaContent.textContent += keyCodes[code][lang].key;
      textareaContent.setSelectionRange(
        textareaContent.textContent.length,
        textareaContent.textContent.length,
      );
      textareaContent.focus();
    }
  }
};

window.onload = () => {
  let lang = 'en';

  if (localStorage.getItem('lang')) {
    lang = localStorage.getItem('lang');
  }

  document.body.classList.add('body');

  const header = createHeader(content.title[lang]);
  const main = createMain(content.description[lang], keyCodes, lang);

  document.body.append(header);
  document.body.append(main);

  document.addEventListener('keydown', (event) => {
    if ((event.altKey) && (event.shiftKey)) {
      if (lang === 'en') { lang = 'ru'; } else { lang = 'en'; }
      localStorage.setItem('lang', lang);
      switchLang(lang);
    }
    lightKeyOn(event.code);
    enterChar(event.code, lang);
    event.preventDefault();
  });

  document.addEventListener('keyup', (event) => {
    lightKeyOff(event.code);
  });

  const keyboardHundler = document.querySelector('.keyboard');
  keyboardHundler.addEventListener('mousedown', (event) => {
    lightKeyOn(event.target.id);
    enterChar(event.target.id, lang);
  });

  keyboardHundler.addEventListener('mouseup', (event) => {
    lightKeyOff(event.target.id);
  });
};
