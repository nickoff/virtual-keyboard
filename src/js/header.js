const cssClasses = {
  WRAPPER: 'wrapper',
  TITLE: 'title',
};

function createHeader(content) {
  const component = document.createElement('header');
  component.classList.add(cssClasses.WRAPPER);

  const title = document.createElement('h1');
  title.classList.add(cssClasses.TITLE);
  title.innerHTML = content;

  component.append(title);

  return component;
}

export default createHeader;
