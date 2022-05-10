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

// Клик по кнопке

const printButtons = (key, textarea) => {
  textarea.focus()
  if (key.getAttribute('data') === 'Backspace') {
    textarea.setRangeText('', textarea.selectionStart - 1, textarea.selectionEnd)
  } else if (key.getAttribute('data') === 'Delete') {
    textarea.setRangeText('', textarea.selectionStart, textarea.selectionEnd + 1)
  } else if (key.getAttribute('data') === 'Enter') {
    textarea.value += '\n'
  } else if (key.getAttribute('data') === 'Tab') {
    textarea.value += '\t'
  } else if (key.getAttribute('data') === 'Space') {
    textarea.value += ' '
  } else if (key.getAttribute('data') === 'CapsLock') {
    return textarea.value;
  } else {
    textarea.value += key.innerHTML
  }
  
  return textarea.value
}

document.addEventListener('keydown', (el) => {
  el.preventDefault()
  const keys = document.querySelectorAll('.key')
  for (let key of keys) {
    console.log('клавиша нажата ', el.key)
    if (el.code === key.getAttribute('data')) {
      printButtons(key, textarea)
      key.classList.add('active')
    }
  }
})

document.addEventListener('keyup', (el) => {
  el.preventDefault()
  const keys = document.querySelectorAll('.key')
  for (const key of keys) {
    if (el.code === key.getAttribute('data')) {
        key.classList.remove('active')
    }
  }
})

keyboard.addEventListener('mousedown', (el) => {
  const keys = document.querySelectorAll('.key')
  for (const key of keys) {
    if (el.target.getAttribute('data') === key.getAttribute('data')) {
      key.classList.add('active')
      printButtons(key, textarea)
    }
  }
});

keyboard.addEventListener('mouseup', (el) => {
  const keys = document.querySelectorAll('.key')
  for (const key of keys) {
    if (el.target.getAttribute('data') === key.getAttribute('data')) {
      key.classList.remove('active')
    }
  }
});