<template>
  <!-- <div>
<h1>List of ninjas</h1>
  <ul>
      <li v-for="ninja in ninjas">{{ ninja }}</li>
  </ul>
  </div> -->
  <div id="ninjas">
      <ul>
          <li v-for="ninja in ninjas" v-on:click="ninja.show = !ninja.show">
              <h1>{{ninja.name}}</h1>
              <h3 v-show="ninja.show">{{ninja.specialty}}</h3>
              <!-- it'll only show when "show" is true -->
          </li>
      <!-- We attach to the li an on-click evt =>when we click
      on the li, its show property is toggled to true/false -->
      </ul>
  </div>
</template>

<script>

export default {

  data () {
    return {
        ninjas:[
            {name:'Ryu', specialty:'Vue components', show:false},
            // When the show property is set to false the ninja won't show its specialty
            {name:'Crystal', specialty:'HTML', show:false},
            {name:'Hitoshi', specialty:'Click Events', show:false},
            {name:'Dide', specialty:'Conditionals', show:false},
            {name:'Dodo', specialty:'CSS', show:false},
            {name:'Yosha', specialty:'Data Diggin', show:false}



]
    //   ninjas:['Yoshi','Mario','Ryu']
    }
  }

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

#ninjas{
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
}
ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}
li{
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
}

</style>
