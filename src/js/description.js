const cssClasses = {
  DESCRIPTION: 'description',
};

function createDescription(content) {
  const component = document.createElement('section');
  const description = document.createElement('p');
  description.classList.add(cssClasses.DESCRIPTION);
  description.innerHTML = content;
  component.append(description);
  return component;
}

export default createDescription;
