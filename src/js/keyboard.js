const cssClasses = {
  KEYBOARD: 'keyboard',
  KEYBOARD_ROW: 'keyboard__row',
};

function createKeyboard(keyCodes) {
  const component = document.createElement('section');
  component.classList.add(cssClasses.KEYBOARD);

  const keyboardRow = document.createElement('ul');
  keyboardRow.classList.add(cssClasses.KEYBOARD_ROW);

  return component;
}

export default createKeyboard;
