import Button from './Button'

export default class ControlButton extends Button {
  generateControlButton() {
    const button = document.createElement('button')
    button.className = 'key key-control'
    button.innerHTML = `${this.ru}`
    button.setAttribute('data', `${this.name}`)

    if (this.name === 'Backspace' || this.name === 'CapsLock' || this.name === 'Enter' || this.name === 'ShiftLeft' || this.name === 'ShiftRight' || this.code === 'Enter') {
      button.classList.add('key-wide')
    } else if (this.name === 'Tab' || this.name === 'Delete' || this.name === 'ControlLeft' || this.name === 'ControlRight' || this.name === 'Win') {
      button.classList.add('key-wide2')
    } else if (this.name === 'Space') {
      button.classList.add('space')
    }

    return button;
  }
}