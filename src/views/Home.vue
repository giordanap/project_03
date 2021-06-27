<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- It's not advisable to access a mutation in this way, but with an action. -->
    <h1 :style="counterColor"> My counter: {{ counter }} </h1>
    <btnAction :object="{state:true, number:50}"/>
    <btnAction :object="{state:false, number:25}" />
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
import btnAction from '../components/btnAction.vue'

export default {
  name: 'Home',
  components: {
    btnAction
  },
  /*
  access to store feature with $store.state.feature
  ... corresponds a spread operator
  Finally, access to output object gives state
  */
  computed: {
    ...mapState(['counter']),
    counterColor() {
      return [this.counter > 100 ? {'color':'green'} : {'color':'red'}]
    }
  },
  methods: {
    // This is another way to run a mutation
    // ...mapMutations(['increase']),
    // ...mapActions(['actionIncrease'])
    ...mapActions(['actionChange'])
  },
}
</script>
