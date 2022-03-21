// Ctrols the flow of the app
import Vue from "vue";
import App from "./App.vue";
// import Ninjas from './Ninjas.vue'

/* We can use these import statements = ES6 features
bc we have webpack setup which is using babel js
to transpile es6 code into vanilla js which is understable
by a browser*/

// To register a component globally
// Vue.component('ninjas', Ninjas)
// The name of the component and the object that we need

// We create a new Vue instance
/* The method render here takes the root component(app)
and renders in the #app
 */
new Vue({
  el: "#app",
  render: h => h(App)
});
