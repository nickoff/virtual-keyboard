const keyCodes = {
  backquote: {
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
    class: ['key'],
  },
  digit1: {
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
    class: ['key'],
  },
  digit2: {
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
    class: ['key'],
    visibleKeyUpper: true,
  },
  digit3: {
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
    class: ['key'],
  },
  digit4: {
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
    class: ['key'],
    visibleKeyUpper: true,
  },
  digit5: {
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
    class: ['key'],
  },
  digit6: {
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
    class: ['key'],
  },
  digit7: {
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
    class: ['key'],
  },
  digit8: {
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
    class: ['key'],
  },
  digit9: {
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
    class: ['key'],
  },
  digit0: {
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
    class: ['key'],
  },
  minus: {
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
    class: ['key'],
  },
  equal: {
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
    class: ['key'],
  },
  вackspace: {
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
    class: ['key', 'key_control'],
  },
  tab: {
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
    class: ['key', 'key_control'],
  },
  keyQ: {
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
    class: ['key'],
  },
  keyW: {
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
    class: ['key'],
  },
  keyE: {
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
    class: ['key'],
  },
  keyR: {
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
    class: ['key'],
  },
  keyT: {
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
    class: ['key'],
  },
  keyY: {
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
    class: ['key'],
  },
  keyU: {
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
    class: ['key'],
  },
  keyI: {
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
    class: ['key'],
  },
  keyO: {
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
    class: ['key'],
  },
  keyP: {
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
    class: ['key'],
  },
  bracketLeft: {
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
    class: ['key'],
  },
  bracketRight: {
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
    class: ['key'],
  },
  backslash: {
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
    class: ['key', 'key_control'],
  },
  capsLock: {
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
    class: ['key', 'key_control'],
  },
  keyA: {
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
    class: ['key'],
  },
  keyS: {
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
    class: ['key'],
  },
  keyD: {
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
    class: ['key'],
  },
  keyF: {
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
    class: ['key'],
  },
  keyG: {
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
    class: ['key'],
  },
  keyH: {
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
    class: ['key'],
  },
  keyJ: {
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
    class: ['key'],
  },
  keyK: {
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
    class: ['key'],
  },
  keyL: {
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
    class: ['key'],
  },
  semicolon: {
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
    class: ['key'],
  },
  quote: {
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
    class: ['key'],
  },
  enter: {
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
    class: ['key', 'key_control'],
  },
  shiftLeft: {
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
    class: ['key', 'key_control'],
  },
  keyZ: {
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
    class: ['key'],
  },
  keyX: {
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
    class: ['key'],
  },
  keyC: {
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
    class: ['key'],
  },
  keyV: {
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
    class: ['key'],
  },
  keyB: {
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
    class: ['key'],
  },
  keyN: {
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
    class: ['key'],
  },
  keyM: {
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
    class: ['key'],
  },
  comma: {
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
    class: ['key'],
  },
  period: {
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
    class: ['key'],
  },
  slash: {
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
    class: ['key'],
  },
  arrowUp: {
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
    class: ['key', 'key_control', 'key_arrow'],
  },
  shiftRight: {
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
    class: ['key', 'key_control'],
  },
  controlLeft: {
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
    class: ['key', 'key_control'],
  },
  metaLeft: {
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
    class: ['key', 'key_control'],
  },
  altLeft: {
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
    class: ['key', 'key_control'],
  },
  space: {
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
    class: ['key', 'key_control'],
  },
  altRight: {
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
    class: ['key', 'key_control'],
  },
  arrowLeft: {
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
    class: ['key', 'key_control', 'key_arrow'],
  },
  arrowDown: {
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
    class: ['key', 'key_control', 'key_arrow'],
  },
  arrowRight: {
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
    class: ['key', 'key_control', 'key_arrow'],
  },
  controlRight: {
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
    class: ['key', 'key_control'],
  },
};

export default keyCodes;
