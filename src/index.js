import _ from 'lodash'
import * as utilities from './utilities.js'
import Lion from './utilities'
import './style.css'

console.log(style.toString());
console.log(Lion.say());

function component(){
  const element = document.createElement('div');
  const array = ['hello','webpack','8888888888888']
  element.innerHTML = _.join(array,' ')
  return element;
}
document.body.appendChild(component());
document.body.classList.add('haikei')
