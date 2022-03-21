<template>
<!-- <div>
<h1>List of ninjas</h1>
  <ul>
      <li v-for="ninja in ninjas">{{ ninja }}</li>
  </ul>
  </div> -->
</template>

<script>

export default {
  
  data () {
    return {
        ninjas[
            {name:'Ryu', specialty:'Vue components', show:false}
            {name:'Crystal', specialty:'HTML', show:false}
            {name:'Hitoshi', specialty:'Click Events', show:false}
            {name:'Dide', specialty:'Conditionals', show:false}
            {name:'Dodo', specialty:'Vue components', show:false}
            {name:'Yosha', specialty:'Vue components', show:false}





]
    //   ninjas:['Yoshi','Mario','Ryu']
    }
  },

}
</script>

<style scoped>
/* h1{
  color:green
} */
/* It styles also the h1 in App.vue
=>this rule is overwriting the color:purple in App.vue
 =>So if we want these styles to be component-specific =>"style scoped"
 =>When we scope styles, in these components Vue Js gives them an unique identifyer*/

</style>

