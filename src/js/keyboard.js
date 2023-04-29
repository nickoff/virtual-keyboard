import Key from './key.js';

const cssClasses = {
  KEYBOARD: 'keyboard',
  KEYBOARD_ROW: 'keyboard__row',
};

const generateKeys = (keyCodes, lang, arrKeyCodesForGenerate) => {
  const cards = [];
  arrKeyCodesForGenerate.forEach((element) => {
    cards.push(new Key(keyCodes[element], lang));
  });
  return cards;
};

const generateKeysRow = (keyCodes, lang, rowKeyscodes) => {
  const keyboardRow = document.createElement('ul');
  keyboardRow.classList.add(cssClasses.KEYBOARD_ROW);
  generateKeys(keyCodes, lang, rowKeyscodes).forEach((key) => {
    keyboardRow.append(key.generateKey());
  });
  return keyboardRow;
};

function createKeyboard(keyCodes, lang) {
  const rowKeyscodes = Object.keys(keyCodes);
  const component = document.createElement('section');
  component.classList.add(cssClasses.KEYBOARD);
  const keyRow1 = generateKeysRow(keyCodes, lang, rowKeyscodes.slice(0, 14));
  const keyRow2 = generateKeysRow(keyCodes, lang, rowKeyscodes.slice(14, 28));
  const keyRow3 = generateKeysRow(keyCodes, lang, rowKeyscodes.slice(28, 41));
  const keyRow4 = generateKeysRow(keyCodes, lang, rowKeyscodes.slice(41, 54));
  const keyRow5 = generateKeysRow(keyCodes, lang, rowKeyscodes.slice(54, 63));
  component.append(keyRow1);
  component.append(keyRow2);
  component.append(keyRow3);
  component.append(keyRow4);
  component.append(keyRow5);
  return component;
}

export default createKeyboard;
