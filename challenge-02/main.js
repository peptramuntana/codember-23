import './style.css'
import { compiler, validateInput } from './functions'

document.querySelector('#app').innerHTML = `
<div>
<h1>Compiler</h1>
<ul>
  <li>"#" Increments the numeric value by 1.</li>
  <li>"@" Decrements the numeric value by 1.</li>
  <li>"*" Multiplies the numeric value by itself.</li>
  <li>"&" Prints the current numeric value.</li>
</ul>
<div class="compiler">
  <label for="input">Input</label>
  <input id="input" type="text">
  <div class="validation-message spanned"></div>
  <label>Output</label>
  <p class="output"></p>
  <button class="spanned">Compile</button>
</div>
</div>
`
compiler()
validateInput()
