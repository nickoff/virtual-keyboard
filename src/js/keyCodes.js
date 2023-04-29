const keyCodes = {
  Backquote: {
    en: {
      key: '`',
      keyUpper: '~',
      visibleKeyUpper: true,
    },
    ru: {
      key: 'ё',
      keyUpper: 'Ё',
      visibleKeyUpper: false,
    },
    code: 'Backquote',
    location: 0,
    cssClass: ['key'],
  },
  Digit1: {
    en: {
      key: '1',
      keyUpper: '!',
      visibleKeyUpper: true,
    },
    ru: {
      key: '1',
      keyUpper: '!',
      visibleKeyUpper: true,
    },
    code: 'Digit1',
    location: 0,
    cssClass: ['key'],
  },
  Digit2: {
    en: {
      key: '2',
      keyUpper: '@',
      visibleKeyUpper: true,
    },
    ru: {
      key: '2',
      keyUpper: '"',
      visibleKeyUpper: true,
    },
    code: 'Digit2',
    location: 0,
    cssClass: ['key'],
    visibleKeyUpper: true,
  },
  Digit3: {
    en: {
      key: '3',
      keyUpper: '#',
      visibleKeyUpper: true,
    },
    ru: {
      key: '3',
      keyUpper: '№',
      visibleKeyUpper: true,
    },
    code: 'Digit3',
    location: 0,
    cssClass: ['key'],
  },
  Digit4: {
    en: {
      key: '4',
      keyUpper: '$',
      visibleKeyUpper: true,
    },
    ru: {
      key: '4',
      keyUpper: ';',
      visibleKeyUpper: true,
    },
    code: 'Digit4',
    location: 0,
    cssClass: ['key'],
    visibleKeyUpper: true,
  },
  Digit5: {
    en: {
      key: '5',
      keyUpper: '%',
      visibleKeyUpper: true,
    },
    ru: {
      key: '5',
      keyUpper: '%',
      visibleKeyUpper: true,
    },
    code: 'Digit5',
    location: 0,
    cssClass: ['key'],
  },
  Digit6: {
    en: {
      key: '6',
      keyUpper: '^',
      visibleKeyUpper: true,
    },
    ru: {
      key: '6',
      keyUpper: ':',
      visibleKeyUpper: true,
    },
    code: 'Digit6',
    location: 0,
    cssClass: ['key'],
  },
  Digit7: {
    en: {
      key: '7',
      keyUpper: '&',
      visibleKeyUpper: true,
    },
    ru: {
      key: '7',
      keyUpper: '?',
      visibleKeyUpper: true,
    },
    code: 'Digit7',
    location: 0,
    cssClass: ['key'],
  },
  Digit8: {
    en: {
      key: '8',
      keyUpper: '*',
      visibleKeyUpper: true,
    },
    ru: {
      key: '8',
      keyUpper: '*',
      visibleKeyUpper: true,
    },
    code: 'Digit8',
    location: 0,
    cssClass: ['key'],
  },
  Digit9: {
    en: {
      key: '9',
      keyUpper: '(',
      visibleKeyUpper: true,
    },
    ru: {
      key: '9',
      keyUpper: '(',
      visibleKeyUpper: true,
    },
    code: 'Digit9',
    location: 0,
    cssClass: ['key'],
  },
  Digit0: {
    en: {
      key: '0',
      keyUpper: ')',
      visibleKeyUpper: true,
    },
    ru: {
      key: '0',
      keyUpper: ')',
      visibleKeyUpper: true,
    },
    code: 'Digit0',
    location: 0,
    cssClass: ['key'],
  },
  Minus: {
    en: {
      key: '-',
      keyUpper: '_',
      visibleKeyUpper: true,
    },
    ru: {
      key: '-',
      keyUpper: '_',
      visibleKeyUpper: true,
    },
    code: 'Minus',
    location: 0,
    cssClass: ['key'],
  },
  Equal: {
    en: {
      key: '=',
      keyUpper: '+',
      visibleKeyUpper: true,
    },
    ru: {
      key: '=',
      keyUpper: '+',
      visibleKeyUpper: true,
    },
    code: 'Equal',
    location: 0,
    cssClass: ['key'],
  },
  Backspace: {
    en: {
      key: 'Backspace',
      keyUpper: '',
      visibleKeyUpper: false,
    },
    ru: {
      key: 'Backspace',
      keyUpper: '',
      visibleKeyUpper: false,
    },
    code: 'Backspace',
    location: 0,
    cssClass: ['key', 'key_control'],
  },
  Tab: {
    en: {
      key: 'Tab',
      keyUpper: '',
      visibleKeyUpper: false,
    },
    ru: {
      key: 'Tab',
      keyUpper: '',
      visibleKeyUpper: false,
    },
    code: 'Tab',
    location: 0,
    cssClass: ['key', 'key_control'],
  },
  KeyQ: {
    en: {
      key: 'q',
      keyUpper: 'Q',
      visibleKeyUpper: false,
    },
    ru: {
      key: 'й',
      keyUpper: 'Й',
      visibleKeyUpper: false,
    },
    code: 'KeyQ',
    location: 0,
    cssClass: ['key'],
  },
  KeyW: {
    en: {
      key: 'w',
      keyUpper: 'W',
      visibleKeyUpper: false,
    },
    ru: {
      key: 'ц',
      keyUpper: 'Ц',
      visibleKeyUpper: false,
    },
    code: 'KeyW',
    location: 0,
    cssClass: ['key'],
  },
  KeyE: {
    en: {
      key: 'e',
      keyUpper: 'E',
      visibleKeyUpper: false,
    },
    ru: {
      key: 'у',
      keyUpper: 'У',
      visibleKeyUpper: false,
    },
    code: 'KeyE',
    location: 0,
    cssClass: ['key'],
  },
  KeyR: {
    en: {
      key: 'r',
      keyUpper: 'R',
      visibleKeyUpper: false,
    },
    ru: {
      key: 'к',
      keyUpper: 'К',
      visibleKeyUpper: false,
    },
    code: 'KeyR',
    location: 0,
    cssClass: ['key'],
  },
  KeyT: {
    en: {
      key: 't',
      keyUpper: 'T',
      visibleKeyUpper: false,
    },
    ru: {
      key: 'е',
      keyUpper: 'Е',
      visibleKeyUpper: false,
    },
    code: 'KeyT',
    location: 0,
    cssClass: ['key'],
  },
  KeyY: {
    en: {
      key: 'y',
      keyUpper: 'Y',
      visibleKeyUpper: false,
    },
    ru: {
      key: 'н',
      keyUpper: 'Н',
      visibleKeyUpper: false,
    },
    code: 'KeyY',
    location: 0,
    cssClass: ['key'],
  },
  KeyU: {
    en: {
      key: 'u',
      keyUpper: 'U',
      visibleKeyUpper: false,
    },
    ru: {
      key: 'г',
      keyUpper: 'Г',
      visibleKeyUpper: false,
    },
    code: 'KeyU',
    location: 0,
    cssClass: ['key'],
  },
  KeyI: {
    en: {
      key: 'i',
      keyUpper: 'I',
      visibleKeyUpper: false,
    },
    ru: {
      key: 'ш',
      keyUpper: 'Ш',
      visibleKeyUpper: false,
    },
    code: 'KeyI',
    location: 0,
    cssClass: ['key'],
  },
  KeyO: {
    en: {
      key: 'o',
      keyUpper: 'O',
      visibleKeyUpper: false,
    },
    ru: {
      key: 'щ',
      keyUpper: 'Щ',
      visibleKeyUpper: false,
    },
    code: 'KeyO',
    location: 0,
    cssClass: ['key'],
  },
  KeyP: {
    en: {
      key: 'p',
      keyUpper: 'P',
      visibleKeyUpper: false,
    },
    ru: {
      key: 'з',
      keyUpper: 'З',
      visibleKeyUpper: false,
    },
    code: 'KeyP',
    location: 0,
    cssClass: ['key'],
  },
  BracketLeft: {
    en: {
      key: '[',
      keyUpper: '{',
      visibleKeyUpper: true,
    },
    ru: {
      key: 'х',
      keyUpper: 'Х',
      visibleKeyUpper: false,
    },
    code: 'BracketLeft',
    location: 0,
    cssClass: ['key'],
  },
  BracketRight: {
    en: {
      key: ']',
      keyUpper: '}',
      visibleKeyUpper: true,
    },
    ru: {
      key: 'ъ',
      keyUpper: 'Ъ',
      visibleKeyUpper: false,
    },
    code: 'BracketRight',
    location: 0,
    cssClass: ['key'],
  },
  Backslash: {
    en: {
      key: '\\',
      keyUpper: '|',
      visibleKeyUpper: true,
    },
    ru: {
      key: '\\',
      keyUpper: '/',
      visibleKeyUpper: true,
    },
    code: 'Backslash',
    location: 0,
    cssClass: ['key', 'key_control'],
  },
  CapsLock: {
    en: {
      key: 'Caps Lock',
      keyUpper: '',
      visibleKeyUpper: false,
    },
    ru: {
      key: 'Caps Lock',
      keyUpper: '',
      visibleKeyUpper: false,
    },
    code: 'CapsLock',
    location: 0,
    cssClass: ['key', 'key_control'],
  },
  KeyA: {
    en: {
      key: 'a',
      keyUpper: 'A',
      visibleKeyUpper: false,
    },
    ru: {
      key: 'ф',
      keyUpper: 'Ф',
      visibleKeyUpper: false,
    },
    code: 'KeyA',
    location: 0,
    cssClass: ['key'],
  },
  KeyS: {
    en: {
      key: 's',
      keyUpper: 'S',
      visibleKeyUpper: false,
    },
    ru: {
      key: 'ы',
      keyUpper: 'Ы',
      visibleKeyUpper: false,
    },
    code: 'KeyS',
    location: 0,
    cssClass: ['key'],
  },
  KeyD: {
    en: {
      key: 'd',
      keyUpper: 'D',
      visibleKeyUpper: false,
    },
    ru: {
      key: 'в',
      keyUpper: 'В',
      visibleKeyUpper: false,
    },
    code: 'KeyD',
    location: 0,
    cssClass: ['key'],
  },
  KeyF: {
    en: {
      key: 'f',
      keyUpper: 'F',
      visibleKeyUpper: false,
    },
    ru: {
      key: 'а',
      keyUpper: 'В',
      visibleKeyUpper: false,
    },
    code: 'KeyF',
    location: 0,
    cssClass: ['key'],
  },
  KeyG: {
    en: {
      key: 'g',
      keyUpper: 'G',
      visibleKeyUpper: false,
    },
    ru: {
      key: 'п',
      keyUpper: 'П',
      visibleKeyUpper: false,
    },
    code: 'KeyG',
    location: 0,
    cssClass: ['key'],
  },
  KeyH: {
    en: {
      key: 'h',
      keyUpper: 'H',
      visibleKeyUpper: false,
    },
    ru: {
      key: 'р',
      keyUpper: 'Р',
      visibleKeyUpper: false,
    },
    code: 'KeyH',
    location: 0,
    cssClass: ['key'],
  },
  KeyJ: {
    en: {
      key: 'j',
      keyUpper: 'J',
      visibleKeyUpper: false,
    },
    ru: {
      key: 'о',
      keyUpper: 'О',
      visibleKeyUpper: false,
    },
    code: 'KeyJ',
    location: 0,
    cssClass: ['key'],
  },
  KeyK: {
    en: {
      key: 'k',
      keyUpper: 'K',
      visibleKeyUpper: false,
    },
    ru: {
      key: 'л',
      keyUpper: 'Л',
      visibleKeyUpper: false,
    },
    code: 'KeyK',
    location: 0,
    cssClass: ['key'],
  },
  KeyL: {
    en: {
      key: 'l',
      keyUpper: 'L',
      visibleKeyUpper: false,
    },
    ru: {
      key: 'д',
      keyUpper: 'Д',
      visibleKeyUpper: false,
    },
    code: 'KeyL',
    location: 0,
    cssClass: ['key'],
  },
  Semicolon: {
    en: {
      key: ';',
      keyUpper: ':',
      visibleKeyUpper: true,
    },
    ru: {
      key: 'ж',
      keyUpper: 'Ж',
      visibleKeyUpper: false,
    },
    code: 'Semicolon',
    location: 0,
    cssClass: ['key'],
  },
  Quote: {
    en: {
      key: '\'',
      keyUpper: '"',
      visibleKeyUpper: true,
    },
    ru: {
      key: 'э',
      keyUpper: 'Э',
      visibleKeyUpper: false,
    },
    code: 'Quote',
    location: 0,
    cssClass: ['key'],
  },
  Enter: {
    en: {
      key: 'Enter',
      keyUpper: '',
      visibleKeyUpper: false,
    },
    ru: {
      key: 'Enter',
      keyUpper: '',
      visibleKeyUpper: false,
    },
    code: 'Enter',
    location: 0,
    cssClass: ['key', 'key_control'],
  },
  ShiftLeft: {
    en: {
      key: 'Shift',
      keyUpper: '',
      visibleKeyUpper: false,
    },
    ru: {
      key: 'Shift',
      keyUpper: '',
      visibleKeyUpper: false,
    },
    code: 'ShiftLeft',
    location: 1,
    cssClass: ['key', 'key_control'],
  },
  KeyZ: {
    en: {
      key: 'z',
      keyUpper: 'Z',
      visibleKeyUpper: false,
    },
    ru: {
      key: 'я',
      keyUpper: 'Я',
      visibleKeyUpper: false,
    },
    code: 'KeyZ',
    location: 0,
    cssClass: ['key'],
  },
  KeyX: {
    en: {
      key: 'x',
      keyUpper: 'X',
      visibleKeyUpper: false,
    },
    ru: {
      key: 'ч',
      keyUpper: 'Ч',
      visibleKeyUpper: false,
    },
    code: 'KeyX',
    location: 0,
    cssClass: ['key'],
  },
  KeyC: {
    en: {
      key: 'c',
      keyUpper: 'C',
      visibleKeyUpper: false,
    },
    ru: {
      key: 'с',
      keyUpper: 'С',
      visibleKeyUpper: false,
    },
    code: 'KeyC',
    location: 0,
    cssClass: ['key'],
  },
  KeyV: {
    en: {
      key: 'v',
      keyUpper: 'V',
      visibleKeyUpper: false,
    },
    ru: {
      key: 'м',
      keyUpper: 'М',
      visibleKeyUpper: false,
    },
    code: 'KeyV',
    location: 0,
    cssClass: ['key'],
  },
  KeyB: {
    en: {
      key: 'b',
      keyUpper: 'B',
      visibleKeyUpper: false,
    },
    ru: {
      key: 'и',
      keyUpper: 'И',
      visibleKeyUpper: false,
    },
    code: 'KeyB',
    location: 0,
    cssClass: ['key'],
  },
  KeyN: {
    en: {
      key: 'n',
      keyUpper: 'N',
      visibleKeyUpper: false,
    },
    ru: {
      key: 'т',
      keyUpper: 'Т',
      visibleKeyUpper: false,
    },
    code: 'KeyN',
    location: 0,
    cssClass: ['key'],
  },
  KeyM: {
    en: {
      key: 'm',
      keyUpper: 'M',
      visibleKeyUpper: false,
    },
    ru: {
      key: 'ь',
      keyUpper: 'Ь',
      visibleKeyUpper: false,
    },
    code: 'KeyM',
    location: 0,
    cssClass: ['key'],
  },
  Comma: {
    en: {
      key: ',',
      keyUpper: '<',
      visibleKeyUpper: true,
    },
    ru: {
      key: 'б',
      keyUpper: 'Б',
      visibleKeyUpper: false,
    },
    code: 'Comma',
    location: 0,
    cssClass: ['key'],
  },
  Period: {
    en: {
      key: '.',
      keyUpper: '>',
      visibleKeyUpper: true,
    },
    ru: {
      key: 'ю',
      keyUpper: 'Ю',
      visibleKeyUpper: false,
    },
    code: 'Period',
    location: 0,
    cssClass: ['key'],
  },
  Slash: {
    en: {
      key: '/',
      keyUpper: '?',
      visibleKeyUpper: true,
    },
    ru: {
      key: '.',
      keyUpper: ',',
      visibleKeyUpper: true,
    },
    code: 'Slash',
    location: 0,
    cssClass: ['key'],
  },
  ArrowUp: {
    en: {
      key: '↑',
      keyUpper: '↑',
      visibleKeyUpper: false,
    },
    ru: {
      key: '↑',
      keyUpper: '↑',
      visibleKeyUpper: false,
    },
    code: 'ArrowUp',
    location: 0,
    cssClass: ['key', 'key_control', 'key_arrow'],
  },
  ShiftRight: {
    en: {
      key: 'Shift',
      keyUpper: '',
      visibleKeyUpper: false,
    },
    ru: {
      key: 'Shift',
      keyUpper: '',
      visibleKeyUpper: false,
    },
    code: 'ShiftRight',
    location: 2,
    cssClass: ['key', 'key_control'],
  },
  ControlLeft: {
    en: {
      key: 'Ctrl',
      keyUpper: '',
      visibleKeyUpper: false,
    },
    ru: {
      key: 'Ctrl',
      keyUpper: '',
      visibleKeyUpper: false,
    },
    code: 'ControlLeft',
    location: 1,
    cssClass: ['key', 'key_control'],
  },
  MetaLeft: {
    en: {
      key: 'Win',
      keyUpper: '',
      visibleKeyUpper: false,
    },
    ru: {
      key: 'Win',
      keyUpper: '',
      visibleKeyUpper: false,
    },
    code: 'MetaLeft',
    location: 1,
    cssClass: ['key', 'key_control'],
  },
  AltLeft: {
    en: {
      key: 'Alt',
      keyUpper: '',
      visibleKeyUpper: false,
    },
    ru: {
      key: 'Alt',
      keyUpper: '',
      visibleKeyUpper: false,
    },
    code: 'AltLeft',
    location: 1,
    cssClass: ['key', 'key_control'],
  },
  Space: {
    en: {
      key: '',
      keyUpper: '',
      visibleKeyUpper: false,
    },
    ru: {
      key: '',
      keyUpper: '',
      visibleKeyUpper: false,
    },
    code: 'Space',
    location: 0,
    cssClass: ['key', 'key_control', 'key_space'],
  },
  AltRight: {
    en: {
      key: 'Alt',
      keyUpper: '',
      visibleKeyUpper: false,
    },
    ru: {
      key: 'Alt',
      keyUpper: '',
      visibleKeyUpper: false,
    },
    code: 'AltRight',
    location: 2,
    cssClass: ['key', 'key_control'],
  },
  ArrowLeft: {
    en: {
      key: '←',
      keyUpper: '←',
      visibleKeyUpper: false,
    },
    ru: {
      key: '←',
      keyUpper: '←',
      visibleKeyUpper: false,
    },
    code: 'ArrowLeft',
    location: 0,
    cssClass: ['key', 'key_control', 'key_arrow'],
  },
  ArrowDown: {
    en: {
      key: '↓',
      keyUpper: '↓',
      visibleKeyUpper: false,
    },
    ru: {
      key: '↓',
      keyUpper: '↓',
      visibleKeyUpper: false,
    },
    code: 'ArrowDown',
    location: 0,
    cssClass: ['key', 'key_control', 'key_arrow'],
  },
  ArrowRight: {
    en: {
      key: '→',
      keyUpper: '→',
      visibleKeyUpper: false,
    },
    ru: {
      key: '→',
      keyUpper: '→',
      visibleKeyUpper: false,
    },
    code: 'ArrowRight',
    location: 0,
    cssClass: ['key', 'key_control', 'key_arrow'],
  },
  ControlRight: {
    en: {
      key: 'Ctrl',
      keyUpper: '',
      visibleKeyUpper: false,
    },
    ru: {
      key: 'Ctrl',
      keyUpper: '',
      visibleKeyUpper: false,
    },
    code: 'ControlRight',
    location: 2,
    cssClass: ['key', 'key_control'],
  },
};

export default keyCodes;
