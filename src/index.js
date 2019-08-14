import _ from 'lodash'
function component(){
  const element = document.createElement('div');
  const array = ['hello','webpack','8888888888888']
  element.innerHTML = _.join(array,' ')
  return element;
}
document.body.appendChild(component());
