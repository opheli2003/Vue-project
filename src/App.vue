<template>
  <!-- This file is the root component -->
  <!-- no several div in a template -->
  <!-- <div> -->
  <!-- <h1>{{title}}</h1> -->
  <!-- <p>{{greeting()}}</p> -->

  <!-- We nest our Ninjas component, that's how 
    we called in in our main.js -->
  <!-- <ninjas></ninjas> -->
  <div>
    <app-header></app-header>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
  // import Ninjas from './Ninjas.vue'
  import Footer from './components/Footer.vue'



// We export an object
// data is a function

//we register our components here
export default {
  components: {
        "app-header": Header,
        "app-footer": Footer
        },

  // To nest a component locally
  // =>only in one file
  // an object with as key the name of the component and as value the import
  // components:{
  //   'ninjas':Ninjas
  // },


  data() {
    return {


      }
      // title:'Ninja App'

    }
  }
  // methods:{
  //   greeting:function(){
  //     return'hey'
  //   }

  // }
</script>

<style>
/* controls the style of this component */
/* h1{
  color: purple;
} */
</style>
