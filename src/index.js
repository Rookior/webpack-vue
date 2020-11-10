
// import _ from 'loadsh';
// import printMe from './print.js';
// import './styles.css';
// import './styles.scss';
// import './styles.less';

// function component () {
//   var element = document.createElement('div');
//   var btn = document.createElement('button');

//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//   btn.innerHTML = 'Click me and check the console!';
//   btn.onclick = printMe;
//   element.appendChild(btn);
//   return element;
// }

// let element = component(); // 当 print.js 改变导致页面重新渲染时，重新获取渲染的元素
// document.body.appendChild(element);

// if (module.hot) {
//   module.hot.accept('./print.js', function () {
//     console.log('Accepting the updated printMe module!');
//     document.body.removeChild(element);
//     element = component(); // 重新渲染页面后，component 更新 click 事件处理
//     document.body.appendChild(element);
//   })
// }

import Vue from 'vue'
import App from './App.vue'

//没有根节点app在默认html时采用这种挂载节点和方法
// const root=document.createElement("div")
// document.body.appendChild(root)
// new Vue({
//     render:(h)=>h(App)
// }).$mount(root)


// 有根节点在html时

// new Vue({
//   render: h => h(App)
// }).$mount("#app");

//或者

new Vue({
  el:'#app',
  render: h => h(App)
})











