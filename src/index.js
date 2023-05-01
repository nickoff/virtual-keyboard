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

const keepFocusContent = (keepingContent) => {
  keepingContent.setSelectionRange(
    keepingContent.textContent.length,
    keepingContent.textContent.length,
  );
  keepingContent.focus();
};

const enterChar = (code, lang, upperKey = false) => {
  if (Object.keys(keyCodes).includes(code)) {
    const textareaContent = document.querySelector('.textarea');
    if (keyCodes[code].cssClass.length === 1
    || keyCodes[code].cssClass.length === 3) {
      if (upperKey) {
        textareaContent.textContent += keyCodes[code][lang].keyUpper;
      } else {
        textareaContent.textContent += keyCodes[code][lang].key;
      }
      keepFocusContent(textareaContent);
    }
    if (code === 'Backspace') {
      textareaContent.textContent = textareaContent.textContent
        .slice(0, textareaContent.textContent.length - 1);
      keepFocusContent(textareaContent);
    }
    if (code === 'Tab') {
      textareaContent.textContent += '\t';
      keepFocusContent(textareaContent);
    }
    if (code === 'Enter') {
      textareaContent.textContent += '\n';
      keepFocusContent(textareaContent);
    }
    if (code === 'Backslash') {
      if (upperKey) {
        textareaContent.textContent += keyCodes[code][lang].keyUpper;
      } else {
        textareaContent.textContent += keyCodes[code][lang].key;
      }
      keepFocusContent(textareaContent);
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
    if (event.shiftKey
      || document.getElementById('CapsLock').classList.contains('key_activ')) {
      enterChar(event.code, lang, true);
    } else {
      enterChar(event.code, lang);
    }
    event.preventDefault();
  });

  document.addEventListener('keyup', (event) => {
    lightKeyOff(event.code);
  });

  const keyboardHundler = document.querySelector('.keyboard');
  keyboardHundler.addEventListener('mousedown', (event) => {
    lightKeyOn(event.target.id);
    if (event.shiftKey
      || document.getElementById('CapsLock').classList.contains('key_activ')) {
      enterChar(event.target.id, lang, true);
    } else {
      enterChar(event.target.id, lang);
    }
    event.preventDefault();
  });

  keyboardHundler.addEventListener('mouseup', (event) => {
    lightKeyOff(event.target.id);
  });
};
