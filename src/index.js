import './style.css'
import Button from './Button'
import { BTN_DATA } from './btn'
import ControlButton from './ControlButton'

// отрисовка блоков страницы
const renderBlock = (element, name, content) => {
  const node = document.createElement(`${element}`)
  node.className = name
  node.textContent = content
  return node
}

const body = document.querySelector('body')
const wrap = renderBlock('div', 'wrap')
const header = renderBlock('h1', 'h1', 'Виртуальная клавиатура')
const textarea = renderBlock('textarea', 'textarea')
const keyboardWrap = renderBlock('div', 'keyboard_wrap')
const keyboard = renderBlock('div', 'keyboard')
const note = renderBlock('div', 'notes')
const note1 = renderBlock('p', 'note-text', 'Клавиатура создана в операционной системе Windows')
const note2 = renderBlock('p', 'note-text', 'Комбинация для переключения языка: левыe ctrl + alt')


window.addEventListener('DOMContentLoaded', () => {
  textarea.focus();
})

body.append(wrap)
wrap.append(header)
wrap.append(textarea)
wrap.append(keyboardWrap)
keyboardWrap.append(keyboard)
wrap.append(note)
note.append(note1)
note.append(note2)



// отрисовка клавиатуры

const controls = ['Backspace', 'Tab', 'Delete', 'CapsLock', 'Enter', 'ShiftLeft', 'ShiftRight', 'ControlLeft',  'Win', 'AltLeft', 'Space', 'AltRight', 'ArrowUp', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight']

const renderButtons = (arr, container) => {
  arr.forEach((button) => {
    let element
    if (controls.includes(button.name)) {
      element = new ControlButton(button.name, button.ru)
      container.append(element.generateControlButton())
    } else {
      element = new Button(button.name, button.ru, button.en)
      container.append(element.generateButton())
    }
      
    return container
  })
}

renderButtons(BTN_DATA, keyboard)

// const LETTER_KEYS = document.querySelectorAll('.key-k')
// let flag = 'en'

// const printButtons = (button, input) => {
//   input.focus()

//   input.value += button.innerHTML
  
//   return input.value
// }



const arrKeyboard = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Enter', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Backslash', 'IntlBackslash', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'Space']

// document.onkeypress = function (event) {
//   arrKeyboard.push(event.code)
// }



