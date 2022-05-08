export default class Button {
  constructor(name, ru, en) {
    this.en = en;
    this.name = name;
    this.ru = ru;
  }

  generateButton() {
    const button = document.createElement('button');
    button.className = 'key key-k';
    button.setAttribute('data', `${this.name}`);

    if (localStorage.getItem('lang') === 'ru') {
      button.innerHTML = `${this.ru}`;
    } else {
      button.innerHTML = `${this.en}`;
    }

    return button;
  }
}