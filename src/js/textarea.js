const cssClasses = {
  TEXTAREA: 'textarea',
};

const id = 'textarea';
const rows = 6;
const autofocus = true;

function createTextarea() {
  const component = document.createElement('section');
  const textarea = document.createElement('textarea');
  textarea.classList.add(cssClasses.TEXTAREA);
  textarea.id = id;
  textarea.rows = rows;
  textarea.autofocus = autofocus;
  component.append(textarea);
  return component;
}

export default createTextarea;
