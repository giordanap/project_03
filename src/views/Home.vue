<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- It's not advisable to access a mutation in this way, but with an action. -->
    <h1
      :style="counterColor"
    >
      My counter: {{ counter }}
    </h1>
    <button @click="increase">Increase</button>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'Home',
  components: {

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
    ...mapMutations(['increase'])
  },
}
</script>
