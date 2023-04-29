class Key {
  constructor({
    en, ru, code, cssClass,
  }, lang = 'en') {
    this.enKey = en.key;
    this.enKeyUpper = en.keyUpper;
    this.enUpperVisible = en.visibleKeyUpper;
    this.ruKey = ru.key;
    this.ruKeyUpper = ru.keyUpper;
    this.ruUpperVisible = ru.visibleKeyUpper;
    this.code = code;
    this.cssClass = cssClass;
    this.lang = lang;
  }

  generateKey() {
    const key = document.createElement('li');
    key.id = this.code;
    key.className = this.cssClass.join(' ');
    if (this.lang === 'en') {
      if (this.enUpperVisible) {
        const keyUpper = document.createElement('span');
        keyUpper.className = 'key__upper';
        keyUpper.innerHTML = this.enKeyUpper;
        key.append(keyUpper);
      }
      const template = this.enKey;
      key.append(template);
    } else {
      if (this.ruUpperVisible) {
        const keyUpper = document.createElement('span');
        keyUpper.className = 'key__upper';
        keyUpper.innerHTML = this.ruKeyUpper;
        key.append(keyUpper);
      }

      const template = this.ruKey;
      key.append(template);
    }
    return key;
  }
}

export default Key;
