import createTextarea from './textarea.js';
import createKeyboard from './keyboard.js';
import createDescription from './description.js';

const cssClasses = {
  WRAPPER: 'wrapper',
};

function createMain(content, keyCodes) {
  const component = document.createElement('main');
  component.classList.add(cssClasses.WRAPPER);

  const textarea = createTextarea();
  const keyboard = createKeyboard(keyCodes);
  const description = createDescription(content);

  component.append(textarea);
  component.append(keyboard);
  component.append(description);

  return component;
}

export default createMain;
